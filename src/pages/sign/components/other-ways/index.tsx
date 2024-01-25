import { HStack } from "@chakra-ui/react";

import WithLink from "./components/WithLink";
import WithPopupLink from "./components/WithPopupLink";
import { FacebookIcon, GithubIcon, GoogleIcon, MagicIcon } from "@/components";
import {
    GithubProvider,
    GoogleProvider,
    FacebookProvider,
} from "@/services/firebase";

export default function OtherWays() {
    return (
        <HStack>
            <WithLink scheme="green" to="/sign/magic_link" Icon={MagicIcon} />
            <WithPopupLink
                schema="red"
                Icon={GoogleIcon}
                provider={GoogleProvider}
            />

            <WithPopupLink
                schema="gray"
                Icon={GithubIcon}
                provider={GithubProvider}
            />

            <WithPopupLink
                schema="blue"
                Icon={FacebookIcon}
                provider={FacebookProvider}
            />
        </HStack>
    );
}
