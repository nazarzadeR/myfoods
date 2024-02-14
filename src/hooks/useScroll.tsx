import { useEffect, useState } from "react";

import { on, off } from "@/util";
import { useDebouncedCallback } from "use-debounce";

export default function useScroll(ref: React.RefObject<HTMLElement>) {
    const container = ref?.current;
    const [scrollY, setScrollY] = useState(0);
    const callback = useDebouncedCallback(() => {
        if (container) setScrollY(container.scrollTop);
    }, 500);

    useEffect(() => {
        if (container) on(container, "scroll", callback);

        return () => {
            if (container) off(container, "scroll", callback);
        };
    }, [container]);

    return {
        scrollY,
    };
}
