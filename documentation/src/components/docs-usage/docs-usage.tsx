import {
    Component,
    h,
    Host,
    Prop,
    State,
    Watch,
    Fragment,
    Build,
} from '@stencil/core';

import { createModels } from './utils/createModels';
import { extractPartsFromMarkdown } from './utils/extractPartsFromMarkdown';
import { generatePreview } from './utils/generatePreview';
import type { Models, Parts, Settings } from './utils/types';
import { bundle } from './utils/usage.worker';

const HTML = '/preview.html';

@Component({
    shadow: true,
    tag: 'docs-usage',
    styleUrl: 'docs-usage.css',
})
export class DocsUsage {
    private iframe?: HTMLIFrameElement;
    private growObserver = new ResizeObserver(([entry]) => {
        const targetSize =
            entry.target.ownerDocument.scrollingElement?.scrollHeight;
        this.contentHeight = Math.max(
            targetSize ?? 50,
            this.options.grow || 500,
        );
    });

    @Prop() identifier!: string;
    @Prop() usage!: string;
    @State() building!: boolean;
    @State() parts!: Parts;
    @State() error?: string;
    @State() active!: string;
    @State() options!: Omit<Settings, 'parts'>;
    @State() contentHeight = 500;

    @State() models: Models = {};
    @State() tabs: HTMLEsTabsElement['tabs'] = [];

    @Watch('usage')
    componentWillLoad() {
        this.building = true;

        const { parts, ...options } = extractPartsFromMarkdown(
            this.usage ?? '',
        );

        this.options = options;
        this.parts = parts;

        this.tabs = Object.values(this.parts)
            .filter(({ hidden }) => !hidden)
            .map(({ fileName, title }) => ({
                id: fileName,
                title,
            }));

        this.active = this.tabs[0].id;

        if (Build.isServer) return;

        this.growObserver.disconnect();
        this.contentHeight = this.options.grow ? this.options.grow : 500;
        this.models = createModels(this.parts, this.onEditorChange);
    }

    @Watch('parts')
    async generatePreview() {
        if (!this.options.preview || Build.isServer) return;

        const files = generatePreview({ parts: this.parts, ...this.options });
        const result = await bundle(files);

        this.error = result.error;

        if (result.bundle) {
            this.reloadPreview(result.bundle);
        }
    }

    render() {
        return (
            <Host
                class={{
                    'no-preview': !this.options.preview,
                    'no-code': !this.options.code,
                    grow: !!this.options.grow,
                }}
            >
                {this.options.preview && (
                    <>
                        {this.building && (
                            <div class={'building'}>{'loading preview...'}</div>
                        )}

                        <iframe
                            ref={this.captureiFrame}
                            src={HTML}
                            class={{ hidden: this.building }}
                            height={
                                this.options.grow
                                    ? this.contentHeight
                                    : undefined
                            }
                        />
                    </>
                )}
                {this.options.code && (
                    <es-tabs
                        tabs={this.tabs}
                        active={this.active}
                        activeParam={false}
                        onTabChange={this.tabChange}
                    >
                        {!Build.isServer && (
                            <es-editor
                                key={`${this.identifier}-${this.active}`}
                                slot={this.active}
                                options={{
                                    model: this.models[this.active],
                                }}
                            />
                        )}
                    </es-tabs>
                )}
            </Host>
        );
    }

    private tabChange = (e: CustomEvent<string>) => {
        this.active = e.detail;
    };

    private onEditorChange = (key: string, value: string) => {
        this.parts = {
            ...this.parts,
            [key]: {
                ...this.parts[key],
                content: value,
            },
        };
    };

    private reloadPreview = (bundle: string) => {
        if (!this.iframe || !this.iframe.contentWindow) return;

        this.iframe.addEventListener(
            'load',
            () => {
                const doc = this.iframe!.contentDocument!;
                const script = doc.createElement('script');
                script.setAttribute('type', 'module');
                script.innerHTML = bundle;
                doc.head.appendChild(script);

                doc.body.innerHTML = '<preview-component></preview-component>';
                this.building = false;

                this.growObserver.disconnect();
                this.growObserver.observe(doc.body);
            },
            { once: true },
        );

        const { location } = this.iframe.contentWindow;

        if (location.pathname !== HTML) {
            location.pathname = HTML;
        } else {
            location.reload();
        }
    };

    private captureiFrame = (el?: HTMLIFrameElement) => {
        this.iframe = el;
    };
}
