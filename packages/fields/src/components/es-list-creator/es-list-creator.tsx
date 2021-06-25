import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    State,
    Host,
    Element,
    Watch,
    VNode,
} from '@stencil/core';

import { FieldChangeEvent, WorkingDataArray } from '../../types';
import { RenderTypeaheadField, TypeaheadOption } from '../es-typeahead/types';
import { Field } from '../Field/Field';

@Component({
    tag: 'es-list-creator',
    styleUrl: 'es-list-creator.css',
    shadow: true,
})
export class ListCreator {
    @Element() host!: HTMLEsListCreatorElement;
    @Event({ bubbles: true }) fieldchange!: EventEmitter;

    @Prop() label!: string;
    @Prop() placeholder!: string;
    @Prop() disabled?: boolean;
    @Prop() icon!: string;
    @Prop() options!: TypeaheadOption[];

    @Prop() name!: string;
    @Prop() data!: WorkingDataArray<string>;

    @Prop() renderItem = ({ name }: TypeaheadOption): VNode => (
        <input readonly class={'input'} value={name} tabindex={-1} />
    );

    @State() invalidInput: boolean = false;
    @State() remainingOptions: TypeaheadOption[] = [];
    @State() expandedValues: TypeaheadOption[] = [];

    componentWillLoad() {
        this.updateOptions();
        this.data.onChange(() => this.updateOptions());
    }

    @Watch('options')
    updateOptions() {
        const options = this.options;
        const values = this.data.data;

        this.remainingOptions = options.filter(
            ({ value }) => !values.includes(value),
        );
        this.expandedValues = values
            .map((value) => this.options.find((o) => o.value == value)!)
            .filter(Boolean);
    }

    renderField: RenderTypeaheadField = ({ Input, open }) => (
        <Input class={{ input: true, open }} placeholder={this.placeholder} />
    );

    render() {
        return (
            <Host>
                <Field
                    label={this.label}
                    messages={this.data.messages}
                    invalid={!!this.data.messages.error.length}
                >
                    <es-typeahead
                        clearOnSelect
                        name={`${this.name}-typeahead`}
                        value={this.data.data}
                        options={this.remainingOptions}
                        renderField={this.renderField}
                        onFieldchange={this.onTypeaheadChange}
                    />
                    <es-button
                        class={'create'}
                        variant={'outline'}
                        color={'secondary'}
                        tabIndex={-1}
                    >
                        <es-icon icon={'plus'} size={20} />
                    </es-button>
                </Field>
                {!!this.data.data.length && (
                    <ul class={'value_list'} part={'value-list'}>
                        {this.expandedValues.map((value, i) => (
                            <li
                                key={value.value}
                                class={'value_list_item'}
                                part={'value-list-item'}
                            >
                                <es-icon
                                    icon={this.icon}
                                    class={'value_list_item_icon'}
                                />
                                {this.renderItem(value)}
                                <es-button
                                    class={'value_list_item_delete'}
                                    variant={'outline'}
                                    color={'secondary'}
                                    onClick={this.onDelete(i)}
                                >
                                    <es-icon icon={'trash'} size={20} />
                                </es-button>
                            </li>
                        ))}
                    </ul>
                )}
            </Host>
        );
    }

    private onDelete = (index: number) => () => {
        this.data.delete(index);
    };

    private onTypeaheadChange = (
        e: FieldChangeEvent<{ typeahead: string[] }>,
    ) => {
        e.stopPropagation();
        this.data.update(e.detail.value);
    };
}
