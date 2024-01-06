import { createIcon } from "@chakra-ui/icon";

const Email = createIcon({
    displayName: "Email",
    viewBox: "0 0 24 24",
    defaultProps: {
        strokeWidth: 0,
        fill: "currentColor",
        stroke: "currentcolor",
    },
    path: (
        <>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </>
    ),
});

export default Email;
