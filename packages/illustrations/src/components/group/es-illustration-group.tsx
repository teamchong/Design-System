import { Component, h, Host } from '@stencil/core';
import { theme } from '@eventstore-ui/theme';

/**
 * Displays Group illustration.
 * @part illustration - The root svg of the illustration.
 */
@Component({
    tag: 'es-illustration-group',
    styleUrl: 'group.css',
    shadow: true,
})
export class EsIllustrationGroup {
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
                viewBox="0 0 865.6 811.2"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="group_b"
                        x1="825.1"
                        x2="528.9"
                        y1="144.8"
                        y2="534.7"
                        gradientTransform="matrix(1 0 0 -1 0 812)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#bbdefb" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                    <linearGradient
                        id="group_c"
                        x1="749"
                        x2="559.3"
                        y1="516.8"
                        y2="766.5"
                        gradientTransform="matrix(1 0 0 -1 0 812)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#bbdefb" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                    <linearGradient
                        id="group_d"
                        x1="487.3"
                        x2="166.1"
                        y1="59.6"
                        y2="482.4"
                        gradientTransform="matrix(1 0 0 -1 0 812)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#bbdefb" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                    <linearGradient
                        id="group_e"
                        x1="404.6"
                        x2="198.9"
                        y1="462.8"
                        y2="733.6"
                        gradientTransform="matrix(1 0 0 -1 0 812)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#bbdefb" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#group_b)"
                    fill-rule="evenodd"
                    d="M750.2 366.3c-33.5-19.3-41.8-9.3-80.3-31.5s-46.8-41.9-80.3-61.2c-31.7-18.3-62.6-20.9-83.8-4.1l-91.3 51.1 62.9 74.8v6.8c0 32.9 21.6 72 48.1 87.3l60.2 34.8L746.9 716l97.9-55.7c10.7-4.7 17.5-17.3 17.5-35.8V569c.2-29.6-7-61.2-19.5-91.1-20.8-50-56.2-90.6-92.6-111.6Z"
                />
                <path
                    fill="url(#group_c)"
                    fill-rule="evenodd"
                    d="M670 17.4c-31.9-18.4-60.7-18.6-81.2-4l-94.2 53.2 152.8 291.6 99.7-56.4c21.6-12.8 35.2-40.9 35.2-80.7 0-76.7-50.2-167.9-112.3-203.7Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M571.1 351.5c62.1 35.8 112.3 2.7 112.3-74S633.2 109.6 571.1 73.8c-62.1-35.8-112.3-2.7-112.3 74S509 315.6 571.1 351.5Zm80.3 71.1c-33.5-19.3-41.8-9.3-80.3-31.5s-46.8-41.9-80.3-61.2c-36.4-21-71.8-21.4-92.6 4.7-12.4 15.6-19.7 38.9-19.7 68.4v55.5c0 32.9 21.6 72 48.1 87.3l288.8 166.7c26.6 15.3 48.1 1.1 48.1-31.7v-55.5c0-29.5-7.2-61.1-19.7-91.1-20.6-50-56-90.5-92.4-111.6Z"
                />
                <path
                    fill="#1a4e85"
                    d="m488.4 330.3 1.1-1.5.5-1c-14.8-8.3-29.1-13.1-42.2-14.3-.2.7-.3 1.5-.4 2.2v.8c12.7 1.1 26.6 5.7 41 13.8ZM614 409.7c10.7 2.6 20.8 5 36.7 14.2l5.4 3.3 1.7-2.5-5.5-3.4c-16.3-9.4-26.6-11.9-37.5-14.5s-23.1-5.6-42.8-16.9c-14-8-27-17.7-38.7-28.8l-2.4 1.9c10.4 9.4 21.8 19.2 39.6 29.5 20 11.6 31.9 14.4 43.5 17.2ZM706.2 705.5 427.5 544.6c-26.1-15.1-47.4-53.7-47.4-86v-55.5c0-28.2 6.7-51.5 19.3-67.4 6.4-8.1 15.1-14.1 25-17.1.4-1.1.7-2.2.9-3.4-11.2 3-21.1 9.6-28.3 18.7-13.1 16.4-20 40.4-20 69.3v55.5c0 33.3 21.9 73 48.9 88.6l279.6 161.4c0-1.1.2-2.2.7-3.2ZM762.1 625.3v30.9l3-.2v-30.7c0-28.8-6.8-60.5-19.8-91.6-9.8-23.4-22.9-45.3-38.9-65l-2.4 1.8c15.9 19.5 28.9 41.1 38.6 64.3 12.8 30.8 19.5 62.1 19.5 90.5ZM724.4 717.8c-.6-.9-.8-1.9-.7-3l-1-.4c-2.7 0-5.4-.3-8-.6 3.2 1.9 6.6 3.4 10.1 4.5l-.5-.5ZM494.7 68.4c.8-1.6 1.7-3.2 2.6-4.8l-3.6 1.9c-23.1 13.4-36.4 43.3-36.4 82.2s13.8 84.4 35.8 122.6c.6-.8 1.3-1.6 2.1-2.3-21.5-37.6-34.9-80.9-34.9-120.3 0-37.5 12.5-66.3 34.4-79.3ZM571.9 72.4c-16-9.3-31.7-14.2-46.1-14.6 0 .2 0 .5-.2.7l-.3 2.3c14 .3 29.4 5.1 45.1 14.2 21.9 12.6 42.4 32.3 59.6 55.8l3-1c-17.7-24.1-38.7-44.4-61.1-57.4ZM663.5 183.3l-2.6 1.4c13.2 30.3 21.1 62.7 21.1 92.8s-12.7 66.8-34.9 79.7c-20.4 11.8-47.1 9.3-75.2-6.9-15.6-9-30.5-21.6-44-36.5-.7.7-1.4 1.4-2.2 2 13.7 15.2 28.8 28 44.6 37.1 16.9 9.7 33.3 14.7 48.3 14.7 10.5.1 20.8-2.5 29.9-7.7 23.1-13.4 36.4-43.3 36.4-82.3 0-30.7-7.9-63.5-21.4-94.3Z"
                />
                <path
                    fill="url(#group_d)"
                    fill-rule="evenodd"
                    d="M406 426.1c-36.3-21-45.3-10-87.1-34.1s-50.8-45.4-87.1-66.4c-34.4-19.8-67.9-22.7-90.8-4.4l-99 55.4 68.2 81.1v7.4c0 35.6 23.4 78 52.2 94.6l65.3 37.7 174.8 207.9 106.2-60.4c11.6-5.1 19-18.8 19-38.8v-60.2c0-32-7.9-66.2-21.4-98.8-22.5-54.3-60.9-98.2-100.3-121Z"
                />
                <path
                    fill="url(#group_e)"
                    fill-rule="evenodd"
                    d="M318.9 48c-34.6-20-65.8-20.2-88-4.3l-102.1 57.6 165.6 316.1 108.1-61.1c23.5-13.9 38.2-44.4 38.2-87.5 0-83.2-54.5-182-121.8-220.8Z"
                />
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M211.7 410.1c67.3 38.8 121.8 2.9 121.8-80.3S279 147.8 211.7 109c-67.3-38.8-121.8-2.9-121.8 80.3s54.5 182 121.8 220.8Zm87.1 77.2c-36.3-21-45.3-10-87.1-34.1s-50.8-45.4-87.1-66.4c-39.5-22.8-77.8-23.2-100.3 5.1C10.8 408.9 3 434 3 466v60.2c0 35.6 23.4 78 52.2 94.6l313.1 180.7c28.8 16.6 52.2 1.2 52.2-34.4v-60.2c0-32-7.8-66.2-21.3-98.7-22.5-54.2-60.9-98.1-100.4-120.9Z"
                />
                <path
                    fill="#1a4e85"
                    d="m327.6 366.9 2.8 1c3.1-12.4 4.6-25.2 4.5-38 0-47.1-17.5-99.2-44.8-142.8l-2.2 2c26.9 43 44 94.4 44 140.8.2 12.5-1.3 24.9-4.3 37ZM293.1 416.9c-22 12.1-50.6 9.3-80.6-8-23.7-13.7-45.7-34.8-64.4-60.2h-.4l-.5.2-1.9 1c19 25.9 41.5 47.6 65.6 61.5 18.3 10.5 36.1 15.9 52.3 15.9 10.7.1 21.3-2.4 30.7-7.5-.1-1-.4-2-.8-2.9ZM131.1 322.8c-24.3-41.4-39.6-89.7-39.6-133.6s13.8-72.6 37.9-86.5l1.9-1c-.7-.7-1.3-1.5-1.8-2.4l-1.6.9c-25 14.5-39.4 46.9-39.4 89.1s15.5 93.1 40 135l2.6-1.5ZM209.5 109.5c.6-.8 1.3-1.6 2-2.3-16.6-9.4-32.8-14.5-47.7-15.2l.6 3c14.1.8 29.4 5.7 45.1 14.5ZM156.3 411.9l2.3-2c-9.4-8.3-19.2-16.4-33.2-24.5-16.9-9.8-33.3-15.3-48.1-16.5v3c14.4 1.3 30.2 6.6 46.6 16.1 11.6 6.8 22.5 14.8 32.4 23.9ZM258.2 473.2c11.6 2.8 22.5 5.4 39.8 15.4 36.8 21.3 70.6 59.7 92.7 104.7l3.1-.6c-22.3-45.8-56.7-85-94.2-106.7-17.7-10.2-28.9-12.9-40.6-15.7s-25-6-46.4-18.4c-8.9-5-17.4-10.8-25.4-17.1l-1.5 2.3v.3c8.1 6.3 16.6 12 25.4 17.1 21.7 12.5 34.6 15.6 47.1 18.7ZM383.9 806.1c-5.3-1.1-10.3-3-14.9-5.8L55.9 619.6c-28.4-16.4-51.4-58.2-51.4-93.3v-60.2c0-30.6 7.3-55.9 21-73.2 3.6-4.5 7.9-8.5 12.7-11.8-.6-.9-.9-1.9-1-3-5.3 3.6-10.1 7.9-14.1 12.9-14.2 17.8-21.6 43.8-21.6 75.1v60.2c0 36.1 23.7 79.1 52.9 95.9l313.1 180.7c4.4 2.6 9.2 4.6 14.2 5.8.7-.9 1.4-1.8 2.2-2.6ZM419 767.2c0 5-.5 10-1.6 14.9l2.9.5c1.2-5 1.7-10.2 1.7-15.4V707c0-8-.5-16-1.4-23.9l-2.9.7c.9 7.7 1.3 15.4 1.3 23.2v60.2Z"
                />
                <path
                    fill="#1a4e85"
                    d="M522.2 605c2.6 13.5 3.9 27.2 4 40.9v60.2c0 18.7-6.6 32.3-18.1 37.4l-102.3 58.2h-.2c-9.5 7.2-22.5 6.6-36.6-1.5L55.9 619.6c-28.4-16.4-51.4-58.2-51.4-93.3v-60.2c0-30.6 7.3-55.9 21-73.2 4.7-6 10.6-11 17.4-14.6l1.6-.9-.2-.2 89.3-50-.8-1.3c-26.3-43.6-41.3-93.3-41.3-136.5s13.9-72.7 38.1-86.6l1.3-.7v-.2l100.9-57h.1c22.7-16.2 53.4-14.7 86.4 4.4 66.7 38.5 121 137 121 219.5 0 9.5-.7 18.9-2.3 28.3 1-.7 2.1-1.1 3.3-1.3 1.4-8.9 2.1-18 2.1-27 0-83.5-55-183.2-122.5-222.1-34.1-19.7-65.9-21.2-89.6-4.3l-103.4 58.2v.2c-24.4 14.7-38.4 46.9-38.4 88.5s14.9 93 40.9 136.7l-89.7 50.2.2.2c-6.4 3.8-12.1 8.7-16.7 14.5C9 408.7 1.6 434.7 1.6 466v60.2c0 36.1 23.7 79.1 52.9 95.9l313.1 180.7c7.9 4.6 15.7 6.9 22.8 6.9 6.1.1 12.1-1.8 17-5.5l102-58c12.6-5.6 19.8-20.3 19.8-40.2v-60.2c0-13.9-1.4-27.8-4-41.5l-3 .7Z"
                />
                <path
                    fill="#1a4e85"
                    d="m514.5 574 2.7-1.3c-2.7-8.7-5.9-17.4-9.5-26.1-21.6-52.2-59.4-97.7-101-121.7l-.7-.4c-5.2-3-10.6-5.7-16.2-8-.2 1-.4 2-.7 3 5.5 2.4 10.9 5.1 16.1 8.1l.4.2c40.9 23.8 78 68.6 99.3 120 3.7 8.7 6.8 17.4 9.6 26.2ZM366.1 409.1c-9.6-2.3-19.5-4.7-33.6-11.5l36.1-20.4a5.1 5.1 0 0 1-1.4-2.6l-41.1 23.2 2.5 1.3c15.7 8 26.4 10.5 36.8 13l6.7 1.7c.4-.9.9-1.8 1.5-2.7-2.6-.8-5-1.4-7.5-2Z"
                />
                <path
                    fill="none"
                    stroke="#1a4e85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    d="M842.8 477.9c-20.8-50-56.2-90.6-92.6-111.6h0c-30.5-17.6-40.1-10.8-70.7-26.3l67.5-38.2h0c21.7-12.8 35.2-40.9 35.2-80.7 0-76.7-50.2-167.9-112.3-203.7-31.9-18.4-60.7-18.6-81.2-4l-94.2 53.2v.2c-22 12.6-35.8 40.8-35.8 81.1s14.8 87.6 38.3 126.6l-61.3 34.3c3.3-11.7 5-25.1 5-40 0-83.2-54.5-182-121.8-220.8-34.6-20-65.8-20.2-88-4.3l-102.1 57.6v.2c-23.9 13.7-38.9 44.3-38.9 87.9s16.1 95 41.5 137.2l-89.5 50.1.2.2c-6.9 3.7-13 8.8-17.8 15C10.8 408.9 3 434 3 466v60.2c0 35.6 23.4 78 52.2 94.6l313.1 180.7c15.1 8.7 28.7 8.6 38.3 1.4l102-58c11.6-5.1 19-18.8 19-38.8v-60.2c0-14.9-1.6-29.8-4.6-44.4l192.6 111.1c13.9 8 26.5 7.9 35.3 1.3l94.2-53.6c10.7-4.7 17.5-17.3 17.5-35.8V569c0-29.6-7.3-61.2-19.8-91.1Zm-513.5-80.2 53.4-30.2c-2.8 11.6-4.2 23.5-4.1 35.5v10.9c-15.3-4.6-27.3-5.1-49.3-16.2Z"
                />
            </svg>
        );
    }

    renderDark() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 865.6 811.2"
                aria-hidden="true"
                width="100%"
                height="100%"
                focusable="false"
                role="img"
                part="illustration"
            >
                <defs>
                    <linearGradient
                        id="group_b"
                        x1="825.1"
                        x2="528.9"
                        y1="144.8"
                        y2="534.7"
                        gradientTransform="matrix(1 0 0 -1 0 812)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#09264a" />
                        <stop offset="1" stop-color="#ced4db" />
                    </linearGradient>
                    <linearGradient
                        id="group_c"
                        x1="749"
                        x2="559.3"
                        y1="516.8"
                        y2="766.5"
                        href="#group_b"
                    />
                    <linearGradient
                        id="group_d"
                        x1="487.3"
                        x2="166.1"
                        y1="59.6"
                        y2="482.4"
                        href="#group_b"
                    />
                    <linearGradient
                        id="group_e"
                        x1="404.6"
                        x2="198.9"
                        y1="462.8"
                        y2="733.6"
                        href="#group_b"
                    />
                </defs>
                <path
                    fill="url(#group_b)"
                    fill-rule="evenodd"
                    d="M750.2 366.3c-33.5-19.3-41.8-9.3-80.3-31.5s-46.8-41.9-80.3-61.2c-31.7-18.3-62.6-20.9-83.8-4.1l-91.3 51.1 62.9 74.8v6.8c0 32.9 21.6 72 48.1 87.3l60.2 34.8L746.9 716l97.9-55.7c10.7-4.7 17.5-17.3 17.5-35.8V569c.2-29.6-7-61.2-19.5-91.1-20.8-50-56.2-90.6-92.6-111.6Z"
                />
                <path
                    fill="url(#group_c)"
                    fill-rule="evenodd"
                    d="M670 17.4c-31.9-18.4-60.7-18.6-81.2-4l-94.2 53.2 152.8 291.6 99.7-56.4c21.6-12.8 35.2-40.9 35.2-80.7 0-76.7-50.2-167.9-112.3-203.7Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M571.1 351.5c62.1 35.8 112.3 2.7 112.3-74S633.2 109.6 571.1 73.8c-62.1-35.8-112.3-2.7-112.3 74S509 315.6 571.1 351.5Zm80.3 71.1c-33.5-19.3-41.8-9.3-80.3-31.5s-46.8-41.9-80.3-61.2c-36.4-21-71.8-21.4-92.6 4.7-12.4 15.6-19.7 38.9-19.7 68.4v55.5c0 32.9 21.6 72 48.1 87.3l288.8 166.7c26.6 15.3 48.1 1.1 48.1-31.7v-55.5c0-29.5-7.2-61.1-19.7-91.1-20.6-50-56-90.5-92.4-111.6Z"
                />
                <path
                    fill="#09264a"
                    d="m488.4 330.3 1.1-1.5.5-1c-14.8-8.3-29.1-13.1-42.2-14.3-.2.7-.3 1.5-.4 2.2v.8c12.7 1.1 26.6 5.7 41 13.8ZM614 409.7c10.7 2.6 20.8 5 36.7 14.2l5.4 3.3 1.7-2.5-5.5-3.4c-16.3-9.4-26.6-11.9-37.5-14.5s-23.1-5.6-42.8-16.9c-14-8-27-17.7-38.7-28.8l-2.4 1.9c10.4 9.4 21.8 19.2 39.6 29.5 20 11.6 31.9 14.4 43.5 17.2Z"
                />
                <path
                    fill="#1a4e85"
                    d="M706.2 705.5 427.5 544.6c-26.1-15.1-47.4-53.7-47.4-86v-55.5c0-28.2 6.7-51.5 19.3-67.4 6.4-8.1 15.1-14.1 25-17.1.4-1.1.7-2.2.9-3.4-11.2 3-21.1 9.6-28.3 18.7-13.1 16.4-20 40.4-20 69.3v55.5c0 33.3 21.9 73 48.9 88.6l279.6 161.4c0-1.1.2-2.2.7-3.2Z"
                />
                <path
                    fill="#09264a"
                    d="M762.1 625.3v30.9l3-.2v-30.7c0-28.8-6.8-60.5-19.8-91.6-9.8-23.4-22.9-45.3-38.9-65l-2.4 1.8c15.9 19.5 28.9 41.1 38.6 64.3 12.8 30.8 19.5 62.1 19.5 90.5Z"
                />
                <path
                    fill="#1a4e85"
                    d="M724.4 717.8c-.6-.9-.8-1.9-.7-3l-1-.4c-2.7 0-5.4-.3-8-.6 3.2 1.9 6.6 3.4 10.1 4.5l-.5-.5ZM494.7 68.4c.8-1.6 1.7-3.2 2.6-4.8l-3.6 1.9c-23.1 13.4-36.4 43.3-36.4 82.2s13.8 84.4 35.8 122.6c.6-.8 1.3-1.6 2.1-2.3-21.5-37.6-34.9-80.9-34.9-120.3 0-37.5 12.5-66.3 34.4-79.3Z"
                />
                <path
                    fill="#09264a"
                    d="M571.9 72.4c-16-9.3-31.7-14.2-46.1-14.6 0 .2 0 .5-.2.7l-.3 2.3c14 .3 29.4 5.1 45.1 14.2 21.9 12.6 42.4 32.3 59.6 55.8l3-1c-17.7-24.1-38.7-44.4-61.1-57.4ZM663.5 183.3l-2.6 1.4c13.2 30.3 21.1 62.7 21.1 92.8s-12.7 66.8-34.9 79.7c-20.4 11.8-47.1 9.3-75.2-6.9-15.6-9-30.5-21.6-44-36.5-.7.7-1.4 1.4-2.2 2 13.7 15.2 28.8 28 44.6 37.1 16.9 9.7 33.3 14.7 48.3 14.7 10.5.1 20.8-2.5 29.9-7.7 23.1-13.4 36.4-43.3 36.4-82.3 0-30.7-7.9-63.5-21.4-94.3Z"
                />
                <path
                    fill="url(#group_d)"
                    fill-rule="evenodd"
                    d="M406 426.1c-36.3-21-45.3-10-87.1-34.1s-50.8-45.4-87.1-66.4c-34.4-19.8-67.9-22.7-90.8-4.4l-99 55.4 68.2 81.1v7.4c0 35.6 23.4 78 52.2 94.6l65.3 37.7 174.8 207.9 106.2-60.4c11.6-5.1 19-18.8 19-38.8v-60.2c0-32-7.9-66.2-21.4-98.8-22.5-54.3-60.9-98.2-100.3-121Z"
                />
                <path
                    fill="url(#group_e)"
                    fill-rule="evenodd"
                    d="M318.9 48c-34.6-20-65.8-20.2-88-4.3l-102.1 57.6 165.6 316.1 108.1-61.1c23.5-13.9 38.2-44.4 38.2-87.5 0-83.2-54.5-182-121.8-220.8Z"
                />
                <path
                    fill="#ced4db"
                    fill-rule="evenodd"
                    d="M211.7 410.1c67.3 38.8 121.8 2.9 121.8-80.3S279 147.8 211.7 109c-67.3-38.8-121.8-2.9-121.8 80.3s54.5 182 121.8 220.8Zm87.1 77.2c-36.3-21-45.3-10-87.1-34.1s-50.8-45.4-87.1-66.4c-39.5-22.8-77.8-23.2-100.3 5.1C10.8 408.9 3 434 3 466v60.2c0 35.6 23.4 78 52.2 94.6l313.1 180.7c28.8 16.6 52.2 1.2 52.2-34.4v-60.2c0-32-7.8-66.2-21.3-98.7-22.5-54.2-60.9-98.1-100.4-120.9Z"
                />
                <path
                    fill="#09264a"
                    d="m327.6 366.9 2.8 1c3.1-12.4 4.6-25.2 4.5-38 0-47.1-17.5-99.2-44.8-142.8l-2.2 2c26.9 43 44 94.4 44 140.8.2 12.5-1.3 24.9-4.3 37ZM293.1 416.9c-22 12.1-50.6 9.3-80.6-8-23.7-13.7-45.7-34.8-64.4-60.2h-.4l-.5.2-1.9 1c19 25.9 41.5 47.6 65.6 61.5 18.3 10.5 36.1 15.9 52.3 15.9 10.7.1 21.3-2.4 30.7-7.5-.1-1-.4-2-.8-2.9Z"
                />
                <path
                    fill="#1a4e85"
                    d="M131.1 322.8c-24.3-41.4-39.6-89.7-39.6-133.6s13.8-72.6 37.9-86.5l1.9-1c-.7-.7-1.3-1.5-1.8-2.4l-1.6.9c-25 14.5-39.4 46.9-39.4 89.1s15.5 93.1 40 135l2.6-1.5Z"
                />
                <path
                    fill="#09264a"
                    d="M209.5 109.5c.6-.8 1.3-1.6 2-2.3-16.6-9.4-32.8-14.5-47.7-15.2l.6 3c14.1.8 29.4 5.7 45.1 14.5ZM156.3 411.9l2.3-2c-9.4-8.3-19.2-16.4-33.2-24.5-16.9-9.8-33.3-15.3-48.1-16.5v3c14.4 1.3 30.2 6.6 46.6 16.1 11.6 6.8 22.5 14.8 32.4 23.9ZM258.2 473.2c11.6 2.8 22.5 5.4 39.8 15.4 36.8 21.3 70.6 59.7 92.7 104.7l3.1-.6c-22.3-45.8-56.7-85-94.2-106.7-17.7-10.2-28.9-12.9-40.6-15.7s-25-6-46.4-18.4c-8.9-5-17.4-10.8-25.4-17.1l-1.5 2.3v.3c8.1 6.3 16.6 12 25.4 17.1 21.7 12.5 34.6 15.6 47.1 18.7Z"
                />
                <path
                    fill="#1a4e85"
                    d="M383.9 806.1c-5.3-1.1-10.3-3-14.9-5.8L55.9 619.6c-28.4-16.4-51.4-58.2-51.4-93.3v-60.2c0-30.6 7.3-55.9 21-73.2 3.6-4.5 7.9-8.5 12.7-11.8-.6-.9-.9-1.9-1-3-5.3 3.6-10.1 7.9-14.1 12.9-14.2 17.8-21.6 43.8-21.6 75.1v60.2c0 36.1 23.7 79.1 52.9 95.9l313.1 180.7c4.4 2.6 9.2 4.6 14.2 5.8.7-.9 1.4-1.8 2.2-2.6Z"
                />
                <path
                    fill="#09264a"
                    d="M419 767.2c0 5-.5 10-1.6 14.9l2.9.5c1.2-5 1.7-10.2 1.7-15.4V707c0-8-.5-16-1.4-23.9l-2.9.7c.9 7.7 1.3 15.4 1.3 23.2v60.2Z"
                />
                <path
                    fill="#1a4e85"
                    d="M522.2 605c2.6 13.5 3.9 27.2 4 40.9v60.2c0 18.7-6.6 32.3-18.1 37.4l-102.3 58.2h-.2c-9.5 7.2-22.5 6.6-36.6-1.5L55.9 619.6c-28.4-16.4-51.4-58.2-51.4-93.3v-60.2c0-30.6 7.3-55.9 21-73.2 4.7-6 10.6-11 17.4-14.6l1.6-.9-.2-.2 89.3-50-.8-1.3c-26.3-43.6-41.3-93.3-41.3-136.5s13.9-72.7 38.1-86.6l1.3-.7v-.2l100.9-57h.1c22.7-16.2 53.4-14.7 86.4 4.4 66.7 38.5 121 137 121 219.5 0 9.5-.7 18.9-2.3 28.3 1-.7 2.1-1.1 3.3-1.3 1.4-8.9 2.1-18 2.1-27 0-83.5-55-183.2-122.5-222.1-34.1-19.7-65.9-21.2-89.6-4.3l-103.4 58.2v.2c-24.4 14.7-38.4 46.9-38.4 88.5s14.9 93 40.9 136.7l-89.7 50.2.2.2c-6.4 3.8-12.1 8.7-16.7 14.5C9 408.7 1.6 434.7 1.6 466v60.2c0 36.1 23.7 79.1 52.9 95.9l313.1 180.7c7.9 4.6 15.7 6.9 22.8 6.9 6.1.1 12.1-1.8 17-5.5l102-58c12.6-5.6 19.8-20.3 19.8-40.2v-60.2c0-13.9-1.4-27.8-4-41.5l-3 .7Z"
                />
                <path
                    fill="#09264a"
                    d="m514.5 574 2.7-1.3c-2.7-8.7-5.9-17.4-9.5-26.1-21.6-52.2-59.4-97.7-101-121.7l-.7-.4c-5.2-3-10.6-5.7-16.2-8-.2 1-.4 2-.7 3 5.5 2.4 10.9 5.1 16.1 8.1l.4.2c40.9 23.8 78 68.6 99.3 120 3.7 8.7 6.8 17.4 9.6 26.2Z"
                />
                <path
                    fill="#1a4e85"
                    d="M366.1 409.1c-9.6-2.3-19.5-4.7-33.6-11.5l36.1-20.4a5.1 5.1 0 0 1-1.4-2.6l-41.1 23.2 2.5 1.3c15.7 8 26.4 10.5 36.8 13l6.7 1.7c.4-.9.9-1.8 1.5-2.7-2.6-.8-5-1.4-7.5-2Z"
                />
                <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    d="M842.8 477.9c-20.8-50-56.2-90.6-92.6-111.6h0c-30.5-17.6-40.1-10.8-70.7-26.3l67.5-38.2h0c21.7-12.8 35.2-40.9 35.2-80.7 0-76.7-50.2-167.9-112.3-203.7-31.9-18.4-60.7-18.6-81.2-4l-94.2 53.2v.2c-22 12.6-35.8 40.8-35.8 81.1s14.8 87.6 38.3 126.6l-61.3 34.3c3.3-11.7 5-25.1 5-40 0-83.2-54.5-182-121.8-220.8-34.6-20-65.8-20.2-88-4.3l-102.1 57.6v.2c-23.9 13.7-38.9 44.3-38.9 87.9s16.1 95 41.5 137.2l-89.5 50.1.2.2c-6.9 3.7-13 8.8-17.8 15C10.8 408.9 3 434 3 466v60.2c0 35.6 23.4 78 52.2 94.6l313.1 180.7c15.1 8.7 28.7 8.6 38.3 1.4l102-58c11.6-5.1 19-18.8 19-38.8v-60.2c0-14.9-1.6-29.8-4.6-44.4l192.6 111.1c13.9 8 26.5 7.9 35.3 1.3l94.2-53.6c10.7-4.7 17.5-17.3 17.5-35.8V569c0-29.6-7.3-61.2-19.8-91.1Zm-513.5-80.2 53.4-30.2c-2.8 11.6-4.2 23.5-4.1 35.5v10.9c-15.3-4.6-27.3-5.1-49.3-16.2Z"
                />
            </svg>
        );
    }
}
