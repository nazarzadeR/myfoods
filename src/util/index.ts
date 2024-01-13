import _ from "lodash";
import type * as yup from "yup";

export const pass = () => null;
export const hasBrowser = !_.isUndefined(window);
export const hasDocument = !_.isUndefined(document);
export const hasNavigator = !_.isUndefined(navigator);
export const hasLocation = !_.isUndefined(window.location);

export async function wait(millisecond: number) {
    await new Promise((resolve) => setTimeout(resolve, millisecond))
}

export function random(max = 1, floatingFunc: 'ceil' | 'floor' = 'ceil') {
    return Math[floatingFunc](Math.random() * max)
}

export function randomFromArr<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return

    return arr[random(arr.length, 'floor')]
}

export function detectOSInfo() {
    if (!hasNavigator) return;

    const OSVariantsOfSystems = {
        apple: ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        freeBSD: ["FreeBSD", "FreeBSD i386", "FreeBSD amd64"],
        windows: ["OS/2", "Pocket PC", "Windows", "Win16", "Win32", "WinCE"],
        linux: [
            "Linux",
            "Linux aarch64",
            "Linux armv5tejl",
            "Linux armv6l",
            "Linux armv7l",
            "Linux armv8l",
            "Linux i686",
            "Linux i686 on x86_64",
            "Linux i686 X11",
            "Linux MSM8960_v3.2.1.1_N_R069_Rev:18",
            "Linux ppc64",
            "Linux x86_64",
            "Linux x86_64 X11",
        ],
    };

    const os = navigator?.platform;
    const osInfo = {
        version: os,
        isMac: _.some(OSVariantsOfSystems.apple, (k) => k === os),
        isLinux: _.some(OSVariantsOfSystems.linux, (k) => k === os),
        isWindows: _.some(OSVariantsOfSystems.windows, (k) => k === os),
        isFreeBSD: _.some(OSVariantsOfSystems.freeBSD, (k) => k === os),
    };

    return os && osInfo;
}

export function detectMobileDevice() {
    if (!hasNavigator) return false;

    const mobileDeviceKeywords = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ];

    return mobileDeviceKeywords.some((keywords) =>
        navigator.userAgent.match(keywords),
    );
}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T,
    ...args:
        | Parameters<T["addEventListener"]>
        | [string, (...arg: readonly any[]) => void | null, ...any]
): void {
    if (obj && "addEventListener" in obj)
        obj.addEventListener(
            ...(args as Parameters<HTMLElement["addEventListener"]>),
        );
}

export function off<T extends Window | HTMLElement | Document | EventTarget>(
    obj: T,
    ...args:
        | Parameters<T["removeEventListener"]>
        | [string, (...arg: readonly any[]) => void | null, ...any]
): void {
    if (obj && "removeEventListener" in obj)
        obj.removeEventListener(
            ...(args as Parameters<HTMLElement["removeEventListener"]>),
        );
}

export function mergeSchema(...schemas: yup.AnyObject[]) {
    const [first, ...rest] = schemas;

    return rest.reduce(
        (mergedSchema, schema) => mergedSchema.concat(schema),
        first,
    );
}
