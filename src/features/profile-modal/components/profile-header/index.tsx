import { VStack, Stack } from "@chakra-ui/react";

import ProfileLastSeen from "./components/LastSeen";
import ProfilePicture from "./components/ProfilePicture";
import ChangeEmailInput from "./components/ChangeEmailInput";
import ChangeUsernameInput from "./components/ChangeUsernameInput";
import ProfilePicChangeInput from "./components/ProfilePictureChangeInput"

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
                        sm: "auto"
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <ChangeUsernameInput />
                    <ChangeEmailInput />
                    <ProfileLastSeen />
                </VStack>
            </Stack>
            <ProfilePicChangeInput />
        </VStack>
    );
}
