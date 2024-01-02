import { createIcon } from "@chakra-ui/icon";

const ResetFetch = createIcon({
    displayName: "ResetFetch",
    viewBox: "0 0 24 24",
    defaultProps: {
        strokeWidth: 2,
        fill: "none",
        stroke: "currentcolor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    },
    path: (
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 21l-6 -6"></path>
            <path d="M3.268 12.043a7.017 7.017 0 0 0 6.634 4.957a7.012 7.012 0 0 0 7.043 -6.131a7 7 0 0 0 -5.314 -7.672a7.021 7.021 0 0 0 -8.241 4.403"></path>
            <path d="M3 4v4h4"></path>
        </>
    ),
});

export default ResetFetch;
