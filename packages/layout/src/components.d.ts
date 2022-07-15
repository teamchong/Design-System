/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Crumb } from "./components/es-breadcrumb/types";
import { DisplayErrorVariant } from "./components/es-display-error/types";
import { HeaderDropdownButtonVariant } from "./components/es-header-dropdown/types";
import { IconDescription } from "@eventstore-ui/components";
import { LoadingBarStatus } from "./components/es-loading-bar/types";
import { NavNode, NavTree } from "./components/es-nav/types";
export namespace Components {
    interface DevRoot {
    }
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
    interface EsDisplayError {
        /**
          * The unrecoverable error. For a normal error, error.message will be displayed. For a `HTTPError` from `@eventstore-ui/utils` the details title and description will be shown.
         */
        "error": unknown;
        /**
          * Which styling variant to use.
         */
        "variant": DisplayErrorVariant;
    }
    interface EsHeader {
    }
    interface EsHeaderDropdown {
        /**
          * Display a dot on the icon, to attract attention to the button.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * text for use in the button.
         */
        "buttonText"?: string;
        /**
          * If a caret should be rendered.
         */
        "caret": boolean;
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the button should be disabled.
         */
        "disabled": boolean;
        /**
          * Icon for use in the button.
         */
        "icon"?: IconDescription;
        /**
          * Apply an indent to the left of the button, for basic nesting.
         */
        "level"?: number;
        /**
          * Which styling variant to use.
         */
        "variant": HeaderDropdownButtonVariant;
    }
    interface EsLayoutButton {
        /**
          * If the button should display as active
         */
        "active": boolean;
        /**
          * Display a dot on the icon, to attract attention to the button.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the button should be disabled.
         */
        "disabled": boolean;
        /**
          * Display an icon on the left.
         */
        "icon"?: IconDescription;
        /**
          * If the button is currently active
         */
        "isActive": () => Promise<boolean>;
        /**
          * Apply an indent to the left of the button, for basic nesting.
         */
        "level"?: number;
    }
    interface EsLayoutLink {
        /**
          * Display a dot on the icon, to attract attention to the link.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the link should be disabled.
         */
        "disabled": boolean;
        /**
          * Display an icon on the left.
         */
        "icon"?: IconDescription;
        /**
          * If the link is currently active
         */
        "isActive": () => Promise<boolean>;
        /**
          * Apply an indent to the left of the link, for basic nesting.
         */
        "level"?: number;
        /**
          * Use exact url matching for active.
         */
        "matchExact"?: boolean;
        /**
          * Use strict url matching for active.
         */
        "matchStrict"?: boolean;
        /**
          * When to display as active. Uses the `url` by default.
         */
        "matchUrl"?: string;
        /**
          * Where to link to.
         */
        "url"?: string;
    }
    interface EsLayoutSection {
        /**
          * If the section is collapsable
         */
        "collapsable": boolean;
        /**
          * If the section should be collapsed by default
         */
        "defaultCollapsed": boolean;
        /**
          * Optionally renders a title
         */
        "sectionTitle"?: string;
    }
    interface EsLoadingBar {
        /**
          * The bar's name, for use in `setProgress`
         */
        "name": string;
        /**
          * Set (and animate to) a progress.
         */
        "progress": (completion: number, status?: LoadingBarStatus) => Promise<void>;
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
    interface EsNav {
        /**
          * The `NavTree` data structure that the navigation menu will be built from..
         */
        "navTree": NavTree;
    }
    interface EsNavNode0 {
        "active": boolean;
        "node": NavNode;
        "toggleRequest": () => void;
    }
    interface EsNavNode1 {
        "active": boolean;
        "node": NavNode;
        "toggleRequest": () => void;
    }
    interface EsNavNode2 {
        "node": NavNode;
    }
    interface EsPageTitle {
    }
    interface EsPanel {
    }
    interface EsPanelHeader {
    }
    interface EsSidebar {
    }
    interface EsSidebarDropdown {
        /**
          * The icon to display if no nested es-layout-link or es-layout-button is active
         */
        "defaultIcon": IconDescription;
        /**
          * The title to display if no nested es-layout-link or es-layout-button is active
         */
        "defaultTitle": string;
    }
    interface EsThemeDropdown {
    }
    interface EsThemePicker {
    }
    interface EsToolbar {
    }
}
declare global {
    interface HTMLDevRootElement extends Components.DevRoot, HTMLStencilElement {
    }
    var HTMLDevRootElement: {
        prototype: HTMLDevRootElement;
        new (): HTMLDevRootElement;
    };
    interface HTMLEsBreadcrumbElement extends Components.EsBreadcrumb, HTMLStencilElement {
    }
    var HTMLEsBreadcrumbElement: {
        prototype: HTMLEsBreadcrumbElement;
        new (): HTMLEsBreadcrumbElement;
    };
    interface HTMLEsDisplayErrorElement extends Components.EsDisplayError, HTMLStencilElement {
    }
    var HTMLEsDisplayErrorElement: {
        prototype: HTMLEsDisplayErrorElement;
        new (): HTMLEsDisplayErrorElement;
    };
    interface HTMLEsHeaderElement extends Components.EsHeader, HTMLStencilElement {
    }
    var HTMLEsHeaderElement: {
        prototype: HTMLEsHeaderElement;
        new (): HTMLEsHeaderElement;
    };
    interface HTMLEsHeaderDropdownElement extends Components.EsHeaderDropdown, HTMLStencilElement {
    }
    var HTMLEsHeaderDropdownElement: {
        prototype: HTMLEsHeaderDropdownElement;
        new (): HTMLEsHeaderDropdownElement;
    };
    interface HTMLEsLayoutButtonElement extends Components.EsLayoutButton, HTMLStencilElement {
    }
    var HTMLEsLayoutButtonElement: {
        prototype: HTMLEsLayoutButtonElement;
        new (): HTMLEsLayoutButtonElement;
    };
    interface HTMLEsLayoutLinkElement extends Components.EsLayoutLink, HTMLStencilElement {
    }
    var HTMLEsLayoutLinkElement: {
        prototype: HTMLEsLayoutLinkElement;
        new (): HTMLEsLayoutLinkElement;
    };
    interface HTMLEsLayoutSectionElement extends Components.EsLayoutSection, HTMLStencilElement {
    }
    var HTMLEsLayoutSectionElement: {
        prototype: HTMLEsLayoutSectionElement;
        new (): HTMLEsLayoutSectionElement;
    };
    interface HTMLEsLoadingBarElement extends Components.EsLoadingBar, HTMLStencilElement {
    }
    var HTMLEsLoadingBarElement: {
        prototype: HTMLEsLoadingBarElement;
        new (): HTMLEsLoadingBarElement;
    };
    interface HTMLEsLogoElement extends Components.EsLogo, HTMLStencilElement {
    }
    var HTMLEsLogoElement: {
        prototype: HTMLEsLogoElement;
        new (): HTMLEsLogoElement;
    };
    interface HTMLEsNavElement extends Components.EsNav, HTMLStencilElement {
    }
    var HTMLEsNavElement: {
        prototype: HTMLEsNavElement;
        new (): HTMLEsNavElement;
    };
    interface HTMLEsNavNode0Element extends Components.EsNavNode0, HTMLStencilElement {
    }
    var HTMLEsNavNode0Element: {
        prototype: HTMLEsNavNode0Element;
        new (): HTMLEsNavNode0Element;
    };
    interface HTMLEsNavNode1Element extends Components.EsNavNode1, HTMLStencilElement {
    }
    var HTMLEsNavNode1Element: {
        prototype: HTMLEsNavNode1Element;
        new (): HTMLEsNavNode1Element;
    };
    interface HTMLEsNavNode2Element extends Components.EsNavNode2, HTMLStencilElement {
    }
    var HTMLEsNavNode2Element: {
        prototype: HTMLEsNavNode2Element;
        new (): HTMLEsNavNode2Element;
    };
    interface HTMLEsPageTitleElement extends Components.EsPageTitle, HTMLStencilElement {
    }
    var HTMLEsPageTitleElement: {
        prototype: HTMLEsPageTitleElement;
        new (): HTMLEsPageTitleElement;
    };
    interface HTMLEsPanelElement extends Components.EsPanel, HTMLStencilElement {
    }
    var HTMLEsPanelElement: {
        prototype: HTMLEsPanelElement;
        new (): HTMLEsPanelElement;
    };
    interface HTMLEsPanelHeaderElement extends Components.EsPanelHeader, HTMLStencilElement {
    }
    var HTMLEsPanelHeaderElement: {
        prototype: HTMLEsPanelHeaderElement;
        new (): HTMLEsPanelHeaderElement;
    };
    interface HTMLEsSidebarElement extends Components.EsSidebar, HTMLStencilElement {
    }
    var HTMLEsSidebarElement: {
        prototype: HTMLEsSidebarElement;
        new (): HTMLEsSidebarElement;
    };
    interface HTMLEsSidebarDropdownElement extends Components.EsSidebarDropdown, HTMLStencilElement {
    }
    var HTMLEsSidebarDropdownElement: {
        prototype: HTMLEsSidebarDropdownElement;
        new (): HTMLEsSidebarDropdownElement;
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
    interface HTMLEsToolbarElement extends Components.EsToolbar, HTMLStencilElement {
    }
    var HTMLEsToolbarElement: {
        prototype: HTMLEsToolbarElement;
        new (): HTMLEsToolbarElement;
    };
    interface HTMLElementTagNameMap {
        "dev-root": HTMLDevRootElement;
        "es-breadcrumb": HTMLEsBreadcrumbElement;
        "es-display-error": HTMLEsDisplayErrorElement;
        "es-header": HTMLEsHeaderElement;
        "es-header-dropdown": HTMLEsHeaderDropdownElement;
        "es-layout-button": HTMLEsLayoutButtonElement;
        "es-layout-link": HTMLEsLayoutLinkElement;
        "es-layout-section": HTMLEsLayoutSectionElement;
        "es-loading-bar": HTMLEsLoadingBarElement;
        "es-logo": HTMLEsLogoElement;
        "es-nav": HTMLEsNavElement;
        "es-nav-node-0": HTMLEsNavNode0Element;
        "es-nav-node-1": HTMLEsNavNode1Element;
        "es-nav-node-2": HTMLEsNavNode2Element;
        "es-page-title": HTMLEsPageTitleElement;
        "es-panel": HTMLEsPanelElement;
        "es-panel-header": HTMLEsPanelHeaderElement;
        "es-sidebar": HTMLEsSidebarElement;
        "es-sidebar-dropdown": HTMLEsSidebarDropdownElement;
        "es-theme-dropdown": HTMLEsThemeDropdownElement;
        "es-theme-picker": HTMLEsThemePickerElement;
        "es-toolbar": HTMLEsToolbarElement;
    }
}
declare namespace LocalJSX {
    interface DevRoot {
    }
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
    interface EsDisplayError {
        /**
          * The unrecoverable error. For a normal error, error.message will be displayed. For a `HTTPError` from `@eventstore-ui/utils` the details title and description will be shown.
         */
        "error"?: unknown;
        /**
          * Which styling variant to use.
         */
        "variant"?: DisplayErrorVariant;
    }
    interface EsHeader {
    }
    interface EsHeaderDropdown {
        /**
          * Display a dot on the icon, to attract attention to the button.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * text for use in the button.
         */
        "buttonText"?: string;
        /**
          * If a caret should be rendered.
         */
        "caret"?: boolean;
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the button should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Icon for use in the button.
         */
        "icon"?: IconDescription;
        /**
          * Apply an indent to the left of the button, for basic nesting.
         */
        "level"?: number;
        /**
          * Which styling variant to use.
         */
        "variant"?: HeaderDropdownButtonVariant;
    }
    interface EsLayoutButton {
        /**
          * If the button should display as active
         */
        "active"?: boolean;
        /**
          * Display a dot on the icon, to attract attention to the button.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the button should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Display an icon on the left.
         */
        "icon"?: IconDescription;
        /**
          * Apply an indent to the left of the button, for basic nesting.
         */
        "level"?: number;
    }
    interface EsLayoutLink {
        /**
          * Display a dot on the icon, to attract attention to the link.
         */
        "alertLevel"?: HTMLEsBadgeElement['color'];
        /**
          * Display a counter in place of the icon.
         */
        "count"?: number;
        /**
          * If the link should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Display an icon on the left.
         */
        "icon"?: IconDescription;
        /**
          * Apply an indent to the left of the link, for basic nesting.
         */
        "level"?: number;
        /**
          * Use exact url matching for active.
         */
        "matchExact"?: boolean;
        /**
          * Use strict url matching for active.
         */
        "matchStrict"?: boolean;
        /**
          * When to display as active. Uses the `url` by default.
         */
        "matchUrl"?: string;
        /**
          * Where to link to.
         */
        "url"?: string;
    }
    interface EsLayoutSection {
        /**
          * If the section is collapsable
         */
        "collapsable"?: boolean;
        /**
          * If the section should be collapsed by default
         */
        "defaultCollapsed"?: boolean;
        /**
          * Optionally renders a title
         */
        "sectionTitle"?: string;
    }
    interface EsLoadingBar {
        /**
          * The bar's name, for use in `setProgress`
         */
        "name": string;
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
    interface EsNav {
        /**
          * The `NavTree` data structure that the navigation menu will be built from..
         */
        "navTree": NavTree;
    }
    interface EsNavNode0 {
        "active": boolean;
        "node": NavNode;
        "toggleRequest": () => void;
    }
    interface EsNavNode1 {
        "active": boolean;
        "node": NavNode;
        "toggleRequest": () => void;
    }
    interface EsNavNode2 {
        "node": NavNode;
    }
    interface EsPageTitle {
    }
    interface EsPanel {
    }
    interface EsPanelHeader {
    }
    interface EsSidebar {
    }
    interface EsSidebarDropdown {
        /**
          * The icon to display if no nested es-layout-link or es-layout-button is active
         */
        "defaultIcon": IconDescription;
        /**
          * The title to display if no nested es-layout-link or es-layout-button is active
         */
        "defaultTitle": string;
    }
    interface EsThemeDropdown {
    }
    interface EsThemePicker {
    }
    interface EsToolbar {
    }
    interface IntrinsicElements {
        "dev-root": DevRoot;
        "es-breadcrumb": EsBreadcrumb;
        "es-display-error": EsDisplayError;
        "es-header": EsHeader;
        "es-header-dropdown": EsHeaderDropdown;
        "es-layout-button": EsLayoutButton;
        "es-layout-link": EsLayoutLink;
        "es-layout-section": EsLayoutSection;
        "es-loading-bar": EsLoadingBar;
        "es-logo": EsLogo;
        "es-nav": EsNav;
        "es-nav-node-0": EsNavNode0;
        "es-nav-node-1": EsNavNode1;
        "es-nav-node-2": EsNavNode2;
        "es-page-title": EsPageTitle;
        "es-panel": EsPanel;
        "es-panel-header": EsPanelHeader;
        "es-sidebar": EsSidebar;
        "es-sidebar-dropdown": EsSidebarDropdown;
        "es-theme-dropdown": EsThemeDropdown;
        "es-theme-picker": EsThemePicker;
        "es-toolbar": EsToolbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dev-root": LocalJSX.DevRoot & JSXBase.HTMLAttributes<HTMLDevRootElement>;
            "es-breadcrumb": LocalJSX.EsBreadcrumb & JSXBase.HTMLAttributes<HTMLEsBreadcrumbElement>;
            "es-display-error": LocalJSX.EsDisplayError & JSXBase.HTMLAttributes<HTMLEsDisplayErrorElement>;
            "es-header": LocalJSX.EsHeader & JSXBase.HTMLAttributes<HTMLEsHeaderElement>;
            "es-header-dropdown": LocalJSX.EsHeaderDropdown & JSXBase.HTMLAttributes<HTMLEsHeaderDropdownElement>;
            "es-layout-button": LocalJSX.EsLayoutButton & JSXBase.HTMLAttributes<HTMLEsLayoutButtonElement>;
            "es-layout-link": LocalJSX.EsLayoutLink & JSXBase.HTMLAttributes<HTMLEsLayoutLinkElement>;
            "es-layout-section": LocalJSX.EsLayoutSection & JSXBase.HTMLAttributes<HTMLEsLayoutSectionElement>;
            "es-loading-bar": LocalJSX.EsLoadingBar & JSXBase.HTMLAttributes<HTMLEsLoadingBarElement>;
            "es-logo": LocalJSX.EsLogo & JSXBase.HTMLAttributes<HTMLEsLogoElement>;
            "es-nav": LocalJSX.EsNav & JSXBase.HTMLAttributes<HTMLEsNavElement>;
            "es-nav-node-0": LocalJSX.EsNavNode0 & JSXBase.HTMLAttributes<HTMLEsNavNode0Element>;
            "es-nav-node-1": LocalJSX.EsNavNode1 & JSXBase.HTMLAttributes<HTMLEsNavNode1Element>;
            "es-nav-node-2": LocalJSX.EsNavNode2 & JSXBase.HTMLAttributes<HTMLEsNavNode2Element>;
            "es-page-title": LocalJSX.EsPageTitle & JSXBase.HTMLAttributes<HTMLEsPageTitleElement>;
            "es-panel": LocalJSX.EsPanel & JSXBase.HTMLAttributes<HTMLEsPanelElement>;
            "es-panel-header": LocalJSX.EsPanelHeader & JSXBase.HTMLAttributes<HTMLEsPanelHeaderElement>;
            "es-sidebar": LocalJSX.EsSidebar & JSXBase.HTMLAttributes<HTMLEsSidebarElement>;
            "es-sidebar-dropdown": LocalJSX.EsSidebarDropdown & JSXBase.HTMLAttributes<HTMLEsSidebarDropdownElement>;
            "es-theme-dropdown": LocalJSX.EsThemeDropdown & JSXBase.HTMLAttributes<HTMLEsThemeDropdownElement>;
            "es-theme-picker": LocalJSX.EsThemePicker & JSXBase.HTMLAttributes<HTMLEsThemePickerElement>;
            "es-toolbar": LocalJSX.EsToolbar & JSXBase.HTMLAttributes<HTMLEsToolbarElement>;
        }
    }
}
