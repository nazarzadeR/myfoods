import React, { useRef, useEffect } from "react";

const useSingleIntersection = (
    anchor: React.MutableRefObject<HTMLElement>,
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver>(
        new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) callback();
            },
            { threshold: 1 }
        )
    );

    useEffect(() => {
        if (anchor.current) observer.current.observe(anchor.current);

        return () => {
            if (anchor.current) observer.current.unobserve(anchor.current);
        };
    }, [anchor]);

    return observer.current ;
};

export default useSingleIntersection;
