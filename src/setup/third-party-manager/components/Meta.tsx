import { Helmet } from "react-helmet";
import { useColorModeValue } from "@chakra-ui/react";

import useBlurWindow from "../hooks/useBlurWindow";

export default function ThemeColor() {
    const { isBlur } = useBlurWindow();
    const themeColor = useColorModeValue("#FFFFFF", "#1A202C");

    return (
        <Helmet defaultTitle="Myfoods" titleTemplate="Myfoods | %s">
            <meta name="theme-color" content={themeColor} />

            {isBlur && <title>Recipes waiting you</title>}
        </Helmet>
    );
}
