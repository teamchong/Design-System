import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import type { IconDescription } from '@eventstore/components';
import { ES_FIELDS } from '../../icons/namespace';
import type { FieldChange } from '../../types';

/** A checkbox component */
@Component({
    tag: 'es-checkbox',
    styleUrl: 'es-checkbox.css',
    shadow: true,
})
export class EsCheckbox {
    /** Emitted when the value of the field is changed. */
    @Event({ bubbles: true }) fieldchange!: EventEmitter<FieldChange<boolean>>;

    /** The name of the field. */
    @Prop() name!: string;
    /** The current value of the field. */
    @Prop() value!: boolean;
    /** If the field is disabled. */
    @Prop() disabled?: boolean;
    /** If the field is editable. */
    @Prop() readonly?: boolean;
    /** If the field is currently in an error state. */
    @Prop() invalid?: boolean;
    /** The icon to use. */
    @Prop() icon: IconDescription = [ES_FIELDS, 'check'];

    render() {
        return (
            <label class={{ field: true, invalid: !!this.invalid }}>
                <input
                    class={'input'}
                    type={'checkbox'}
                    name={this.name}
                    onChange={this.onChange}
                    disabled={this.disabled}
                    readonly={this.readonly}
                    checked={this.value}
                />
                <es-icon icon={this.icon} class={'checkbox'} size={12} />
                <span class={'label'}>
                    <slot />
                </span>
            </label>
        );
    }

    private onChange = (e: any) => {
        this.fieldchange.emit({
            name: this.name,
            value: e?.target?.checked,
        });
    };
}
