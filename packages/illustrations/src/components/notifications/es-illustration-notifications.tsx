import { Component, h, Host } from '@stencil/core';
import { theme } from '@eventstore/theme';

/**
 * Displays Notifications illustration.
 * @part illustration - The root svg of the illustration.
 */
@Component({
    tag: 'es-illustration-notifications',
    styleUrl: 'notifications.css',
    shadow: true,
})
export class EsIllustrationNotifications {
    render() {
        const isDark = theme.isDark();

        return (
            <Host dark={isDark} light={!isDark}>
                {isDark ? this.renderDark() : this.renderLight()}
            </Host>
        );
    }

    renderLight() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 670 819"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="notifications_b"
                        x1="802.6"
                        x2="859.1"
                        y1="343.5"
                        y2="245.8"
                        gradientTransform="matrix(1 0 0 -1 -265 630)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#bbdefb" />
                    </linearGradient>
                </defs>
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M646.7 286.6c-12.9-22.2-28.1-38.4-45.7-48.6L211 12.8c-17.7-10.1-32.9-11.5-45.7-4.1L28 87.4l118 178.9v121.3c0 20.3 6.4 41.5 19.3 63.8 12.9 22.3 28.1 38.5 45.7 48.6l97.5 56.3v98.4c0 5.5 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.8l75-21.8 101.9 154.5 142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5c0-20.3-6.4-41.6-19.3-63.9Z"
                />
                <path
                    fill="#bbdefb"
                    fill-rule="evenodd"
                    d="m524 431.4-44.1 341.2 24.8 37.7 142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5l-142 80.9Z"
                />
                <path
                    fill="url(#notifications_b)"
                    fill-rule="evenodd"
                    d="m609.3 243.3-38.4 22.1-107 62.5 52.4 110.5L666 350.5c0-20.3-6.4-41.6-19.3-63.9-10.8-18.7-23.3-33.1-37.4-43.3Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M69 93.8c-17.6-10.2-32.9-11.5-45.7-4.1S4 110.9 4 131.2v337.3c0 20.3 6.4 41.6 19.3 63.9C36.1 554.6 51.4 570.9 69 581l97.5 56.3v98.4c0 5.4 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.7l127-36.8L459 806.2c17.6 10.1 32.9 11.5 45.7 4.1S524 789 524 768.7V431.4c0-20.3-6.4-41.5-19.3-63.8-12.9-22.3-28.1-38.5-45.7-48.6L69 93.8Z"
                />
                <path
                    fill="#1a4e85"
                    d="M503 368.6c12.6 21.8 19 43 19 62.8v159.4l3.7.3h.3V431.4c0-20.5-6.6-42.3-19.5-64.8s-28.6-39.1-46.5-49.4L86.2 101.4l-1.2 1.3-1 2.1 374 215.9c17.2 9.9 32.4 26.1 45 47.9Z"
                />
                <path
                    fill="#bbdefb"
                    fill-rule="evenodd"
                    d="M231.5 543.7c0-10.2 3.2-17.1 9.7-20.8s14-3 22.8 2 16.4 13.2 22.9 24.4 9.6 21.7 9.6 31.9-3.2 17.1-9.6 20.8-14.1 3-22.9-2.1-16.4-13.2-22.8-24.3c-6.4-11.1-9.7-21.8-9.7-31.9Zm53.3-48.9c-3 1.4-6.6.9-10.6-1.5l-20.3-11.7c-4.4-2.7-8.1-6.4-10.7-10.8-2.9-4.3-4.5-9.3-4.6-14.4l-13.2-157.5c-.7-5.9.7-10 4.1-12.3s7.4-2.2 12.2.6l44.7 25.8c4.7 2.7 8.8 7.2 12.1 13.4s4.8 12 4.1 17l-13.2 142.3c0 4.7-1.5 7.7-4.6 9.1Z"
                />
                <path
                    fill="none"
                    stroke="#1a4e85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                    d="M646.7 286.6c-12.9-22.2-28.1-38.4-45.7-48.6L211 12.8c-17.7-10.1-32.9-11.5-45.7-4.1L28 87.4h0c-1.6.6-3.2 1.4-4.7 2.3C10.4 97.1 3.9 110.9 4 131.2v337.3c0 20.3 6.4 41.6 19.3 63.9C36.1 554.6 51.4 570.9 69 581l97.5 56.3v98.4c0 5.4 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.7l127-36.8L459 806.2c17.6 10.1 32.9 11.5 45.7 4.1l142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5c0-20.3-6.4-41.6-19.3-63.9Z"
                />
            </svg>
        );
    }

    renderDark() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 670 819"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="notifications_b"
                        x1="802.6"
                        x2="859.1"
                        y1="343.5"
                        y2="245.8"
                        gradientTransform="matrix(1 0 0 -1 -265 630)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#ced4db" />
                        <stop offset="1" stop-color="#09264a" />
                    </linearGradient>
                </defs>
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M646.7 286.6c-12.9-22.2-28.1-38.4-45.7-48.6L211 12.8c-17.7-10.1-32.9-11.5-45.7-4.1L28 87.4l118 178.9v121.3c0 20.3 6.4 41.5 19.3 63.8 12.9 22.3 28.1 38.5 45.7 48.6l97.5 56.3v98.4c0 5.5 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.8l75-21.8 101.9 154.5 142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5c0-20.3-6.4-41.6-19.3-63.9Z"
                />
                <path
                    fill="#09264a"
                    fill-rule="evenodd"
                    d="m524 431.4-44.1 341.2 24.8 37.7 142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5l-142 80.9Z"
                />
                <path
                    fill="url(#notifications_b)"
                    fill-rule="evenodd"
                    d="m609.3 243.3-38.4 22.1-107 62.5 52.4 110.5L666 350.5c0-20.3-6.4-41.6-19.3-63.9-10.8-18.7-23.3-33.1-37.4-43.3Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M69 93.8c-17.6-10.2-32.9-11.5-45.7-4.1S4 110.9 4 131.2v337.3c0 20.3 6.4 41.6 19.3 63.9C36.1 554.6 51.4 570.9 69 581l97.5 56.3v98.4c0 5.4 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.7l127-36.8L459 806.2c17.6 10.1 32.9 11.5 45.7 4.1S524 789 524 768.7V431.4c0-20.3-6.4-41.5-19.3-63.8-12.9-22.3-28.1-38.5-45.7-48.6L69 93.8Z"
                />
                <path
                    fill="#09264a"
                    d="M503 368.6c12.6 21.8 19 43 19 62.8v159.4l3.7.3h.3V431.4c0-20.5-6.6-42.3-19.5-64.8s-28.6-39.1-46.5-49.4L86.2 101.4l-1.2 1.3-1 2.1 374 215.9c17.2 9.9 32.4 26.1 45 47.9Z"
                />
                <path
                    fill="#09264a"
                    fill-rule="evenodd"
                    d="M231.5 543.7c0-10.2 3.2-17.1 9.7-20.8s14-3 22.8 2 16.4 13.2 22.9 24.4 9.6 21.7 9.6 31.9-3.2 17.1-9.6 20.8-14.1 3-22.9-2.1-16.4-13.2-22.8-24.3c-6.4-11.1-9.7-21.8-9.7-31.9Zm53.3-48.9c-3 1.4-6.6.9-10.6-1.5l-20.3-11.7c-4.4-2.7-8.1-6.4-10.7-10.8-2.9-4.3-4.5-9.3-4.6-14.4l-13.2-157.5c-.7-5.9.7-10 4.1-12.3s7.4-2.2 12.2.6l44.7 25.8c4.7 2.7 8.8 7.2 12.1 13.4s4.8 12 4.1 17l-13.2 142.3c0 4.7-1.5 7.7-4.6 9.1Z"
                />
                <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                    d="M646.7 286.6c-12.9-22.2-28.1-38.4-45.7-48.6L211 12.8c-17.7-10.1-32.9-11.5-45.7-4.1L28 87.4h0c-1.6.6-3.2 1.4-4.7 2.3C10.4 97.1 3.9 110.9 4 131.2v337.3c0 20.3 6.4 41.6 19.3 63.9C36.1 554.6 51.4 570.9 69 581l97.5 56.3v98.4c0 5.4 2.2 10.8 6.6 16.1s8.6 7.5 12.7 6.7l127-36.8L459 806.2c17.6 10.1 32.9 11.5 45.7 4.1l142-81c12.9-7.4 19.3-21.2 19.3-41.5V350.5c0-20.3-6.4-41.6-19.3-63.9Z"
                />
            </svg>
        );
    }
}
