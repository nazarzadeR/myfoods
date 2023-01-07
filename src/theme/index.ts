import { extendTheme } from "@chakra-ui/react";

import style from  "./style";

const theme = extendTheme({
    ...style,
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    components: {
        Link: {
            baseStyle: {
                "&:hover": {
                    textDecoration: "none",
                    color: "teal.500"
                }
            }
        }
    },
});


export default theme;