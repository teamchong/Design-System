/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AccordianSection } from "./components/es-accordian/types";
import { VNode } from "@stencil/core";
import { Crumb } from "./components/es-breadcrumb/es-breadcrumb";
import { ButtonColor, ButtonVariant } from "./components/es-button/types";
import { CounterVariant } from "./components/es-counter/es-counter";
import { Position } from "./components/es-popover/es-popper-inner";
import { Checkpoint } from "./components/es-progression/es-progression";
import { Status } from "./components/es-status/es-status";
import { TableColumn } from "./components/es-table/types";
import { Bread, Toast } from "./components/es-toaster/types";
import { WizardPage } from "./components/es-wizard/es-wizard";
export namespace Components {
    interface EsAccordian {
        "sections": AccordianSection[];
    }
    interface EsBackdrop {
        "close": () => Promise<unknown>;
        "renderNode": (node: VNode | null) => Promise<void>;
        "showBackdrop": boolean;
    }
    interface EsBreadcrumb {
        "crumbs": Crumb[];
    }
    interface EsButton {
        "color": ButtonColor;
        "disabled"?: boolean;
        "form"?: string;
        "type": string;
        "variant": ButtonVariant;
    }
    interface EsButtonLink {
        "anchorClass": string;
        "anchorId"?: string;
        "anchorRole"?: string;
        "anchorTabIndex"?: string;
        "anchorTitle"?: string;
        "ariaHaspopup"?: string;
        "ariaLabel"?: string;
        "ariaPosinset"?: string;
        "ariaSetsize"?: number;
        "color": ButtonColor;
        "disabled"?: boolean;
        "forceRefresh"?: boolean;
        "target"?: string;
        "url"?: string;
        "variant": ButtonVariant;
    }
    interface EsCounter {
        "count": number;
        "size": number;
        "variant": CounterVariant;
    }
    interface EsIcon {
        "angle": number;
        "icon": string;
        "size": number;
        "spin"?: boolean;
        "spinDirection": 'clockwise' | 'antiClockwise';
        "spinEnd": () => Promise<unknown>;
    }
    interface EsLogo {
        "height": number;
        "width": number;
    }
    interface EsModal {
    }
    interface EsPageTitle {
    }
    interface EsPopover {
        "attachmentX": string;
        "attachmentY": string;
        "backdrop": boolean;
        "offsetX": number;
        "offsetY": number;
        "open": boolean;
        "popperClass"?: string;
        "positionX": string;
        "positionY": string;
        "target": string;
    }
    interface EsPopper {
        "backdrop": boolean;
    }
    interface EsPopperInner {
        "setPosition": (position: Position) => Promise<void>;
    }
    interface EsPortal {
        "attachElement": () => Promise<void>;
        "backdrop": boolean;
        "detatchElement": () => Promise<void>;
        "element": VNode;
        "open": boolean;
        "target": string;
    }
    interface EsProgression {
        "checkpoints": Checkpoint[];
        "location": string;
    }
    interface EsStatus {
        "status": Status;
    }
    interface EsTable {
        "columns": TableColumn<any>[];
        "data": Record<string, any>;
        "linkRowTo"?: (row: any) => string;
        "rowClass": (
        row: any,
    ) => Record<string, boolean> | string | undefined;
        "rows": string[];
    }
    interface EsToast {
        "close": () => Promise<unknown>;
        "count": Toast['count'];
        "icon": Toast['icon'];
        "level": Toast['level'];
    }
    interface EsToaster {
        "popToast": ({ message, title, level, duration, icon, }: Bread) => Promise<void>;
    }
    interface EsWizard {
        "location": string;
        "pages": WizardPage[];
    }
}
declare global {
    interface HTMLEsAccordianElement extends Components.EsAccordian, HTMLStencilElement {
    }
    var HTMLEsAccordianElement: {
        prototype: HTMLEsAccordianElement;
        new (): HTMLEsAccordianElement;
    };
    interface HTMLEsBackdropElement extends Components.EsBackdrop, HTMLStencilElement {
    }
    var HTMLEsBackdropElement: {
        prototype: HTMLEsBackdropElement;
        new (): HTMLEsBackdropElement;
    };
    interface HTMLEsBreadcrumbElement extends Components.EsBreadcrumb, HTMLStencilElement {
    }
    var HTMLEsBreadcrumbElement: {
        prototype: HTMLEsBreadcrumbElement;
        new (): HTMLEsBreadcrumbElement;
    };
    interface HTMLEsButtonElement extends Components.EsButton, HTMLStencilElement {
    }
    var HTMLEsButtonElement: {
        prototype: HTMLEsButtonElement;
        new (): HTMLEsButtonElement;
    };
    interface HTMLEsButtonLinkElement extends Components.EsButtonLink, HTMLStencilElement {
    }
    var HTMLEsButtonLinkElement: {
        prototype: HTMLEsButtonLinkElement;
        new (): HTMLEsButtonLinkElement;
    };
    interface HTMLEsCounterElement extends Components.EsCounter, HTMLStencilElement {
    }
    var HTMLEsCounterElement: {
        prototype: HTMLEsCounterElement;
        new (): HTMLEsCounterElement;
    };
    interface HTMLEsIconElement extends Components.EsIcon, HTMLStencilElement {
    }
    var HTMLEsIconElement: {
        prototype: HTMLEsIconElement;
        new (): HTMLEsIconElement;
    };
    interface HTMLEsLogoElement extends Components.EsLogo, HTMLStencilElement {
    }
    var HTMLEsLogoElement: {
        prototype: HTMLEsLogoElement;
        new (): HTMLEsLogoElement;
    };
    interface HTMLEsModalElement extends Components.EsModal, HTMLStencilElement {
    }
    var HTMLEsModalElement: {
        prototype: HTMLEsModalElement;
        new (): HTMLEsModalElement;
    };
    interface HTMLEsPageTitleElement extends Components.EsPageTitle, HTMLStencilElement {
    }
    var HTMLEsPageTitleElement: {
        prototype: HTMLEsPageTitleElement;
        new (): HTMLEsPageTitleElement;
    };
    interface HTMLEsPopoverElement extends Components.EsPopover, HTMLStencilElement {
    }
    var HTMLEsPopoverElement: {
        prototype: HTMLEsPopoverElement;
        new (): HTMLEsPopoverElement;
    };
    interface HTMLEsPopperElement extends Components.EsPopper, HTMLStencilElement {
    }
    var HTMLEsPopperElement: {
        prototype: HTMLEsPopperElement;
        new (): HTMLEsPopperElement;
    };
    interface HTMLEsPopperInnerElement extends Components.EsPopperInner, HTMLStencilElement {
    }
    var HTMLEsPopperInnerElement: {
        prototype: HTMLEsPopperInnerElement;
        new (): HTMLEsPopperInnerElement;
    };
    interface HTMLEsPortalElement extends Components.EsPortal, HTMLStencilElement {
    }
    var HTMLEsPortalElement: {
        prototype: HTMLEsPortalElement;
        new (): HTMLEsPortalElement;
    };
    interface HTMLEsProgressionElement extends Components.EsProgression, HTMLStencilElement {
    }
    var HTMLEsProgressionElement: {
        prototype: HTMLEsProgressionElement;
        new (): HTMLEsProgressionElement;
    };
    interface HTMLEsStatusElement extends Components.EsStatus, HTMLStencilElement {
    }
    var HTMLEsStatusElement: {
        prototype: HTMLEsStatusElement;
        new (): HTMLEsStatusElement;
    };
    interface HTMLEsTableElement extends Components.EsTable, HTMLStencilElement {
    }
    var HTMLEsTableElement: {
        prototype: HTMLEsTableElement;
        new (): HTMLEsTableElement;
    };
    interface HTMLEsToastElement extends Components.EsToast, HTMLStencilElement {
    }
    var HTMLEsToastElement: {
        prototype: HTMLEsToastElement;
        new (): HTMLEsToastElement;
    };
    interface HTMLEsToasterElement extends Components.EsToaster, HTMLStencilElement {
    }
    var HTMLEsToasterElement: {
        prototype: HTMLEsToasterElement;
        new (): HTMLEsToasterElement;
    };
    interface HTMLEsWizardElement extends Components.EsWizard, HTMLStencilElement {
    }
    var HTMLEsWizardElement: {
        prototype: HTMLEsWizardElement;
        new (): HTMLEsWizardElement;
    };
    interface HTMLElementTagNameMap {
        "es-accordian": HTMLEsAccordianElement;
        "es-backdrop": HTMLEsBackdropElement;
        "es-breadcrumb": HTMLEsBreadcrumbElement;
        "es-button": HTMLEsButtonElement;
        "es-button-link": HTMLEsButtonLinkElement;
        "es-counter": HTMLEsCounterElement;
        "es-icon": HTMLEsIconElement;
        "es-logo": HTMLEsLogoElement;
        "es-modal": HTMLEsModalElement;
        "es-page-title": HTMLEsPageTitleElement;
        "es-popover": HTMLEsPopoverElement;
        "es-popper": HTMLEsPopperElement;
        "es-popper-inner": HTMLEsPopperInnerElement;
        "es-portal": HTMLEsPortalElement;
        "es-progression": HTMLEsProgressionElement;
        "es-status": HTMLEsStatusElement;
        "es-table": HTMLEsTableElement;
        "es-toast": HTMLEsToastElement;
        "es-toaster": HTMLEsToasterElement;
        "es-wizard": HTMLEsWizardElement;
    }
}
declare namespace LocalJSX {
    interface EsAccordian {
        "sections": AccordianSection[];
    }
    interface EsBackdrop {
        "onClosed"?: (event: CustomEvent<any>) => void;
        "onRequestClose"?: (event: CustomEvent<any>) => void;
        "showBackdrop"?: boolean;
    }
    interface EsBreadcrumb {
        "crumbs"?: Crumb[];
    }
    interface EsButton {
        "color"?: ButtonColor;
        "disabled"?: boolean;
        "form"?: string;
        "type"?: string;
        "variant"?: ButtonVariant;
    }
    interface EsButtonLink {
        "anchorClass"?: string;
        "anchorId"?: string;
        "anchorRole"?: string;
        "anchorTabIndex"?: string;
        "anchorTitle"?: string;
        "ariaHaspopup"?: string;
        "ariaLabel"?: string;
        "ariaPosinset"?: string;
        "ariaSetsize"?: number;
        "color"?: ButtonColor;
        "disabled"?: boolean;
        "forceRefresh"?: boolean;
        "target"?: string;
        "url"?: string;
        "variant"?: ButtonVariant;
    }
    interface EsCounter {
        "count"?: number;
        "size"?: number;
        "variant"?: CounterVariant;
    }
    interface EsIcon {
        "angle"?: number;
        "icon": string;
        "size"?: number;
        "spin"?: boolean;
        "spinDirection"?: 'clockwise' | 'antiClockwise';
    }
    interface EsLogo {
        "height"?: number;
        "width"?: number;
    }
    interface EsModal {
        "onRequestClose"?: (event: CustomEvent<any>) => void;
    }
    interface EsPageTitle {
    }
    interface EsPopover {
        "attachmentX"?: string;
        "attachmentY"?: string;
        "backdrop"?: boolean;
        "offsetX"?: number;
        "offsetY"?: number;
        "onRequestClose"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "popperClass"?: string;
        "positionX"?: string;
        "positionY"?: string;
        "target"?: string;
    }
    interface EsPopper {
        "backdrop"?: boolean;
        "onRequestClose"?: (event: CustomEvent<any>) => void;
    }
    interface EsPopperInner {
    }
    interface EsPortal {
        "backdrop"?: boolean;
        "element": VNode;
        "onRequestClose"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "target"?: string;
    }
    interface EsProgression {
        "checkpoints": Checkpoint[];
        "location": string;
        "onProgressionRequest"?: (event: CustomEvent<any>) => void;
    }
    interface EsStatus {
        "status": Status;
    }
    interface EsTable {
        "columns": TableColumn<any>[];
        "data": Record<string, any>;
        "linkRowTo"?: (row: any) => string;
        "rowClass"?: (
        row: any,
    ) => Record<string, boolean> | string | undefined;
        "rows": string[];
    }
    interface EsToast {
        "count": Toast['count'];
        "icon": Toast['icon'];
        "level": Toast['level'];
    }
    interface EsToaster {
    }
    interface EsWizard {
        "location": string;
        "onProgressionRequest"?: (event: CustomEvent<any>) => void;
        "pages": WizardPage[];
    }
    interface IntrinsicElements {
        "es-accordian": EsAccordian;
        "es-backdrop": EsBackdrop;
        "es-breadcrumb": EsBreadcrumb;
        "es-button": EsButton;
        "es-button-link": EsButtonLink;
        "es-counter": EsCounter;
        "es-icon": EsIcon;
        "es-logo": EsLogo;
        "es-modal": EsModal;
        "es-page-title": EsPageTitle;
        "es-popover": EsPopover;
        "es-popper": EsPopper;
        "es-popper-inner": EsPopperInner;
        "es-portal": EsPortal;
        "es-progression": EsProgression;
        "es-status": EsStatus;
        "es-table": EsTable;
        "es-toast": EsToast;
        "es-toaster": EsToaster;
        "es-wizard": EsWizard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "es-accordian": LocalJSX.EsAccordian & JSXBase.HTMLAttributes<HTMLEsAccordianElement>;
            "es-backdrop": LocalJSX.EsBackdrop & JSXBase.HTMLAttributes<HTMLEsBackdropElement>;
            "es-breadcrumb": LocalJSX.EsBreadcrumb & JSXBase.HTMLAttributes<HTMLEsBreadcrumbElement>;
            "es-button": LocalJSX.EsButton & JSXBase.HTMLAttributes<HTMLEsButtonElement>;
            "es-button-link": LocalJSX.EsButtonLink & JSXBase.HTMLAttributes<HTMLEsButtonLinkElement>;
            "es-counter": LocalJSX.EsCounter & JSXBase.HTMLAttributes<HTMLEsCounterElement>;
            "es-icon": LocalJSX.EsIcon & JSXBase.HTMLAttributes<HTMLEsIconElement>;
            "es-logo": LocalJSX.EsLogo & JSXBase.HTMLAttributes<HTMLEsLogoElement>;
            "es-modal": LocalJSX.EsModal & JSXBase.HTMLAttributes<HTMLEsModalElement>;
            "es-page-title": LocalJSX.EsPageTitle & JSXBase.HTMLAttributes<HTMLEsPageTitleElement>;
            "es-popover": LocalJSX.EsPopover & JSXBase.HTMLAttributes<HTMLEsPopoverElement>;
            "es-popper": LocalJSX.EsPopper & JSXBase.HTMLAttributes<HTMLEsPopperElement>;
            "es-popper-inner": LocalJSX.EsPopperInner & JSXBase.HTMLAttributes<HTMLEsPopperInnerElement>;
            "es-portal": LocalJSX.EsPortal & JSXBase.HTMLAttributes<HTMLEsPortalElement>;
            "es-progression": LocalJSX.EsProgression & JSXBase.HTMLAttributes<HTMLEsProgressionElement>;
            "es-status": LocalJSX.EsStatus & JSXBase.HTMLAttributes<HTMLEsStatusElement>;
            "es-table": LocalJSX.EsTable & JSXBase.HTMLAttributes<HTMLEsTableElement>;
            "es-toast": LocalJSX.EsToast & JSXBase.HTMLAttributes<HTMLEsToastElement>;
            "es-toaster": LocalJSX.EsToaster & JSXBase.HTMLAttributes<HTMLEsToasterElement>;
            "es-wizard": LocalJSX.EsWizard & JSXBase.HTMLAttributes<HTMLEsWizardElement>;
        }
    }
}
