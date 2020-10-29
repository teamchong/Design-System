/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ValidationMessages } from "./types";
import { MaskOptions } from "./components/es-input/es-input";
import { OptionFilter, RenderTypeaheadField, RenderTypeaheadOption, TypeaheadOption } from "./components/es-typeahead/types";
import { VNode } from "@stencil/core";
import { RadioCardGroupOption, RenderCard } from "./components/es-radio-card-group/es-radio-card-group";
import { RenderSelectValue } from "./components/es-select/es-select";
export namespace Components {
    interface EsCheckbox {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "name": string;
        "readonly"?: boolean;
        "value": boolean;
    }
    interface EsInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "mask"?: MaskOptions;
        "messages"?: ValidationMessages;
        "name": string;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsListCreator {
        "disabled"?: boolean;
        "icon": string;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "options": TypeaheadOption[];
        "placeholder": string;
        "renderItem": ({ name }: TypeaheadOption) => VNode;
        "value": string[];
    }
    interface EsMegaInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsNumberInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "unit"?: string;
        "value": string;
    }
    interface EsRadioCardGroup {
        "invalid": boolean;
        "labelledby": string;
        "messages"?: ValidationMessages;
        "name": string;
        "options": RadioCardGroupOption[];
        "renderCard": RenderCard<any>;
        "value": string | null;
    }
    interface EsSelect {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "optionFilter"?: OptionFilter;
        "options": TypeaheadOption[];
        "placeholder"?: string;
        "readonly"?: boolean;
        "renderOption"?: RenderTypeaheadOption;
        "renderValue": RenderSelectValue;
        "value": string | null;
    }
    interface EsSwitch {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "name": string;
        "readonly"?: boolean;
        "setPending": (pending: boolean) => Promise<void>;
        "value": boolean;
    }
    interface EsTextarea {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsTypeahead {
        "clearOnSelect": boolean;
        "closeOnSelect": boolean;
        "disabled"?: boolean;
        "name": string;
        "optionFilter": OptionFilter;
        "options": TypeaheadOption[];
        "readonly"?: boolean;
        "renderField": RenderTypeaheadField;
        "renderOption": RenderTypeaheadOption;
        "value": string[];
    }
    interface EsValidationMessages {
        "messages"?: Partial<ValidationMessages>;
    }
}
declare global {
    interface HTMLEsCheckboxElement extends Components.EsCheckbox, HTMLStencilElement {
    }
    var HTMLEsCheckboxElement: {
        prototype: HTMLEsCheckboxElement;
        new (): HTMLEsCheckboxElement;
    };
    interface HTMLEsInputElement extends Components.EsInput, HTMLStencilElement {
    }
    var HTMLEsInputElement: {
        prototype: HTMLEsInputElement;
        new (): HTMLEsInputElement;
    };
    interface HTMLEsListCreatorElement extends Components.EsListCreator, HTMLStencilElement {
    }
    var HTMLEsListCreatorElement: {
        prototype: HTMLEsListCreatorElement;
        new (): HTMLEsListCreatorElement;
    };
    interface HTMLEsMegaInputElement extends Components.EsMegaInput, HTMLStencilElement {
    }
    var HTMLEsMegaInputElement: {
        prototype: HTMLEsMegaInputElement;
        new (): HTMLEsMegaInputElement;
    };
    interface HTMLEsNumberInputElement extends Components.EsNumberInput, HTMLStencilElement {
    }
    var HTMLEsNumberInputElement: {
        prototype: HTMLEsNumberInputElement;
        new (): HTMLEsNumberInputElement;
    };
    interface HTMLEsRadioCardGroupElement extends Components.EsRadioCardGroup, HTMLStencilElement {
    }
    var HTMLEsRadioCardGroupElement: {
        prototype: HTMLEsRadioCardGroupElement;
        new (): HTMLEsRadioCardGroupElement;
    };
    interface HTMLEsSelectElement extends Components.EsSelect, HTMLStencilElement {
    }
    var HTMLEsSelectElement: {
        prototype: HTMLEsSelectElement;
        new (): HTMLEsSelectElement;
    };
    interface HTMLEsSwitchElement extends Components.EsSwitch, HTMLStencilElement {
    }
    var HTMLEsSwitchElement: {
        prototype: HTMLEsSwitchElement;
        new (): HTMLEsSwitchElement;
    };
    interface HTMLEsTextareaElement extends Components.EsTextarea, HTMLStencilElement {
    }
    var HTMLEsTextareaElement: {
        prototype: HTMLEsTextareaElement;
        new (): HTMLEsTextareaElement;
    };
    interface HTMLEsTypeaheadElement extends Components.EsTypeahead, HTMLStencilElement {
    }
    var HTMLEsTypeaheadElement: {
        prototype: HTMLEsTypeaheadElement;
        new (): HTMLEsTypeaheadElement;
    };
    interface HTMLEsValidationMessagesElement extends Components.EsValidationMessages, HTMLStencilElement {
    }
    var HTMLEsValidationMessagesElement: {
        prototype: HTMLEsValidationMessagesElement;
        new (): HTMLEsValidationMessagesElement;
    };
    interface HTMLElementTagNameMap {
        "es-checkbox": HTMLEsCheckboxElement;
        "es-input": HTMLEsInputElement;
        "es-list-creator": HTMLEsListCreatorElement;
        "es-mega-input": HTMLEsMegaInputElement;
        "es-number-input": HTMLEsNumberInputElement;
        "es-radio-card-group": HTMLEsRadioCardGroupElement;
        "es-select": HTMLEsSelectElement;
        "es-switch": HTMLEsSwitchElement;
        "es-textarea": HTMLEsTextareaElement;
        "es-typeahead": HTMLEsTypeaheadElement;
        "es-validation-messages": HTMLEsValidationMessagesElement;
    }
}
declare namespace LocalJSX {
    interface EsCheckbox {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "name": string;
        "onEnter"?: (event: CustomEvent<any>) => void;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "readonly"?: boolean;
        "value": boolean;
    }
    interface EsInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "mask"?: MaskOptions;
        "messages"?: ValidationMessages;
        "name": string;
        "onEnter"?: (event: CustomEvent<any>) => void;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsListCreator {
        "disabled"?: boolean;
        "icon": string;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "options": TypeaheadOption[];
        "placeholder": string;
        "renderItem"?: ({ name }: TypeaheadOption) => VNode;
        "value": string[];
    }
    interface EsMegaInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsNumberInput {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onEnter"?: (event: CustomEvent<any>) => void;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "unit"?: string;
        "value": string;
    }
    interface EsRadioCardGroup {
        "invalid"?: boolean;
        "labelledby": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "options": RadioCardGroupOption[];
        "renderCard"?: RenderCard<any>;
        "value": string | null;
    }
    interface EsSelect {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "optionFilter"?: OptionFilter;
        "options": TypeaheadOption[];
        "placeholder"?: string;
        "readonly"?: boolean;
        "renderOption"?: RenderTypeaheadOption;
        "renderValue"?: RenderSelectValue;
        "value": string | null;
    }
    interface EsSwitch {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "name": string;
        "onEnter"?: (event: CustomEvent<any>) => void;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "readonly"?: boolean;
        "value": boolean;
    }
    interface EsTextarea {
        "disabled"?: boolean;
        "inputProps"?: Record<string, any>;
        "invalid"?: boolean;
        "label": string;
        "messages"?: ValidationMessages;
        "name": string;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "placeholder": string;
        "readonly"?: boolean;
        "value": string;
    }
    interface EsTypeahead {
        "clearOnSelect"?: boolean;
        "closeOnSelect"?: boolean;
        "disabled"?: boolean;
        "name": string;
        "onEnter"?: (event: CustomEvent<any>) => void;
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        "optionFilter"?: OptionFilter;
        "options": TypeaheadOption[];
        "readonly"?: boolean;
        "renderField": RenderTypeaheadField;
        "renderOption"?: RenderTypeaheadOption;
        "value": string[];
    }
    interface EsValidationMessages {
        "messages"?: Partial<ValidationMessages>;
    }
    interface IntrinsicElements {
        "es-checkbox": EsCheckbox;
        "es-input": EsInput;
        "es-list-creator": EsListCreator;
        "es-mega-input": EsMegaInput;
        "es-number-input": EsNumberInput;
        "es-radio-card-group": EsRadioCardGroup;
        "es-select": EsSelect;
        "es-switch": EsSwitch;
        "es-textarea": EsTextarea;
        "es-typeahead": EsTypeahead;
        "es-validation-messages": EsValidationMessages;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "es-checkbox": LocalJSX.EsCheckbox & JSXBase.HTMLAttributes<HTMLEsCheckboxElement>;
            "es-input": LocalJSX.EsInput & JSXBase.HTMLAttributes<HTMLEsInputElement>;
            "es-list-creator": LocalJSX.EsListCreator & JSXBase.HTMLAttributes<HTMLEsListCreatorElement>;
            "es-mega-input": LocalJSX.EsMegaInput & JSXBase.HTMLAttributes<HTMLEsMegaInputElement>;
            "es-number-input": LocalJSX.EsNumberInput & JSXBase.HTMLAttributes<HTMLEsNumberInputElement>;
            "es-radio-card-group": LocalJSX.EsRadioCardGroup & JSXBase.HTMLAttributes<HTMLEsRadioCardGroupElement>;
            "es-select": LocalJSX.EsSelect & JSXBase.HTMLAttributes<HTMLEsSelectElement>;
            "es-switch": LocalJSX.EsSwitch & JSXBase.HTMLAttributes<HTMLEsSwitchElement>;
            "es-textarea": LocalJSX.EsTextarea & JSXBase.HTMLAttributes<HTMLEsTextareaElement>;
            "es-typeahead": LocalJSX.EsTypeahead & JSXBase.HTMLAttributes<HTMLEsTypeaheadElement>;
            "es-validation-messages": LocalJSX.EsValidationMessages & JSXBase.HTMLAttributes<HTMLEsValidationMessagesElement>;
        }
    }
}
