import { Component, h, Host } from '@stencil/core';
import { theme } from '@eventstore-ui/theme';

/**
 * Displays Harddrive illustration.
 * @part illustration - The root svg of the illustration.
 */
@Component({
    tag: 'es-illustration-harddrive',
    styleUrl: 'harddrive.css',
    shadow: true,
})
export class EsIllustrationHarddrive {
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
                viewBox="0 0 900.3 647.9"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="harddrive_b"
                        x1="794.5"
                        x2="818.3"
                        y1="-325.6"
                        y2="-284.3"
                        gradientTransform="translate(-165 689.2)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#bbdefb" />
                    </linearGradient>
                    <linearGradient
                        id="harddrive_c"
                        x1="227.4"
                        x2="678"
                        y1="250.3"
                        y2="250.3"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset=".5" stop-color="#bbdefb" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                </defs>
                <path
                    fill="#bbdefb"
                    fill-rule="evenodd"
                    d="M869 220.4 501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1l-.4-.3-470 273 402 361 471-272-.6-.5c5.3-3.7 8.6-11.5 8.6-22.3v-73.6c0-20.4-11.7-43.6-26.2-52Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M887.1 241.1c-4.7-9-11.1-16.6-18.1-20.7L501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1l-.4-.3-470 273L36 299.4l371.2 223.4 479.9-281.7Z"
                />
                <path
                    fill="url(#harddrive_b)"
                    fill-rule="evenodd"
                    d="m416.2 541.8 477.9-280.5c-2.5-13.4-9.1-26.6-17.6-35L383.2 505.8l33 36Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M399 639.7c14.5 8.4 26.2-1.3 26.2-21.7v-73.6c0-20.3-11.8-43.6-26.2-52L31.5 280.2c-14.5-8.4-26.2 1.3-26.2 21.7v73.6c0 20.3 11.8 43.6 26.2 52L399 639.7Zm-39.4-124c10.9 6.3 19.7 23.7 19.7 39s-8.8 22.5-19.7 16.2-19.7-23.7-19.7-39 8.8-22.5 19.7-16.2Zm-52.5-30.3c10.9 6.3 19.7 23.7 19.7 39s-8.8 22.5-19.7 16.2-19.7-23.7-19.7-39 8.8-22.5 19.7-16.2Z"
                />
                <path
                    fill="#1a4e85"
                    d="M380.5 549.8c-1.3-10.4-5.5-20.3-12.1-28.4-.2.9-.4 1.8-.7 2.7l-.3.7c5.4 7.2 8.8 15.6 10 24.5l3.1.5ZM369.1 571.4c-2.6.6-5.6 0-8.8-1.8-10.4-6-18.9-22.9-18.9-37.7v-1.5l-2.6.5h-.4v.9c0 15.7 9.2 33.8 20.4 40.3 2.5 1.6 5.4 2.4 8.3 2.5l2-.2v-3ZM236 398.1c0-.4.2-.9.4-1.3L43.3 285.4l-1.5 2-.4.4L235.7 400l.3-1.9Z"
                />
                <path
                    fill="#1a4e85"
                    d="M423.7 544.4v59.1c1-.2 2-.2 3-.2v-58.9c0-20.8-12.1-44.7-27-53.3L289 427.2l-1.6 2.6 110.8 64c14.1 8 25.5 30.8 25.5 50.6ZM321 542.4c-.8-.6-1.4-1.5-1.8-2.4 0 .1-.2.2-.4.2-3.1 1.8-6.9 1.4-11-.9-9-5.2-16.6-18.5-18.5-31.6h-1.9c-.3.2-.6.4-1 .5 2.1 13.8 10.2 28 19.9 33.6 2.5 1.6 5.4 2.4 8.3 2.5 2 0 4-.5 5.8-1.5l.6-.4ZM305.2 486.1l1.1.6c8.2 4.7 15.2 16.2 17.8 28.1l2.8-1.2c-2.9-12.5-10.4-24.5-19.1-29.5-1.1-.7-2.3-1.3-3.6-1.7.7.9 1 1.9 1 3v.7Z"
                />
                <path
                    fill="none"
                    stroke="#1a4e85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                    d="M895.2 272.4c0-20.3-11.8-43.6-26.3-52L501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1L17.9 277.7c-7.6 2.1-12.7 10.8-12.7 24.2v73.6c0 20.3 11.8 43.6 26.2 52l367.5 212.2c6.5 3.8 12.5 3.9 17.1 1l470.6-272.4c5.3-3.7 8.6-11.5 8.6-22.3v-73.6Z"
                />
                <path
                    fill="url(#harddrive_c)"
                    fill-rule="evenodd"
                    d="M612.4 342.5c-87.8 50.7-230.4 50.5-318.6-.4-88.2-50.9-88.6-133.3-.8-184 87.8-50.7 230.4-50.5 318.6.4 88.2 50.9 88.6 133.3.8 184Z"
                />
                <path
                    fill="#1a4e85"
                    d="M294.5 340.8c-42.3-24.4-65.6-56.8-65.6-91.1 0-34.1 23-66.1 64.9-90.3 1.8-1 3.6-2 5.5-3V153c-2.4 1.2-4.7 2.5-7 3.8-42.8 24.7-66.4 57.7-66.4 92.9 0 35.4 23.8 68.7 67.1 93.7 2 1.2 4.1 2.3 6.2 3.4v-3.4c-1.6-.9-3.1-1.7-4.7-2.6ZM612.4 157.2c-.8-.5-1.7-.9-2.5-1.4v3.4c.3.2.7.4 1 .6 42.3 24.4 65.6 56.8 65.6 91.1 0 34.1-23 66.1-64.9 90.3l.8 1.3-.8-1.3c-.6.3-1.2.7-1.8 1v3.4c1.1-.6 2.2-1.2 3.3-1.9 42.8-24.7 66.4-57.7 66.4-92.9 0-35.4-23.8-68.7-67.1-93.7Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M483.5 268.1c-16.9 9.8-44.5 9.7-61.5 0s-17.1-25.7-.2-35.5c16.9-9.8 44.5-9.7 61.5 0s17.1 25.7.2 35.5Z"
                />
                <path
                    fill="#fff"
                    stroke="#1a4e85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    d="M713.4 193.5c-2.2 0-32 1.3-49.3 3.7l-134.5 18.7c-2.6.4-4.6 2-4.6 3.6v7.9c0 1.6 1.9 3.2 4.5 3.6l134.3 18.3c17.3 2.4 47.1 3.6 49.3 3.6 23.4 0 42.5-13.4 42.6-29.8 0-16.4-18.9-29.7-42.3-29.6Z"
                />
            </svg>
        );
    }

    renderDark() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900.3 647.9"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="harddrive_b"
                        x1="794.5"
                        x2="818.3"
                        y1="-325.6"
                        y2="-284.3"
                        gradientTransform="translate(-165 689.2)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#ced4db" />
                        <stop offset="1" stop-color="#09264a" />
                    </linearGradient>
                    <linearGradient
                        id="harddrive_c"
                        x1="227.4"
                        x2="678"
                        y1="250.3"
                        y2="250.3"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#ced4db" />
                        <stop offset=".5" stop-color="#09264a" />
                        <stop offset="1" stop-color="#ced4db" />
                    </linearGradient>
                </defs>
                <path
                    fill="#09264a"
                    fill-rule="evenodd"
                    d="M869 220.4 501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1l-.4-.3-470 273 402 361 471-272-.6-.5c5.3-3.7 8.6-11.5 8.6-22.3v-73.6c0-20.4-11.7-43.6-26.2-52Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M887.1 241.1c-4.7-9-11.1-16.6-18.1-20.7L501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1l-.4-.3-470 273L36 299.4l371.2 223.4 479.9-281.7Z"
                />
                <path
                    fill="url(#harddrive_b)"
                    fill-rule="evenodd"
                    d="m416.2 541.8 477.9-280.5c-2.5-13.4-9.1-26.6-17.6-35L383.2 505.8l33 36Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M399 639.7c14.5 8.4 26.2-1.3 26.2-21.7v-73.6c0-20.3-11.8-43.6-26.2-52L31.5 280.2c-14.5-8.4-26.2 1.3-26.2 21.7v73.6c0 20.3 11.8 43.6 26.2 52L399 639.7Zm-39.4-124c10.9 6.3 19.7 23.7 19.7 39s-8.8 22.5-19.7 16.2-19.7-23.7-19.7-39 8.8-22.5 19.7-16.2Zm-52.5-30.3c10.9 6.3 19.7 23.7 19.7 39s-8.8 22.5-19.7 16.2-19.7-23.7-19.7-39 8.8-22.5 19.7-16.2Z"
                />
                <path
                    fill="#09264a"
                    d="M380.5 549.8c-1.3-10.4-5.5-20.3-12.1-28.4-.2.9-.4 1.8-.7 2.7l-.3.7c5.4 7.2 8.8 15.6 10 24.5l3.1.5ZM369.1 571.4c-2.6.6-5.6 0-8.8-1.8-10.4-6-18.9-22.9-18.9-37.7v-1.5l-2.6.5h-.4v.9c0 15.7 9.2 33.8 20.4 40.3 2.5 1.6 5.4 2.4 8.3 2.5l2-.2v-3ZM236 398.1c0-.4.2-.9.4-1.3L43.3 285.4l-1.5 2-.4.4L235.7 400l.3-1.9Z"
                />
                <path
                    fill="#09264a"
                    d="M423.7 544.4v59.1c1-.2 2-.2 3-.2v-58.9c0-20.8-12.1-44.7-27-53.3L289 427.2l-1.6 2.6 110.8 64c14.1 8 25.5 30.8 25.5 50.6ZM321 542.4c-.8-.6-1.4-1.5-1.8-2.4 0 .1-.2.2-.4.2-3.1 1.8-6.9 1.4-11-.9-9-5.2-16.6-18.5-18.5-31.6h-1.9c-.3.2-.6.4-1 .5 2.1 13.8 10.2 28 19.9 33.6 2.5 1.6 5.4 2.4 8.3 2.5 2 0 4-.5 5.8-1.5l.6-.4ZM305.2 486.1l1.1.6c8.2 4.7 15.2 16.2 17.8 28.1l2.8-1.2c-2.9-12.5-10.4-24.5-19.1-29.5-1.1-.7-2.3-1.3-3.6-1.7.7.9 1 1.9 1 3v.7Z"
                />
                <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                    d="M895.2 272.4c0-20.3-11.8-43.6-26.3-52L501.5 8.2c-6.4-3.7-12.3-3.9-16.9-1.1L17.9 277.7c-7.6 2.1-12.7 10.8-12.7 24.2v73.6c0 20.3 11.8 43.6 26.2 52l367.5 212.2c6.5 3.8 12.5 3.9 17.1 1l470.6-272.4c5.3-3.7 8.6-11.5 8.6-22.3v-73.6Z"
                />
                <path
                    fill="url(#harddrive_c)"
                    fill-rule="evenodd"
                    d="M612.4 342.5c-87.8 50.7-230.4 50.5-318.6-.4-88.2-50.9-88.6-133.3-.8-184 87.8-50.7 230.4-50.5 318.6.4 88.2 50.9 88.6 133.3.8 184Z"
                />
                <path
                    fill="#09264a"
                    d="M294.5 340.8c-42.3-24.4-65.6-56.8-65.6-91.1 0-34.1 23-66.1 64.9-90.3 1.8-1 3.6-2 5.5-3V153c-2.4 1.2-4.7 2.5-7 3.8-42.8 24.7-66.4 57.7-66.4 92.9 0 35.4 23.8 68.7 67.1 93.7 2 1.2 4.1 2.3 6.2 3.4v-3.4c-1.6-.9-3.1-1.7-4.7-2.6ZM612.4 157.2c-.8-.5-1.7-.9-2.5-1.4v3.4c.3.2.7.4 1 .6 42.3 24.4 65.6 56.8 65.6 91.1 0 34.1-23 66.1-64.9 90.3l.8 1.3-.8-1.3c-.6.3-1.2.7-1.8 1v3.4c1.1-.6 2.2-1.2 3.3-1.9 42.8-24.7 66.4-57.7 66.4-92.9 0-35.4-23.8-68.7-67.1-93.7Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M483.5 268.1c-16.9 9.8-44.5 9.7-61.5 0s-17.1-25.7-.2-35.5c16.9-9.8 44.5-9.7 61.5 0s17.1 25.7.2 35.5Z"
                />
                <path
                    fill="#ced4db"
                    stroke="#09264a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    d="M713.4 193.5c-2.2 0-32 1.3-49.3 3.7l-134.5 18.7c-2.6.4-4.6 2-4.6 3.6v7.9c0 1.6 1.9 3.2 4.5 3.6l134.3 18.3c17.3 2.4 47.1 3.6 49.3 3.6 23.4 0 42.5-13.4 42.6-29.8 0-16.4-18.9-29.7-42.3-29.6Z"
                />
            </svg>
        );
    }
}
