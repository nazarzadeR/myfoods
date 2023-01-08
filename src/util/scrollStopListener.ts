export const scrollStopListener = (
    scope: Element,
    timeout: number,
    callback: () => void
) => {
    let timer: any = null;
    const onScroll = () => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(callback, timeout);
    };

    scope.addEventListener("scroll", onScroll);

    return () => scope.removeEventListener("scroll", onScroll);
};
