type TScrollPos = "top" | "bottom";

export function scrollTo(element: HTMLElement, pos: TScrollPos = "top") {
    const top = pos === "top" ? 0 : element.scrollHeight;

    element.scroll({
        top,
        behavior: "smooth",
    });
}
