/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { LocationSegments, Router } from "@eventstore/router";
export namespace Components {
    interface PreviewUsageLocation {
        "location"?: LocationSegments;
        "router": Router;
    }
}
declare global {
    interface HTMLPreviewUsageLocationElement extends Components.PreviewUsageLocation, HTMLStencilElement {
    }
    var HTMLPreviewUsageLocationElement: {
        prototype: HTMLPreviewUsageLocationElement;
        new (): HTMLPreviewUsageLocationElement;
    };
    interface HTMLElementTagNameMap {
        "preview-usage-location": HTMLPreviewUsageLocationElement;
    }
}
declare namespace LocalJSX {
    interface PreviewUsageLocation {
        "location"?: LocationSegments;
        "router": Router;
    }
    interface IntrinsicElements {
        "preview-usage-location": PreviewUsageLocation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "preview-usage-location": LocalJSX.PreviewUsageLocation & JSXBase.HTMLAttributes<HTMLPreviewUsageLocationElement>;
        }
    }
}