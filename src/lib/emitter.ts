export default class Emitter {
    static on = (name: string, callback: (event: any) => void) =>
        window.addEventListener(name, callback, false);

    static off = (name: string, callback: (event: any) => void) =>
        window.removeEventListener(name, callback, false);

    static emit = (name: string, data: any) =>
        window.dispatchEvent(new CustomEvent(name, { detail: data }));
}
