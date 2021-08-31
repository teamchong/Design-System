import { Component, h, Host, VNode, Prop } from '@stencil/core';
import { PageTitle } from '@eventstore/router';

export type PageState = 'loading' | 'ready' | Error;

@Component({
    tag: 'docs-page',
    styleUrl: 'docs-page.css',
})
export class EsPage {
    @Prop() pageTitle!: string;
    @Prop() headerTitle?: string | false;
    @Prop() state: PageState = 'ready';
    @Prop() empty: boolean = false;

    @Prop() renderEmptyState?: () => VNode | VNode[];
    @Prop() headerRight?: () => VNode | VNode[];
    @Prop() crumbs?: HTMLDocsBreadcrumbElement['crumbs'];
    @Prop() noSidebar?: boolean;

    renderPageBody = () => {
        if (this.state === 'loading') return null;
        if (this.state instanceof Error) {
            return <y-error-state error={this.state} />;
        }
        if (this.empty && this.renderEmptyState) return this.renderEmptyState();
        return [
            (!!this.headerTitle || !!this.headerRight) && (
                <header>
                    {!!this.headerTitle && (
                        <docs-page-title>{this.headerTitle}</docs-page-title>
                    )}
                    {this.headerRight && (
                        <div class={'header_right'}>{this.headerRight()}</div>
                    )}
                </header>
            ),
            <slot />,
        ];
    };

    render() {
        return (
            <Host>
                <PageTitle>{this.pageTitle}</PageTitle>
                <main class={this.noSidebar ? 'no_sidebar' : ''}>
                    {this.crumbs && <docs-breadcrumb crumbs={this.crumbs} />}
                    {this.renderPageBody()}
                </main>
                <y-footer noSidebar={this.noSidebar} />
            </Host>
        );
    }
}
