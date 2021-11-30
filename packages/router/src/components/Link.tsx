import { h, FunctionalComponent } from '@stencil/core';
import type { Path } from '../types';
import { isModifiedEvent } from '../utils/dom-utils';
import { INTERNAL_ROUTER } from '../utils/globals';

/** @props */
export interface LinkProps {
    /** The url to link to. */
    url?: string;
    /** If matches, the activeClass is applied. (default: url) */
    urlMatch?: Path;
    /** If the urlMatch should be exact.  */
    exact?: boolean;
    /** If the urlMatch should be strict.  */
    strict?: boolean;
    /** If the Link should break out of the router, and force a page load.  */
    forceRefresh?: boolean;
    /** If the windows scroll position should be set to 0,0 */
    updateScroll?: boolean;

    /** Element to use as a link. Default: `a`  */
    element?: string;

    /** The class to apply if the urlMatch matches.  */
    activeClass?: string;
    /** The class to apply to the rendered element.  */
    class?: string | Record<string, boolean>;
    /** If the link is disabled.  */
    disabled?: boolean;
    /** Called when the link is clicked. If returns false, the link will not navigate.  */
    onClick?: (e: MouseEvent) => void | boolean;
    /** Pass further props to the rendered element.  */
    [key: string]: any;
}

/**
 * Link to a url.
 * @usage ./Link.usage.md
 */
export const Link: FunctionalComponent<LinkProps> = (
    {
        element: Element = 'a',
        url,
        urlMatch = url,
        exact,
        strict,
        forceRefresh = false,
        updateScroll = true,
        activeClass = 'link-active',
        class: classes = {},
        disabled,
        onClick,
        ...props
    },
    children,
) => {
    const match = window[INTERNAL_ROUTER].match({
        path: urlMatch,
        strict,
        exact,
    });

    return (
        <Element
            href={disabled ? undefined : url}
            class={{
                [activeClass]: !!match,
                ...(typeof classes === 'string'
                    ? { [classes]: true }
                    : classes),
            }}
            disabled={disabled}
            aria-disabled={disabled}
            data-router={'yes'}
            onClick={(e: MouseEvent) => {
                const cancel = onClick?.(e);

                if (
                    cancel === false ||
                    disabled ||
                    forceRefresh ||
                    isModifiedEvent(e) ||
                    !url
                ) {
                    return;
                }

                e.preventDefault();

                const href = window[INTERNAL_ROUTER].getUrl(url);
                window[INTERNAL_ROUTER].history.push(
                    href,
                    undefined,
                    updateScroll,
                );
            }}
            {...props}
        >
            {children}
        </Element>
    );
};
