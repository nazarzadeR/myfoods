import { useEffect, useState } from "react";

import { on, off } from "@/util";
import { useDebouncedCallback } from "use-debounce";

const useScroll = (ref: React.MutableRefObject<any>) => {
    const container = ref?.current as HTMLElement;
    const [scrollY, setScrollY] = useState(0);
    const callback = useDebouncedCallback(() => {
        setScrollY(container.scrollTop);
    }, 400);

    useEffect(() => {
        if (container) on(container, "scroll", callback);

        return () => {
            if (container) off(container, "scroll", callback);
        };
    }, [container]);

    return {
        scrollY,
    };
};

export default useScroll;
