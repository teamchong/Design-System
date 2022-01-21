/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Crumb } from "./components/es-breadcrumb/types";
export namespace Components {
    interface EsBreadcrumb {
        /**
          * The breadcrumbs to the current page.
         */
        "crumbs": Crumb[];
        /**
          * Do not warn if the crumbs do not match the current router location. (Only warns in dev mode)
         */
        "noValidate": boolean;
    }
    interface EsLogo {
        /**
          * Height to constrain by.
         */
        "height": number;
        /**
          * Width to constrain by.
         */
        "width": number;
    }
    interface EsPageTitle {
    }
    interface EsThemeDropdown {
    }
    interface EsThemePicker {
    }
}
declare global {
    interface HTMLEsBreadcrumbElement extends Components.EsBreadcrumb, HTMLStencilElement {
    }
    var HTMLEsBreadcrumbElement: {
        prototype: HTMLEsBreadcrumbElement;
        new (): HTMLEsBreadcrumbElement;
    };
    interface HTMLEsLogoElement extends Components.EsLogo, HTMLStencilElement {
    }
    var HTMLEsLogoElement: {
        prototype: HTMLEsLogoElement;
        new (): HTMLEsLogoElement;
    };
    interface HTMLEsPageTitleElement extends Components.EsPageTitle, HTMLStencilElement {
    }
    var HTMLEsPageTitleElement: {
        prototype: HTMLEsPageTitleElement;
        new (): HTMLEsPageTitleElement;
    };
    interface HTMLEsThemeDropdownElement extends Components.EsThemeDropdown, HTMLStencilElement {
    }
    var HTMLEsThemeDropdownElement: {
        prototype: HTMLEsThemeDropdownElement;
        new (): HTMLEsThemeDropdownElement;
    };
    interface HTMLEsThemePickerElement extends Components.EsThemePicker, HTMLStencilElement {
    }
    var HTMLEsThemePickerElement: {
        prototype: HTMLEsThemePickerElement;
        new (): HTMLEsThemePickerElement;
    };
    interface HTMLElementTagNameMap {
        "es-breadcrumb": HTMLEsBreadcrumbElement;
        "es-logo": HTMLEsLogoElement;
        "es-page-title": HTMLEsPageTitleElement;
        "es-theme-dropdown": HTMLEsThemeDropdownElement;
        "es-theme-picker": HTMLEsThemePickerElement;
    }
}
declare namespace LocalJSX {
    interface EsBreadcrumb {
        /**
          * The breadcrumbs to the current page.
         */
        "crumbs"?: Crumb[];
        /**
          * Do not warn if the crumbs do not match the current router location. (Only warns in dev mode)
         */
        "noValidate"?: boolean;
    }
    interface EsLogo {
        /**
          * Height to constrain by.
         */
        "height"?: number;
        /**
          * Width to constrain by.
         */
        "width"?: number;
    }
    interface EsPageTitle {
    }
    interface EsThemeDropdown {
    }
    interface EsThemePicker {
    }
    interface IntrinsicElements {
        "es-breadcrumb": EsBreadcrumb;
        "es-logo": EsLogo;
        "es-page-title": EsPageTitle;
        "es-theme-dropdown": EsThemeDropdown;
        "es-theme-picker": EsThemePicker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "es-breadcrumb": LocalJSX.EsBreadcrumb & JSXBase.HTMLAttributes<HTMLEsBreadcrumbElement>;
            "es-logo": LocalJSX.EsLogo & JSXBase.HTMLAttributes<HTMLEsLogoElement>;
            "es-page-title": LocalJSX.EsPageTitle & JSXBase.HTMLAttributes<HTMLEsPageTitleElement>;
            "es-theme-dropdown": LocalJSX.EsThemeDropdown & JSXBase.HTMLAttributes<HTMLEsThemeDropdownElement>;
            "es-theme-picker": LocalJSX.EsThemePicker & JSXBase.HTMLAttributes<HTMLEsThemePickerElement>;
        }
    }
}
