import { createIcon } from "@chakra-ui/icons";

const Forward = createIcon({
    displayName: "Hamburger",
    viewBox: "0 0 24 24",
    defaultProps: {
        strokeWidth: 1.5,
        fill: "currentColor",
        stroke: "currentcolor",
    },
    path: <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />,
});

export default Forward;
