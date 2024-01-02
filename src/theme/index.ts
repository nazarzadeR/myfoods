import { extendTheme } from "@chakra-ui/react";

import base from "./base";

const theme = extendTheme({
    ...base,
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    components: {
        Link: {
            baseStyle: {
                "&:hover": {
                    textDecoration: "none",
                    color: "teal.500",
                },
            },
        },
    },
});

export default theme;
