import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Method,
    State,
    Fragment,
    Host,
} from '@stencil/core';
import { theme } from '@eventstore/theme';

/** A switchable switch. */
@Component({
    tag: 'es-switch',
    styleUrl: 'es-switch.css',
    shadow: true,
})
export class EsSwitch {
    /** Emitted when the value of the field is changed. */
    @Event({ bubbles: true }) fieldchange!: EventEmitter;

    /** The name of the field. */
    @Prop({ reflect: true }) name!: string;
    /** The current value of the field. */
    @Prop() value!: boolean;
    /** If the field is disabled. */
    @Prop() disabled?: boolean;
    /** If the field is editable. */
    @Prop() readonly?: boolean;
    /** If the field is currently in an error state. */
    @Prop() invalid?: boolean;
    /** Text to display in high contrast mode. */
    @Prop() text: { on: string; off: string } = { on: 'On', off: 'Off' };

    @State() pending: boolean = false;

    /** Allows you to pause interaction with the input while an operation completes. */
    @Method() async setPending(pending: boolean) {
        this.pending = pending;
    }

    render() {
        return (
            <Host high-contrast={theme.isHighContrast()}>
                <button
                    class={{
                        field: true,
                        invalid: !!this.invalid,
                        checked: this.value,
                    }}
                    tabIndex={0}
                    onKeyDown={this.keyDown}
                    onClick={this.onClick}
                    disabled={this.disabled}
                >
                    {theme.isHighContrast() ? (
                        <>
                            <es-icon
                                icon={'check'}
                                class={'checkbox'}
                                size={12}
                            />
                            <span>
                                {this.value ? this.text.on : this.text.off}
                            </span>
                        </>
                    ) : (
                        <svg
                            xmlns={'http://www.w3.org/2000/svg'}
                            width={45}
                            height={16}
                            viewBox={'0 0 45 16'}
                            class={'switch'}
                        >
                            <line
                                class={'track'}
                                x1={4}
                                x2={41}
                                y1={8}
                                y2={8}
                                stroke-linecap={'round'}
                            />
                            <circle class={'handle'} cx={8} cy={8} r={8} />
                        </svg>
                    )}
                </button>
            </Host>
        );
    }

    private keyDown = (e: KeyboardEvent) => {
        if (this.disabled || this.pending) return;
        if (e.key === ' ' || e.key === 'Enter') {
            this.fieldchange.emit({
                name: this.name,
                value: !this.value,
            });
        }
    };

    private onClick = () => {
        if (this.disabled || this.pending) return;
        this.fieldchange.emit({
            name: this.name,
            value: !this.value,
        });
    };
}
