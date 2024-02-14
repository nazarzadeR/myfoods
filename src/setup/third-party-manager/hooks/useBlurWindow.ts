import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { on, off, hasBrowser } from "@/util";

export default function useBlurWindow() {
    const [isBlur, setBlur] = useState(false);

    const handleBlur = useDebouncedCallback(() => {
        setBlur(() => true);
    }, 500);

    const handleFocus = useDebouncedCallback(() => {
        setBlur(() => false);
    }, 500);

    useEffect(() => {
        if (hasBrowser) {
            on(window, "blur", handleBlur);
            on(window, "focus", handleFocus);
        }

        return () => {
            if (hasBrowser) {
                off(window, "blur", handleBlur);
                off(window, "focus", handleFocus);
            }
        };
    }, []);

    return { isBlur };
}
