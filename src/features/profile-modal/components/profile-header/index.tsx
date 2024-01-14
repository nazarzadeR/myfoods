import { VStack, Stack, Hide, Show } from "@chakra-ui/react";

import ProfileLastSeen from "./components/LastSeen";
import ProfilePicture from "./components/ProfilePicture";
import ChangeEmailInput from "./components/ChangeEmailInput";
import ChangeUsernameInput from "./components/ChangeUsernameInput";
import ProfilePicChangeInput from "./components/ProfilePictureChangeInput";

export default function ProfileHeader() {
    return (
        <VStack w="full">
            <Stack
                w="full"
                justifyContent="space-around"
                alignItems={{
                    base: "center",
                    md: "initial",
                }}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <ProfilePicture />
                <VStack
                    h="full"
                    w={{
                        base: "full",
                        sm: "auto",
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Show below="sm">
                        <ProfileLastSeen />
                    </Show>
                    <ChangeUsernameInput />
                    <ChangeEmailInput />
                    <Hide below="sm">
                        <ProfileLastSeen />
                    </Hide>
                </VStack>
            </Stack>
            <ProfilePicChangeInput />
        </VStack>
    );
}
