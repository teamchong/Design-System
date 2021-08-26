import { Component, h, Prop } from '@stencil/core';
import { Link } from '@eventstore/router';

export type SidebarLinkVariant = 'default' | 'small';

@Component({
    tag: 'docs-sidebar-link',
    styleUrl: 'docs-sidebar-link.css',
    shadow: true,
})
export class SidebarLink {
    @Prop() url?: string;
    @Prop() urlMatch?: string;
    @Prop() icon?: string;
    @Prop() disabled: boolean = false;
    @Prop({ reflect: true }) level?: number;
    @Prop({ reflect: true }) variant: SidebarLinkVariant = 'default';

    render() {
        return (
            <Link
                url={this.disabled ? undefined : this.url}
                urlMatch={this.urlMatch}
                class={`${this.disabled ? 'disabled' : ''}`}
                aria-disabled={this.disabled}
            >
                {this.icon && <es-icon icon={this.icon} />}
                <span class="inner">
                    <slot />
                </span>
            </Link>
        );
    }
}
