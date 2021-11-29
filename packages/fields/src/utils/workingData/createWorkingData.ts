import { delegateFocus, HTTPError } from '@eventstore/utils';
import { toast } from '@eventstore/components';
import { logger } from '../logger';
import {
    WorkingDataOptions,
    WorkingData,
    Severity,
    FieldChangeEvent,
    ExtendOptions,
    FieldOptions,
    InternalFieldOptions,
    ValidationMessages,
} from '../../types';
import { expandOptions } from './expandOptions';
import { createStores } from './createStores';
import { focusError, insertError, wDKey } from '../../symbols';
import {
    isChildData,
    isWorkingData,
    isWorkingDataArray,
} from './isWorkingData';

/**
 * Create a "Working Data" store to back a form or set of fields.
 * Pass an object describing your data "`T`" with each value being one of:
 * - An inital value (required by default, uses default validation messages)
 * - a FieldOptions object, describing the field.
 * - Another WorkingData store
 * - A WorkingDataArray store, to back an array.
 */
export const createWorkingData = <T extends object>(
    options: WorkingDataOptions<T>,
): WorkingData<T> => {
    const fullOptions = expandOptions(options);
    const {
        dataStore: { state: data, reset: resetData, onChange },
        messageStore: { state: messages, reset: resetMessages },
        state: { state },
        fields,
        refs,
        children,
        validationFailedCallbacks,
        beforeFocusCallbacks,
    } = createStores(fullOptions);

    const failures = new Set<keyof T>();

    let failedValidation = false;
    let validationTimeout: number;
    let forcingFocus = false;
    let awaiters: Array<(value: boolean | PromiseLike<boolean>) => void> = [];

    const fullData = (): T =>
        Array.from(fields.entries()).reduce<T>((acc, [key, field]) => {
            if (isChildData(field)) {
                acc[key] = field.data;
            } else {
                acc[key] = data[key];
            }
            return acc;
        }, {} as T);

    const processValidationFailure = (
        key: keyof T,
        severity: Severity,
        message: string,
        id: string,
    ) => {
        if (!messages[key]) {
            logger.warn(`Unknown key "${key}" passed to validation failure`);
            return;
        }

        validationFailedCallbacks
            .get(key)
            ?.forEach((cb) =>
                cb({ id, severity, message, key }, refs.get(key)),
            );
        validationFailedCallbacks
            .get('*' as never)
            ?.forEach((cb) =>
                cb({ id, severity, message, key }, refs.get(key)),
            );

        messages[key] = {
            ...messages[key],
            [severity]: [...messages[key][severity], message],
        };
    };

    const insertValidationError = (
        [k, ...path]: string[],
        severity: Severity,
        message: string,
        id: string,
    ) => {
        const key = k as keyof T;
        const field = fields.get(key);

        if (isChildData(field)) {
            failures.add(key);
            field[insertError](
                !path.length ? [':root'] : path,
                severity,
                message,
                id,
            );
            return;
        }

        if (key === ':root') {
            processValidationFailure(key, severity, message, id);
            return;
        }

        if (field) {
            failures.add(key);
            processValidationFailure(key, severity, message, id);
            return;
        }

        logger.warn(
            `Unknown keys "${[k, ...path].join(
                '.',
            )}" passed to validation failure`,
        );
        return;
    };

    const focusFirstError = async (): Promise<boolean> => {
        for (const [key, field] of fields) {
            if (!failures.has(key)) continue;

            if (isChildData(field)) {
                const focused = await field[focusError]();
                if (focused) return true;
                continue;
            }

            const ref = refs.get(key);
            const before = await Promise.all(
                Array.from(
                    beforeFocusCallbacks,
                    async (cb): Promise<boolean> => {
                        try {
                            const result = await cb(key, ref);
                            return typeof result === 'boolean' ? result : true;
                        } catch (error) {
                            return false;
                        }
                    },
                ),
            );

            if (!ref || !before.every(Boolean)) continue;

            delegateFocus(ref, { preventScroll: true });
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });

            return true;
        }

        return false;
    };

    const freeze = () => {
        state.frozen = true;
        children.forEach((d) => d.freeze());
    };

    const unfreeze = () => {
        state.frozen = false;
        children.forEach((d) => d.unfreeze());
    };

    const listen = (e: FieldChangeEvent<T>) => {
        e.stopPropagation();
        if (state.frozen) return;
        const { name, value } = e.detail;

        if (!fields.has(name)) {
            logger.warn(`Unknown event "${name}" passed to listen`);
            return;
        }

        data[name] = value;

        if (failedValidation) {
            validate(false);
        }
    };

    const runValidation = async (forceFocus = true) => {
        resetMessages();
        const validationPromises: Promise<void>[] = [];
        failures.clear();
        try {
            for (const [key, field] of fields) {
                if (isChildData(field)) {
                    validationPromises.push(
                        (async () => {
                            const success = await field.validate(false);
                            if (success) return;
                            failures.add(key);
                        })(),
                    );
                    continue;
                }

                const {
                    optional,
                    checkExists,
                    message: requiredMessage,
                    validations,
                } = field;

                const value = data[key];
                const exists = checkExists(value, data);
                if (!exists) {
                    if (!optional(data)) {
                        failures.add(key);

                        processValidationFailure(
                            key,
                            'error',
                            typeof requiredMessage === 'string'
                                ? requiredMessage
                                : requiredMessage(value, data),
                            'required',
                        );
                    }
                    continue;
                }
                validations.forEach(
                    ({ validator, message, severity = 'error', id }, i) =>
                        validationPromises.push(
                            (async () => {
                                const success = await validator(value, data);
                                if (success) return;

                                failures.add(key);
                                processValidationFailure(
                                    key,
                                    severity,
                                    typeof message === 'string'
                                        ? message
                                        : message(value, data),
                                    id ?? `${i}`,
                                );
                            })(),
                        ),
                );
            }
            await Promise.all(validationPromises);

            failedValidation = !!failures.size;

            if (!failedValidation) return true;
            if (forceFocus) {
                await focusFirstError();
            }
        } catch (error) {
            logger.error('Validation Failed', error);
        }
        return false;
    };

    const validate = (forceFocus = true) => {
        return new Promise<boolean>((resolve) => {
            forcingFocus = forcingFocus || forceFocus;
            awaiters.push(resolve);
            clearTimeout(validationTimeout);
            validationTimeout = window.setTimeout(async () => {
                const success = await runValidation(forcingFocus);
                awaiters.forEach((resolve) => resolve(success));
                awaiters = [];
                forcingFocus = false;
            });
        });
    };

    return {
        get data() {
            return fullData();
        },
        get frozen() {
            return state.frozen;
        },
        get messages() {
            return Object.values<ValidationMessages>(
                messages,
            ).reduce<ValidationMessages>(
                (acc, field) => {
                    acc.error.push(...field.error);
                    acc.warning.push(...field.warning);
                    acc.info.push(...field.info);
                    return acc;
                },
                { error: [], warning: [], info: [] },
            );
        },
        get [wDKey](): true {
            return true;
        },
        reset: () => {
            resetData();
            resetMessages();
            children.forEach((d) => d.reset());
        },
        update: (partial) => {
            if (state.frozen) return;
            for (const [key, value] of Object.entries<any>(partial)) {
                const wd = fields.get(key as keyof T);
                if (isChildData(wd)) {
                    wd.update(value);
                } else {
                    (data as any)[key] = value;
                }
            }
        },
        set: (key, value) => {
            if (state.frozen) return;
            data[key] = value;
        },
        connect: (key: keyof T, ...args: any[]) => {
            const wd = fields.get(key);

            if (isChildData(wd)) {
                if (args.length) {
                    return (wd.connect as any)(...args);
                }

                return {
                    name: key as string,
                    data: wd,
                };
            }

            if (!args.length) {
                return {
                    name: key as string,
                    value: data[key],
                    invalid: !!messages[key].error.length,
                    messages: messages[key],
                    onFieldchange: listen,
                    ref: (r?: HTMLElement) => {
                        if (r) {
                            refs.set(key, r);
                        } else {
                            refs.delete(key);
                        }
                    },
                };
            }

            throw new Error(
                `Bad path in workingdata connect: ${[key, ...args]}`,
            );
        },
        onChange,
        onValidationFailed: (key, callback) => {
            if (!validationFailedCallbacks.has(key)) {
                validationFailedCallbacks.set(key, new Set());
            }
            validationFailedCallbacks.get(key)?.add(callback);
            return () => {
                validationFailedCallbacks.get(key)?.delete(callback);
            };
        },
        onBeforeFocus: (callback) => {
            beforeFocusCallbacks.add(callback);
            return () => {
                beforeFocusCallbacks.delete(callback);
            };
        },
        listen,
        validate,
        submit: async (fn, { forceFocus = true } = {}) => {
            if (state.frozen) return;
            freeze();
            if (await validate(forceFocus)) {
                try {
                    await fn(fullData());
                } catch (error) {
                    if (error instanceof HTTPError) {
                        const {
                            title,
                            detail,
                            fields = {},
                        } = await error.details();
                        for (const [key, message] of Object.entries(fields)) {
                            insertValidationError(
                                key.split('.'),
                                'error',
                                message as string,
                                'submit',
                            );
                        }
                        failedValidation = true;
                        toast.error({
                            title,
                            message: detail,
                        });
                        if (forceFocus) await focusFirstError();
                    } else {
                        logger.error(error);
                    }
                }
            }
            unfreeze();
        },
        freeze,
        unfreeze,
        extend: (options) => {
            for (const [k, value] of Object.entries(options)) {
                const key = k as keyof T;
                const field = fields.get(key);

                if (!field) {
                    logger.warn(`Unknown key "${key}" passed to extend`);
                    continue;
                }

                if (isWorkingData(field)) {
                    field.extend(value as ExtendOptions<T[typeof key]>);
                    continue;
                }

                if (isWorkingDataArray(field)) {
                    continue;
                }

                const options = value as Partial<
                    FieldOptions<T[typeof key], T>
                >;
                const expanded: InternalFieldOptions<T[typeof key], T> = {
                    ...field,
                    ...options,
                    optional:
                        typeof options.optional === 'boolean'
                            ? () => options.optional as boolean
                            : options.optional ?? field.optional,
                    validations: [
                        ...field.validations,
                        ...(options.validations ?? []),
                    ],
                };

                fields.set(key, expanded);
            }
        },

        [focusError]: focusFirstError,
        [insertError]: insertValidationError,
    };
};
