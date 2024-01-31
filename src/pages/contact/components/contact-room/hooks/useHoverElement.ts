import { useEffect, useState } from "react";

export default function useHoverElement() {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "default";
    }, [hovered]);

    return {
        hovered,
        onEnter: () => setHovered(true),
        onExit: () => setHovered(false),
    };
}
