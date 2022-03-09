/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconDescription } from "@eventstore/components";
import { ValidationMessages, WorkingDataArray } from "./types";
import { MaskOptions } from "./components/es-input/types";
import { OptionFilter, RenderTypeaheadField, RenderTypeaheadOption, TypeaheadOption } from "./components/es-typeahead/types";
import { VNode } from "@stencil/core";
import { RadioCardGroupOption } from "./components/es-radio-card-group/types";
import { RenderCard } from "./components/es-radio-card-group/es-radio-card-group";
import { RenderSelectValue } from "./components/es-select/es-select";
export namespace Components {
    interface EsCheckbox {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * The icon to use.
         */
        "icon": IconDescription;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": boolean;
    }
    interface EsInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * Apply an input mask
         */
        "mask"?: MaskOptions;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsInputList {
        /**
          * Icon for the add item button.
         */
        "additionIcon": IconDescription;
        /**
          * Text for the add item button.
         */
        "additionText": string;
        /**
          * The backing WorkingDataArray
         */
        "data": WorkingDataArray<string>;
        /**
          * Icon for the delete button.
         */
        "deleteIcon": IconDescription;
        /**
          * If the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Display a placeholder in the input.
         */
        "placeholder": string;
    }
    interface EsListCreator {
        /**
          * The icon to display next to the field
         */
        "addIcon": IconDescription;
        /**
          * The backing WorkingDataArray
         */
        "data": WorkingDataArray<string>;
        /**
          * Icon for the delete button.
         */
        "deleteIcon": IconDescription;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * The icon to display next to the field
         */
        "icon": IconDescription;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * A list of options to choose from.
         */
        "options": TypeaheadOption[];
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * Render the list item.
         */
        "renderItem": ({ name }: TypeaheadOption) => VNode;
    }
    interface EsMegaInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsNumberInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * The placeholder for the input.
         */
        "placeholder"?: string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * Display a unit beside the input.
         */
        "unit"?: string;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsRadioCardGroup {
        /**
          * Group the cards by a key.
         */
        "groupBy"?: string;
        /**
          * Icon to display when checked.
         */
        "icon": IconDescription;
        /**
          * If the field is currently in an error state.
         */
        "invalid": boolean;
        /**
          * The id of the component that labels this input. This input doesn't bring its own label, so must be labeled externally and referenced here.
         */
        "labelledby": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * The options to be displayed and chosen from.
         */
        "options": RadioCardGroupOption[];
        /**
          * Overwrite the default card renderer
         */
        "renderCard": RenderCard<any>;
        /**
          * The current value of the field.
         */
        "value": string | null;
    }
    interface EsSelect {
        /**
          * Icon to use as a chevron.
         */
        "chevronIcon": IconDescription;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Pass a custom search filter function
         */
        "optionFilter"?: OptionFilter;
        /**
          * A list of options to choose from.
         */
        "options": TypeaheadOption[];
        /**
          * The placeholder for the input.
         */
        "placeholder"?: string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * Overwrite the default option renderer.
         */
        "renderOption"?: RenderTypeaheadOption;
        /**
          * Overwrite the default value renderer.
         */
        "renderValue": RenderSelectValue;
        /**
          * The current value of the field.
         */
        "value": string | null;
    }
    interface EsSwitch {
        /**
          * Icon to display when switch is on in high contrast mode.
         */
        "activeIcon": IconDescription;
        /**
          * Text to display when switch is on in high contrast mode.
         */
        "activeText": string;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Icon to display when switch is off in high contrast mode.
         */
        "inactiveIcon": IconDescription;
        /**
          * Text to display when switch is off in high contrast mode.
         */
        "inactiveText": string;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * Allows you to pause interaction with the input while an operation completes.
         */
        "setPending": (pending: boolean) => Promise<void>;
        /**
          * The current value of the field.
         */
        "value": boolean;
    }
    interface EsTextarea {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
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
        /**
          * Icon to diplay next to errors. (if `showIcons` or high contrast)
         */
        "errorIcon": IconDescription;
        /**
          * Icon to diplay next to infos. (if `showIcons` or high contrast)
         */
        "infoIcon": IconDescription;
        /**
          * The messages to display.
         */
        "messages"?: Partial<ValidationMessages>;
        /**
          * Display icons alongside messages.
         */
        "showIcons": boolean;
        /**
          * Icon to diplay next to warnings. (if `showIcons` or high contrast)
         */
        "warningIcon": IconDescription;
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
    interface HTMLEsInputListElement extends Components.EsInputList, HTMLStencilElement {
    }
    var HTMLEsInputListElement: {
        prototype: HTMLEsInputListElement;
        new (): HTMLEsInputListElement;
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
        "es-input-list": HTMLEsInputListElement;
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
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * The icon to use.
         */
        "icon"?: IconDescription;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": boolean;
    }
    interface EsInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * Apply an input mask
         */
        "mask"?: MaskOptions;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted on keyup of enter, if no modifier keys are held.
         */
        "onEnter"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsInputList {
        /**
          * Icon for the add item button.
         */
        "additionIcon"?: IconDescription;
        /**
          * Text for the add item button.
         */
        "additionText"?: string;
        /**
          * The backing WorkingDataArray
         */
        "data": WorkingDataArray<string>;
        /**
          * Icon for the delete button.
         */
        "deleteIcon"?: IconDescription;
        /**
          * If the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Display a placeholder in the input.
         */
        "placeholder": string;
    }
    interface EsListCreator {
        /**
          * The icon to display next to the field
         */
        "addIcon"?: IconDescription;
        /**
          * The backing WorkingDataArray
         */
        "data": WorkingDataArray<string>;
        /**
          * Icon for the delete button.
         */
        "deleteIcon"?: IconDescription;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * The icon to display next to the field
         */
        "icon": IconDescription;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * A list of options to choose from.
         */
        "options": TypeaheadOption[];
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * Render the list item.
         */
        "renderItem"?: ({ name }: TypeaheadOption) => VNode;
    }
    interface EsMegaInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsNumberInput {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted on keyup of enter, if no modifier keys are held.
         */
        "onEnter"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder for the input.
         */
        "placeholder"?: string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * Display a unit beside the input.
         */
        "unit"?: string;
        /**
          * The current value of the field.
         */
        "value": string;
    }
    interface EsRadioCardGroup {
        /**
          * Group the cards by a key.
         */
        "groupBy"?: string;
        /**
          * Icon to display when checked.
         */
        "icon"?: IconDescription;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The id of the component that labels this input. This input doesn't bring its own label, so must be labeled externally and referenced here.
         */
        "labelledby": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * The options to be displayed and chosen from.
         */
        "options": RadioCardGroupOption[];
        /**
          * Overwrite the default card renderer
         */
        "renderCard"?: RenderCard<any>;
        /**
          * The current value of the field.
         */
        "value": string | null;
    }
    interface EsSelect {
        /**
          * Icon to use as a chevron.
         */
        "chevronIcon"?: IconDescription;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * Pass a custom search filter function
         */
        "optionFilter"?: OptionFilter;
        /**
          * A list of options to choose from.
         */
        "options": TypeaheadOption[];
        /**
          * The placeholder for the input.
         */
        "placeholder"?: string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * Overwrite the default option renderer.
         */
        "renderOption"?: RenderTypeaheadOption;
        /**
          * Overwrite the default value renderer.
         */
        "renderValue"?: RenderSelectValue;
        /**
          * The current value of the field.
         */
        "value": string | null;
    }
    interface EsSwitch {
        /**
          * Icon to display when switch is on in high contrast mode.
         */
        "activeIcon"?: IconDescription;
        /**
          * Text to display when switch is on in high contrast mode.
         */
        "activeText"?: string;
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Icon to display when switch is off in high contrast mode.
         */
        "inactiveIcon"?: IconDescription;
        /**
          * Text to display when switch is off in high contrast mode.
         */
        "inactiveText"?: string;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
        "value": boolean;
    }
    interface EsTextarea {
        /**
          * If the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pass props directly to the input.
         */
        "inputProps"?: Record<string, any>;
        /**
          * If the field is currently in an error state.
         */
        "invalid"?: boolean;
        /**
          * The label of the field.
         */
        "label": string;
        /**
          * The validation messages of the field
         */
        "messages"?: ValidationMessages;
        /**
          * The name of the field.
         */
        "name": string;
        /**
          * Emitted when the value of the field is changed.
         */
        "onFieldchange"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder for the input.
         */
        "placeholder": string;
        /**
          * If the field is editable.
         */
        "readonly"?: boolean;
        /**
          * The current value of the field.
         */
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
        /**
          * Icon to diplay next to errors. (if `showIcons` or high contrast)
         */
        "errorIcon"?: IconDescription;
        /**
          * Icon to diplay next to infos. (if `showIcons` or high contrast)
         */
        "infoIcon"?: IconDescription;
        /**
          * The messages to display.
         */
        "messages"?: Partial<ValidationMessages>;
        /**
          * Display icons alongside messages.
         */
        "showIcons"?: boolean;
        /**
          * Icon to diplay next to warnings. (if `showIcons` or high contrast)
         */
        "warningIcon"?: IconDescription;
    }
    interface IntrinsicElements {
        "es-checkbox": EsCheckbox;
        "es-input": EsInput;
        "es-input-list": EsInputList;
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
            "es-input-list": LocalJSX.EsInputList & JSXBase.HTMLAttributes<HTMLEsInputListElement>;
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
