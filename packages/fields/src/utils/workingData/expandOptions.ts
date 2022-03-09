import type {
    WorkingDataOptions,
    InternalWorkingDataOptions,
    InternalFieldOptions,
    WorkingData,
    ArrayOptions,
    InternalArrayOptions,
    WorkingDataArray,
} from '../../types';
import { defaultCheckExists } from './defaultCheckExists';
import { isChildData } from './isWorkingData';

const defaults: InternalFieldOptions<any, any> = {
    initialValue: null,
    checkExists: defaultCheckExists,
    optional: () => false,
    message: 'Field is required',
    validations: [],
};

export const expandOptions = <T>(
    options: WorkingDataOptions<T>,
): InternalWorkingDataOptions<T> => {
    const expandedOptions: Record<
        string,
        | InternalFieldOptions<any, any>
        | WorkingData<any>
        | WorkingDataArray<any>
    > = {};

    for (const [key, value] of Object.entries<any>(options)) {
        if (isChildData(value)) {
            expandedOptions[key] = value;
        } else if (
            value != null &&
            typeof value === 'object' &&
            'initialValue' in value
        ) {
            expandedOptions[key] = {
                ...defaults,
                ...value,
                optional:
                    typeof value.optional === 'boolean'
                        ? () => value.optional
                        : value.optional ?? defaults.optional,
            };
        } else {
            expandedOptions[key] = {
                ...defaults,
                initialValue: value,
            };
        }
    }

    return expandedOptions as any;
};

export const expandArrayOptions = <T>({
    name,
    initialValue = [],
    minLength,
    maxLength,
    globalValidations = [],
    valueOptional,
    checkValueExists = defaultCheckExists,
    requiredValueMessage = 'Field is required',
    validations = [],
}: ArrayOptions<T>): InternalArrayOptions<T> => ({
    name,
    initialValue,
    minLength,
    maxLength,
    globalValidations,
    valueOptional:
        typeof valueOptional === 'boolean'
            ? () => valueOptional
            : valueOptional ?? defaults.optional,
    checkValueExists,
    requiredValueMessage,
    validations,
});
