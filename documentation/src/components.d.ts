/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { backgroundVariant } from "./components/layout/docs-background/docs-background";
import { Crumb } from "./components/layout/docs-breadcrumb/docs-breadcrumb";
import { JsonDocs, JsonDocsEvent, JsonDocsMethod, JsonDocsPart, JsonDocsProp, JsonDocsSlot, JsonDocsStyle } from "@stencil/core/internal";
import { Lib } from "sitemap";
import { JSONOutput } from "typedoc";
import { PageState } from "./components/layout/docs-page/docs-page";
import { VNode } from "@stencil/core";
import { SidebarLinkVariant } from "./components/layout/docs-sidebar/components/docs-sidebar-link/docs-sidebar-link";
import { Router } from "./components/docs-usage/components/docs-usage-location/docs-usage-location";
import { LocationSegments } from "@eventstore/router";
export namespace Components {
    interface DocsBackground {
        /**
          * Sets the background variant.
         */
        "variant": backgroundVariant;
    }
    interface DocsBreadcrumb {
        "crumbs": Crumb[];
        "noValidate": boolean;
    }
    interface DocsCode {
        "code": string;
        "language": string;
    }
    interface DocsComponentDocs {
        "comp": JsonDocs['components'][0];
        "lib": Lib;
    }
    interface DocsEventsTable {
        "events": JsonDocsEvent[];
    }
    interface DocsFunctionalComponentDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface DocsHeader {
        "background": HTMLDocsBackgroundElement['variant'] | 'none';
    }
    interface DocsHome {
    }
    interface DocsLogo {
        "height": number;
        "width": number;
    }
    interface DocsMarkdown {
        "md": string;
    }
    interface DocsMethodsTable {
        "methods": JsonDocsMethod[];
    }
    interface DocsPackage {
        "lib": Lib;
    }
    interface DocsPage {
        "crumbs"?: HTMLDocsBreadcrumbElement['crumbs'];
        "empty": boolean;
        "headerRight"?: () => VNode | VNode[];
        "headerTitle"?: string | false;
        "noSidebar"?: boolean;
        "pageTitle": string;
        "renderEmptyState"?: () => VNode | VNode[];
        "state": PageState;
    }
    interface DocsPageTitle {
    }
    interface DocsPartsTable {
        "parts": JsonDocsPart[];
    }
    interface DocsPropsTable {
        "props": JsonDocsProp[];
    }
    interface DocsRoot {
    }
    interface DocsSidebar {
    }
    interface DocsSidebarDropdown {
        "active": Lib;
    }
    interface DocsSidebarLink {
        "disabled": boolean;
        "icon"?: string;
        "level"?: number;
        "url"?: string;
        "urlMatch"?: string;
        "variant": SidebarLinkVariant;
    }
    interface DocsSidebarSection {
        "sectionTitle": string;
    }
    interface DocsSidebarTree {
        "icon"?: string;
        "name": string;
        "root": boolean;
        "url"?: string;
        "urlMatch"?: string;
    }
    interface DocsSlotsTable {
        "slots": JsonDocsSlot[];
    }
    interface DocsStylesTable {
        "styles": JsonDocsStyle[];
    }
    interface DocsType {
        "declaration"?: JSONOutput.DeclarationReflection;
        "depreciated": boolean;
        "someType"?: JSONOutput.SomeType;
        "string"?: string;
    }
    interface DocsTypeDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface DocsTypeDocumentation {
        "declaration": JSONOutput.DeclarationReflection;
    }
    interface DocsUsage {
        "identifier": string;
        "usage": string;
    }
    interface DocsUsageLocation {
        "location"?: LocationSegments;
        "router": Router;
    }
    interface DocsUtilDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface EsFooter {
        "noSidebar"?: boolean;
    }
}
declare global {
    interface HTMLDocsBackgroundElement extends Components.DocsBackground, HTMLStencilElement {
    }
    var HTMLDocsBackgroundElement: {
        prototype: HTMLDocsBackgroundElement;
        new (): HTMLDocsBackgroundElement;
    };
    interface HTMLDocsBreadcrumbElement extends Components.DocsBreadcrumb, HTMLStencilElement {
    }
    var HTMLDocsBreadcrumbElement: {
        prototype: HTMLDocsBreadcrumbElement;
        new (): HTMLDocsBreadcrumbElement;
    };
    interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {
    }
    var HTMLDocsCodeElement: {
        prototype: HTMLDocsCodeElement;
        new (): HTMLDocsCodeElement;
    };
    interface HTMLDocsComponentDocsElement extends Components.DocsComponentDocs, HTMLStencilElement {
    }
    var HTMLDocsComponentDocsElement: {
        prototype: HTMLDocsComponentDocsElement;
        new (): HTMLDocsComponentDocsElement;
    };
    interface HTMLDocsEventsTableElement extends Components.DocsEventsTable, HTMLStencilElement {
    }
    var HTMLDocsEventsTableElement: {
        prototype: HTMLDocsEventsTableElement;
        new (): HTMLDocsEventsTableElement;
    };
    interface HTMLDocsFunctionalComponentDocsElement extends Components.DocsFunctionalComponentDocs, HTMLStencilElement {
    }
    var HTMLDocsFunctionalComponentDocsElement: {
        prototype: HTMLDocsFunctionalComponentDocsElement;
        new (): HTMLDocsFunctionalComponentDocsElement;
    };
    interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {
    }
    var HTMLDocsHeaderElement: {
        prototype: HTMLDocsHeaderElement;
        new (): HTMLDocsHeaderElement;
    };
    interface HTMLDocsHomeElement extends Components.DocsHome, HTMLStencilElement {
    }
    var HTMLDocsHomeElement: {
        prototype: HTMLDocsHomeElement;
        new (): HTMLDocsHomeElement;
    };
    interface HTMLDocsLogoElement extends Components.DocsLogo, HTMLStencilElement {
    }
    var HTMLDocsLogoElement: {
        prototype: HTMLDocsLogoElement;
        new (): HTMLDocsLogoElement;
    };
    interface HTMLDocsMarkdownElement extends Components.DocsMarkdown, HTMLStencilElement {
    }
    var HTMLDocsMarkdownElement: {
        prototype: HTMLDocsMarkdownElement;
        new (): HTMLDocsMarkdownElement;
    };
    interface HTMLDocsMethodsTableElement extends Components.DocsMethodsTable, HTMLStencilElement {
    }
    var HTMLDocsMethodsTableElement: {
        prototype: HTMLDocsMethodsTableElement;
        new (): HTMLDocsMethodsTableElement;
    };
    interface HTMLDocsPackageElement extends Components.DocsPackage, HTMLStencilElement {
    }
    var HTMLDocsPackageElement: {
        prototype: HTMLDocsPackageElement;
        new (): HTMLDocsPackageElement;
    };
    interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {
    }
    var HTMLDocsPageElement: {
        prototype: HTMLDocsPageElement;
        new (): HTMLDocsPageElement;
    };
    interface HTMLDocsPageTitleElement extends Components.DocsPageTitle, HTMLStencilElement {
    }
    var HTMLDocsPageTitleElement: {
        prototype: HTMLDocsPageTitleElement;
        new (): HTMLDocsPageTitleElement;
    };
    interface HTMLDocsPartsTableElement extends Components.DocsPartsTable, HTMLStencilElement {
    }
    var HTMLDocsPartsTableElement: {
        prototype: HTMLDocsPartsTableElement;
        new (): HTMLDocsPartsTableElement;
    };
    interface HTMLDocsPropsTableElement extends Components.DocsPropsTable, HTMLStencilElement {
    }
    var HTMLDocsPropsTableElement: {
        prototype: HTMLDocsPropsTableElement;
        new (): HTMLDocsPropsTableElement;
    };
    interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {
    }
    var HTMLDocsRootElement: {
        prototype: HTMLDocsRootElement;
        new (): HTMLDocsRootElement;
    };
    interface HTMLDocsSidebarElement extends Components.DocsSidebar, HTMLStencilElement {
    }
    var HTMLDocsSidebarElement: {
        prototype: HTMLDocsSidebarElement;
        new (): HTMLDocsSidebarElement;
    };
    interface HTMLDocsSidebarDropdownElement extends Components.DocsSidebarDropdown, HTMLStencilElement {
    }
    var HTMLDocsSidebarDropdownElement: {
        prototype: HTMLDocsSidebarDropdownElement;
        new (): HTMLDocsSidebarDropdownElement;
    };
    interface HTMLDocsSidebarLinkElement extends Components.DocsSidebarLink, HTMLStencilElement {
    }
    var HTMLDocsSidebarLinkElement: {
        prototype: HTMLDocsSidebarLinkElement;
        new (): HTMLDocsSidebarLinkElement;
    };
    interface HTMLDocsSidebarSectionElement extends Components.DocsSidebarSection, HTMLStencilElement {
    }
    var HTMLDocsSidebarSectionElement: {
        prototype: HTMLDocsSidebarSectionElement;
        new (): HTMLDocsSidebarSectionElement;
    };
    interface HTMLDocsSidebarTreeElement extends Components.DocsSidebarTree, HTMLStencilElement {
    }
    var HTMLDocsSidebarTreeElement: {
        prototype: HTMLDocsSidebarTreeElement;
        new (): HTMLDocsSidebarTreeElement;
    };
    interface HTMLDocsSlotsTableElement extends Components.DocsSlotsTable, HTMLStencilElement {
    }
    var HTMLDocsSlotsTableElement: {
        prototype: HTMLDocsSlotsTableElement;
        new (): HTMLDocsSlotsTableElement;
    };
    interface HTMLDocsStylesTableElement extends Components.DocsStylesTable, HTMLStencilElement {
    }
    var HTMLDocsStylesTableElement: {
        prototype: HTMLDocsStylesTableElement;
        new (): HTMLDocsStylesTableElement;
    };
    interface HTMLDocsTypeElement extends Components.DocsType, HTMLStencilElement {
    }
    var HTMLDocsTypeElement: {
        prototype: HTMLDocsTypeElement;
        new (): HTMLDocsTypeElement;
    };
    interface HTMLDocsTypeDocsElement extends Components.DocsTypeDocs, HTMLStencilElement {
    }
    var HTMLDocsTypeDocsElement: {
        prototype: HTMLDocsTypeDocsElement;
        new (): HTMLDocsTypeDocsElement;
    };
    interface HTMLDocsTypeDocumentationElement extends Components.DocsTypeDocumentation, HTMLStencilElement {
    }
    var HTMLDocsTypeDocumentationElement: {
        prototype: HTMLDocsTypeDocumentationElement;
        new (): HTMLDocsTypeDocumentationElement;
    };
    interface HTMLDocsUsageElement extends Components.DocsUsage, HTMLStencilElement {
    }
    var HTMLDocsUsageElement: {
        prototype: HTMLDocsUsageElement;
        new (): HTMLDocsUsageElement;
    };
    interface HTMLDocsUsageLocationElement extends Components.DocsUsageLocation, HTMLStencilElement {
    }
    var HTMLDocsUsageLocationElement: {
        prototype: HTMLDocsUsageLocationElement;
        new (): HTMLDocsUsageLocationElement;
    };
    interface HTMLDocsUtilDocsElement extends Components.DocsUtilDocs, HTMLStencilElement {
    }
    var HTMLDocsUtilDocsElement: {
        prototype: HTMLDocsUtilDocsElement;
        new (): HTMLDocsUtilDocsElement;
    };
    interface HTMLEsFooterElement extends Components.EsFooter, HTMLStencilElement {
    }
    var HTMLEsFooterElement: {
        prototype: HTMLEsFooterElement;
        new (): HTMLEsFooterElement;
    };
    interface HTMLElementTagNameMap {
        "docs-background": HTMLDocsBackgroundElement;
        "docs-breadcrumb": HTMLDocsBreadcrumbElement;
        "docs-code": HTMLDocsCodeElement;
        "docs-component-docs": HTMLDocsComponentDocsElement;
        "docs-events-table": HTMLDocsEventsTableElement;
        "docs-functional-component-docs": HTMLDocsFunctionalComponentDocsElement;
        "docs-header": HTMLDocsHeaderElement;
        "docs-home": HTMLDocsHomeElement;
        "docs-logo": HTMLDocsLogoElement;
        "docs-markdown": HTMLDocsMarkdownElement;
        "docs-methods-table": HTMLDocsMethodsTableElement;
        "docs-package": HTMLDocsPackageElement;
        "docs-page": HTMLDocsPageElement;
        "docs-page-title": HTMLDocsPageTitleElement;
        "docs-parts-table": HTMLDocsPartsTableElement;
        "docs-props-table": HTMLDocsPropsTableElement;
        "docs-root": HTMLDocsRootElement;
        "docs-sidebar": HTMLDocsSidebarElement;
        "docs-sidebar-dropdown": HTMLDocsSidebarDropdownElement;
        "docs-sidebar-link": HTMLDocsSidebarLinkElement;
        "docs-sidebar-section": HTMLDocsSidebarSectionElement;
        "docs-sidebar-tree": HTMLDocsSidebarTreeElement;
        "docs-slots-table": HTMLDocsSlotsTableElement;
        "docs-styles-table": HTMLDocsStylesTableElement;
        "docs-type": HTMLDocsTypeElement;
        "docs-type-docs": HTMLDocsTypeDocsElement;
        "docs-type-documentation": HTMLDocsTypeDocumentationElement;
        "docs-usage": HTMLDocsUsageElement;
        "docs-usage-location": HTMLDocsUsageLocationElement;
        "docs-util-docs": HTMLDocsUtilDocsElement;
        "es-footer": HTMLEsFooterElement;
    }
}
declare namespace LocalJSX {
    interface DocsBackground {
        /**
          * Sets the background variant.
         */
        "variant"?: backgroundVariant;
    }
    interface DocsBreadcrumb {
        "crumbs"?: Crumb[];
        "noValidate"?: boolean;
    }
    interface DocsCode {
        "code": string;
        "language": string;
    }
    interface DocsComponentDocs {
        "comp": JsonDocs['components'][0];
        "lib": Lib;
    }
    interface DocsEventsTable {
        "events": JsonDocsEvent[];
    }
    interface DocsFunctionalComponentDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface DocsHeader {
        "background"?: HTMLDocsBackgroundElement['variant'] | 'none';
    }
    interface DocsHome {
    }
    interface DocsLogo {
        "height"?: number;
        "width"?: number;
    }
    interface DocsMarkdown {
        "md": string;
    }
    interface DocsMethodsTable {
        "methods": JsonDocsMethod[];
    }
    interface DocsPackage {
        "lib": Lib;
    }
    interface DocsPage {
        "crumbs"?: HTMLDocsBreadcrumbElement['crumbs'];
        "empty"?: boolean;
        "headerRight"?: () => VNode | VNode[];
        "headerTitle"?: string | false;
        "noSidebar"?: boolean;
        "pageTitle": string;
        "renderEmptyState"?: () => VNode | VNode[];
        "state"?: PageState;
    }
    interface DocsPageTitle {
    }
    interface DocsPartsTable {
        "parts": JsonDocsPart[];
    }
    interface DocsPropsTable {
        "props": JsonDocsProp[];
    }
    interface DocsRoot {
    }
    interface DocsSidebar {
    }
    interface DocsSidebarDropdown {
        "active": Lib;
    }
    interface DocsSidebarLink {
        "disabled"?: boolean;
        "icon"?: string;
        "level"?: number;
        "url"?: string;
        "urlMatch"?: string;
        "variant"?: SidebarLinkVariant;
    }
    interface DocsSidebarSection {
        "sectionTitle": string;
    }
    interface DocsSidebarTree {
        "icon"?: string;
        "name": string;
        "root"?: boolean;
        "url"?: string;
        "urlMatch"?: string;
    }
    interface DocsSlotsTable {
        "slots": JsonDocsSlot[];
    }
    interface DocsStylesTable {
        "styles": JsonDocsStyle[];
    }
    interface DocsType {
        "declaration"?: JSONOutput.DeclarationReflection;
        "depreciated"?: boolean;
        "someType"?: JSONOutput.SomeType;
        "string"?: string;
    }
    interface DocsTypeDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface DocsTypeDocumentation {
        "declaration": JSONOutput.DeclarationReflection;
    }
    interface DocsUsage {
        "identifier": string;
        "usage": string;
    }
    interface DocsUsageLocation {
        "location"?: LocationSegments;
        "router": Router;
    }
    interface DocsUtilDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface EsFooter {
        "noSidebar"?: boolean;
    }
    interface IntrinsicElements {
        "docs-background": DocsBackground;
        "docs-breadcrumb": DocsBreadcrumb;
        "docs-code": DocsCode;
        "docs-component-docs": DocsComponentDocs;
        "docs-events-table": DocsEventsTable;
        "docs-functional-component-docs": DocsFunctionalComponentDocs;
        "docs-header": DocsHeader;
        "docs-home": DocsHome;
        "docs-logo": DocsLogo;
        "docs-markdown": DocsMarkdown;
        "docs-methods-table": DocsMethodsTable;
        "docs-package": DocsPackage;
        "docs-page": DocsPage;
        "docs-page-title": DocsPageTitle;
        "docs-parts-table": DocsPartsTable;
        "docs-props-table": DocsPropsTable;
        "docs-root": DocsRoot;
        "docs-sidebar": DocsSidebar;
        "docs-sidebar-dropdown": DocsSidebarDropdown;
        "docs-sidebar-link": DocsSidebarLink;
        "docs-sidebar-section": DocsSidebarSection;
        "docs-sidebar-tree": DocsSidebarTree;
        "docs-slots-table": DocsSlotsTable;
        "docs-styles-table": DocsStylesTable;
        "docs-type": DocsType;
        "docs-type-docs": DocsTypeDocs;
        "docs-type-documentation": DocsTypeDocumentation;
        "docs-usage": DocsUsage;
        "docs-usage-location": DocsUsageLocation;
        "docs-util-docs": DocsUtilDocs;
        "es-footer": EsFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "docs-background": LocalJSX.DocsBackground & JSXBase.HTMLAttributes<HTMLDocsBackgroundElement>;
            "docs-breadcrumb": LocalJSX.DocsBreadcrumb & JSXBase.HTMLAttributes<HTMLDocsBreadcrumbElement>;
            "docs-code": LocalJSX.DocsCode & JSXBase.HTMLAttributes<HTMLDocsCodeElement>;
            "docs-component-docs": LocalJSX.DocsComponentDocs & JSXBase.HTMLAttributes<HTMLDocsComponentDocsElement>;
            "docs-events-table": LocalJSX.DocsEventsTable & JSXBase.HTMLAttributes<HTMLDocsEventsTableElement>;
            "docs-functional-component-docs": LocalJSX.DocsFunctionalComponentDocs & JSXBase.HTMLAttributes<HTMLDocsFunctionalComponentDocsElement>;
            "docs-header": LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
            "docs-home": LocalJSX.DocsHome & JSXBase.HTMLAttributes<HTMLDocsHomeElement>;
            "docs-logo": LocalJSX.DocsLogo & JSXBase.HTMLAttributes<HTMLDocsLogoElement>;
            "docs-markdown": LocalJSX.DocsMarkdown & JSXBase.HTMLAttributes<HTMLDocsMarkdownElement>;
            "docs-methods-table": LocalJSX.DocsMethodsTable & JSXBase.HTMLAttributes<HTMLDocsMethodsTableElement>;
            "docs-package": LocalJSX.DocsPackage & JSXBase.HTMLAttributes<HTMLDocsPackageElement>;
            "docs-page": LocalJSX.DocsPage & JSXBase.HTMLAttributes<HTMLDocsPageElement>;
            "docs-page-title": LocalJSX.DocsPageTitle & JSXBase.HTMLAttributes<HTMLDocsPageTitleElement>;
            "docs-parts-table": LocalJSX.DocsPartsTable & JSXBase.HTMLAttributes<HTMLDocsPartsTableElement>;
            "docs-props-table": LocalJSX.DocsPropsTable & JSXBase.HTMLAttributes<HTMLDocsPropsTableElement>;
            "docs-root": LocalJSX.DocsRoot & JSXBase.HTMLAttributes<HTMLDocsRootElement>;
            "docs-sidebar": LocalJSX.DocsSidebar & JSXBase.HTMLAttributes<HTMLDocsSidebarElement>;
            "docs-sidebar-dropdown": LocalJSX.DocsSidebarDropdown & JSXBase.HTMLAttributes<HTMLDocsSidebarDropdownElement>;
            "docs-sidebar-link": LocalJSX.DocsSidebarLink & JSXBase.HTMLAttributes<HTMLDocsSidebarLinkElement>;
            "docs-sidebar-section": LocalJSX.DocsSidebarSection & JSXBase.HTMLAttributes<HTMLDocsSidebarSectionElement>;
            "docs-sidebar-tree": LocalJSX.DocsSidebarTree & JSXBase.HTMLAttributes<HTMLDocsSidebarTreeElement>;
            "docs-slots-table": LocalJSX.DocsSlotsTable & JSXBase.HTMLAttributes<HTMLDocsSlotsTableElement>;
            "docs-styles-table": LocalJSX.DocsStylesTable & JSXBase.HTMLAttributes<HTMLDocsStylesTableElement>;
            "docs-type": LocalJSX.DocsType & JSXBase.HTMLAttributes<HTMLDocsTypeElement>;
            "docs-type-docs": LocalJSX.DocsTypeDocs & JSXBase.HTMLAttributes<HTMLDocsTypeDocsElement>;
            "docs-type-documentation": LocalJSX.DocsTypeDocumentation & JSXBase.HTMLAttributes<HTMLDocsTypeDocumentationElement>;
            "docs-usage": LocalJSX.DocsUsage & JSXBase.HTMLAttributes<HTMLDocsUsageElement>;
            "docs-usage-location": LocalJSX.DocsUsageLocation & JSXBase.HTMLAttributes<HTMLDocsUsageLocationElement>;
            "docs-util-docs": LocalJSX.DocsUtilDocs & JSXBase.HTMLAttributes<HTMLDocsUtilDocsElement>;
            "es-footer": LocalJSX.EsFooter & JSXBase.HTMLAttributes<HTMLEsFooterElement>;
        }
    }
}
