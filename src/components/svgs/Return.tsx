import { createIcon } from "@chakra-ui/icon";

const PagMode = createIcon({
    displayName: "PagMode",
    viewBox: "0 0 512 512",
    defaultProps: {
        fill: "currentColor",
        strokeWidth: 0,
        stroke: "currentcolor",
    },
    path: (
        <>
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M112 352l-64-64 64-64"
            ></path>
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M64 288h294c58.76 0 106-49.33 106-108v-20"
            ></path>
        </>
    ),
});

export default PagMode;
