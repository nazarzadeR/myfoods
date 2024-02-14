import { useRef, useEffect } from "react";
import { useNavigate, NavigateOptions, To } from "react-router-dom";

type Props = {
    wait?: number;
    where?: To | any;
    instant?: boolean;
    options?: NavigateOptions;
};

export default function useRedirect({
    wait = 5,
    where = -1,
    options = {},
    instant = false,
}: Props) {
    const navigate = useNavigate();
    const countDownRef = useRef<number>(1);

    function go() {
        if (options) return navigate(where, options);
        return navigate(where);
    }

    useEffect(() => {
        if (instant) return go();

        let id: NodeJS.Timeout;
        let { current } = countDownRef;

        if (current) {
            id = setInterval(() => {
                if (wait === current) {
                    return go();
                }

                current = current + 1;
            }, 1000);
        }

        return () => {
            if (id) clearInterval(id);
        };
    }, [instant]);
}
