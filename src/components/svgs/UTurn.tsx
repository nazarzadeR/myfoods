import { createIcon } from "@chakra-ui/icons";

const UTurn = createIcon({
    displayName: "Hamburger",
    viewBox: "0 0 24 24",
    defaultProps: {
        fill: "none",
        strokeWidth: 1.5,
        stroke: "currentcolor",
    },
    path: <path d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />,
});

export default UTurn;
