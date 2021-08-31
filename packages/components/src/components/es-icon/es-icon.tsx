import {
    Component,
    h,
    Prop,
    Method,
    Element,
    FunctionalComponent,
    State,
    Watch,
} from '@stencil/core';
import { createLogger } from '@eventstore/utils';
import { iconStore } from '../../utils/iconStore';

const logger = createLogger('es-icon', 'orange');

/**
 * Displays an icon loaded from the `iconStore`. An icon named "spinner" will automatically spin.
 * See [IconStore](/components/variables/iconStore) for details on how to load icons.
 */
@Component({
    tag: 'es-icon',
    styleUrl: 'es-icon.css',
    shadow: true,
})
export class Icon {
    @Element() host!: HTMLEsIconElement;

    /** Which icon to display. */
    @Prop() icon!: string;
    /** The hight and width to scale the icon to. */
    @Prop() size: number = 24;
    /** Rotate the icon to a speciied angle. */
    @Prop() angle: number = 0;
    /** Apply a spin animation. */
    @Prop() spin?: boolean;
    /** When spinning, should it spin clockwise or anticlockwise. */
    @Prop() spinDirection: 'clockwise' | 'antiClockwise' = 'clockwise';

    @State() Component: FunctionalComponent<any> = (props) => (
        <svg {...props}></svg>
    );

    /** Provides a promise that resolves at the end of a single spin, if the icon is spinning. */
    @Method() async spinEnd() {
        const spinner = this.host.shadowRoot?.querySelector('.spin');
        if (!spinner) return;
        return new Promise<void>((resolve) => {
            const spinComplete = () => {
                spinner.removeEventListener('animationiteration', spinComplete);
                resolve();
            };
            spinner.addEventListener('animationiteration', spinComplete);
        });
    }

    componentWillLoad() {
        this.loadIcon(this.icon);
    }

    @Watch('icon')
    onIconChange(icon: string, previousIcon: string) {
        if (icon !== previousIcon) {
            this.loadIcon(this.icon);
        }
    }

    render() {
        const Component = this.Component;

        return (
            <Component
                aria-hidden={'true'}
                focusable={'false'}
                role={'img'}
                height={this.size}
                width={this.size}
                class={{
                    spin: this.spin || this.icon === 'spinner',
                    antiClockwise: this.spinDirection === 'antiClockwise',
                }}
                style={
                    this.angle !== 0
                        ? { transform: `rotate(${this.angle}deg)` }
                        : undefined
                }
            />
        );
    }

    private loadIcon = async (name: string) => {
        if (!iconStore.has(name)) {
            logger.log.once(
                `Unknown icon: '${name}'`,
                'Please add it to iconStore.',
            );
            return;
        }

        const component = await iconStore.get(name);

        this.Component = component;
    };
}
