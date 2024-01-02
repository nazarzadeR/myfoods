import { createIcon } from "@chakra-ui/icon";

const Backward = createIcon({
    displayName: "Backward",
    viewBox: "0 0 24 24",
    defaultProps: {
        strokeWidth: 1.5,
        fill: "currentColor",
        stroke: "currentcolor",
    },
    path: <path d="M15.75 19.5L8.25 12l7.5-7.5" />,
});

export default Backward;
