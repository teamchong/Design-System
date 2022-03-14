/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { JsonDocs, JsonDocsEvent, JsonDocsMethod, JsonDocsPart, JsonDocsProp, JsonDocsSlot, JsonDocsStyle } from "@stencil/core/internal";
import { Lib } from "sitemap";
import { JSONOutput } from "typedoc";
import { SidebarLinkVariant } from "./components/layout/docs-sidebar/components/docs-sidebar-link/docs-sidebar-link";
export namespace Components {
    interface DocsBackground {
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
    }
    interface DocsHome {
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
    interface DocsUtilDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
}
declare global {
    interface HTMLDocsBackgroundElement extends Components.DocsBackground, HTMLStencilElement {
    }
    var HTMLDocsBackgroundElement: {
        prototype: HTMLDocsBackgroundElement;
        new (): HTMLDocsBackgroundElement;
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
    interface HTMLDocsUtilDocsElement extends Components.DocsUtilDocs, HTMLStencilElement {
    }
    var HTMLDocsUtilDocsElement: {
        prototype: HTMLDocsUtilDocsElement;
        new (): HTMLDocsUtilDocsElement;
    };
    interface HTMLElementTagNameMap {
        "docs-background": HTMLDocsBackgroundElement;
        "docs-component-docs": HTMLDocsComponentDocsElement;
        "docs-events-table": HTMLDocsEventsTableElement;
        "docs-functional-component-docs": HTMLDocsFunctionalComponentDocsElement;
        "docs-header": HTMLDocsHeaderElement;
        "docs-home": HTMLDocsHomeElement;
        "docs-markdown": HTMLDocsMarkdownElement;
        "docs-methods-table": HTMLDocsMethodsTableElement;
        "docs-package": HTMLDocsPackageElement;
        "docs-parts-table": HTMLDocsPartsTableElement;
        "docs-props-table": HTMLDocsPropsTableElement;
        "docs-root": HTMLDocsRootElement;
        "docs-sidebar": HTMLDocsSidebarElement;
        "docs-sidebar-dropdown": HTMLDocsSidebarDropdownElement;
        "docs-sidebar-link": HTMLDocsSidebarLinkElement;
        "docs-sidebar-section": HTMLDocsSidebarSectionElement;
        "docs-slots-table": HTMLDocsSlotsTableElement;
        "docs-styles-table": HTMLDocsStylesTableElement;
        "docs-type": HTMLDocsTypeElement;
        "docs-type-docs": HTMLDocsTypeDocsElement;
        "docs-type-documentation": HTMLDocsTypeDocumentationElement;
        "docs-usage": HTMLDocsUsageElement;
        "docs-util-docs": HTMLDocsUtilDocsElement;
    }
}
declare namespace LocalJSX {
    interface DocsBackground {
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
    }
    interface DocsHome {
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
    interface DocsUtilDocs {
        "doc": JSONOutput.DeclarationReflection;
        "lib": Lib;
    }
    interface IntrinsicElements {
        "docs-background": DocsBackground;
        "docs-component-docs": DocsComponentDocs;
        "docs-events-table": DocsEventsTable;
        "docs-functional-component-docs": DocsFunctionalComponentDocs;
        "docs-header": DocsHeader;
        "docs-home": DocsHome;
        "docs-markdown": DocsMarkdown;
        "docs-methods-table": DocsMethodsTable;
        "docs-package": DocsPackage;
        "docs-parts-table": DocsPartsTable;
        "docs-props-table": DocsPropsTable;
        "docs-root": DocsRoot;
        "docs-sidebar": DocsSidebar;
        "docs-sidebar-dropdown": DocsSidebarDropdown;
        "docs-sidebar-link": DocsSidebarLink;
        "docs-sidebar-section": DocsSidebarSection;
        "docs-slots-table": DocsSlotsTable;
        "docs-styles-table": DocsStylesTable;
        "docs-type": DocsType;
        "docs-type-docs": DocsTypeDocs;
        "docs-type-documentation": DocsTypeDocumentation;
        "docs-usage": DocsUsage;
        "docs-util-docs": DocsUtilDocs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "docs-background": LocalJSX.DocsBackground & JSXBase.HTMLAttributes<HTMLDocsBackgroundElement>;
            "docs-component-docs": LocalJSX.DocsComponentDocs & JSXBase.HTMLAttributes<HTMLDocsComponentDocsElement>;
            "docs-events-table": LocalJSX.DocsEventsTable & JSXBase.HTMLAttributes<HTMLDocsEventsTableElement>;
            "docs-functional-component-docs": LocalJSX.DocsFunctionalComponentDocs & JSXBase.HTMLAttributes<HTMLDocsFunctionalComponentDocsElement>;
            "docs-header": LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
            "docs-home": LocalJSX.DocsHome & JSXBase.HTMLAttributes<HTMLDocsHomeElement>;
            "docs-markdown": LocalJSX.DocsMarkdown & JSXBase.HTMLAttributes<HTMLDocsMarkdownElement>;
            "docs-methods-table": LocalJSX.DocsMethodsTable & JSXBase.HTMLAttributes<HTMLDocsMethodsTableElement>;
            "docs-package": LocalJSX.DocsPackage & JSXBase.HTMLAttributes<HTMLDocsPackageElement>;
            "docs-parts-table": LocalJSX.DocsPartsTable & JSXBase.HTMLAttributes<HTMLDocsPartsTableElement>;
            "docs-props-table": LocalJSX.DocsPropsTable & JSXBase.HTMLAttributes<HTMLDocsPropsTableElement>;
            "docs-root": LocalJSX.DocsRoot & JSXBase.HTMLAttributes<HTMLDocsRootElement>;
            "docs-sidebar": LocalJSX.DocsSidebar & JSXBase.HTMLAttributes<HTMLDocsSidebarElement>;
            "docs-sidebar-dropdown": LocalJSX.DocsSidebarDropdown & JSXBase.HTMLAttributes<HTMLDocsSidebarDropdownElement>;
            "docs-sidebar-link": LocalJSX.DocsSidebarLink & JSXBase.HTMLAttributes<HTMLDocsSidebarLinkElement>;
            "docs-sidebar-section": LocalJSX.DocsSidebarSection & JSXBase.HTMLAttributes<HTMLDocsSidebarSectionElement>;
            "docs-slots-table": LocalJSX.DocsSlotsTable & JSXBase.HTMLAttributes<HTMLDocsSlotsTableElement>;
            "docs-styles-table": LocalJSX.DocsStylesTable & JSXBase.HTMLAttributes<HTMLDocsStylesTableElement>;
            "docs-type": LocalJSX.DocsType & JSXBase.HTMLAttributes<HTMLDocsTypeElement>;
            "docs-type-docs": LocalJSX.DocsTypeDocs & JSXBase.HTMLAttributes<HTMLDocsTypeDocsElement>;
            "docs-type-documentation": LocalJSX.DocsTypeDocumentation & JSXBase.HTMLAttributes<HTMLDocsTypeDocumentationElement>;
            "docs-usage": LocalJSX.DocsUsage & JSXBase.HTMLAttributes<HTMLDocsUsageElement>;
            "docs-util-docs": LocalJSX.DocsUtilDocs & JSXBase.HTMLAttributes<HTMLDocsUtilDocsElement>;
        }
    }
}