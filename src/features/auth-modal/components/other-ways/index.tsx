import { Box, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import WithPopupLink from "./components/WithPopUpLink";
import WithSimpleLink from "./components/WithSimpleLink";
import {
    GoogleProvider,
    GithubProvider,
    FacebookProvider,
} from "@/services/auth";
import {
    MagicIcon,
    LoginIcon,
    GithubIcon,
    GoogleIcon,
    FacebookIcon,
} from "@/components";


export default function OtherWays() {
    const { t } = useTranslation();
    return (
        <Box my="2">
            <Stack
                w="full"
                h="full"
                as="ul"
                flexDir="row"
                flexWrap="wrap"
                alignItems="center"
                spacing={["2", "8"]}
                alignContent="center"
                justifyContent="center"
            >
                <WithSimpleLink
                    to="LOGIN"
                    Icon={LoginIcon}
                    title={t("words.simpleLogin")}
                />
                <WithSimpleLink
                    to="MAGIC"
                    Icon={MagicIcon}
                    title={t("words.magic")}
                />
                <WithPopupLink
                    Icon={GoogleIcon}
                    title={t("words.google")}
                    provider={GoogleProvider}
                />
                <WithPopupLink
                    Icon={FacebookIcon}
                    title={t("words.facebook")}
                    provider={FacebookProvider}
                />
                <WithPopupLink
                    Icon={GithubIcon}
                    title={t("words.github")}
                    provider={GithubProvider}
                />
            </Stack>
        </Box>
    );
}
