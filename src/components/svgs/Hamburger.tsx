import { createIcon } from "@chakra-ui/icon";

const Hamburger = createIcon({
    displayName: "Hamburger",
    viewBox: "0 0 512 512",
    defaultProps: {
        fill: "currentColor",
        strokeWidth: 0,
        stroke: "currentcolor",
    },
    path: (
        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    ),
});

export default Hamburger;
