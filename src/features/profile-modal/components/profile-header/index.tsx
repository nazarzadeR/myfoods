import { VStack, Stack, Hide, Show } from "@chakra-ui/react";

import ProfileLastSeen from "./components/LastSeen";
import ProfilePicture from "./components/ProfilePicture";
import ChangeEmailInput from "./components/ChangeEmailInput";
import ChangeUsernameInput from "./components/ChangeUsernameInput";
import ProfilePicChangeInput from "./components/ProfilePictureChangeInput";

export default function ProfileHeader() {
    return (
        <VStack h="full" w="full">
            <VStack
                w="full"
                justifyContent="space-around"
                alignItems={{
                    base: "center",
                    md: "initial",
                }}
            >
                <ProfilePicture />
                <VStack
                    w="full"
                    h="full"
                    mx="auto"
                    maxW="380px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ProfileLastSeen />

                    <ChangeUsernameInput />
                    <ChangeEmailInput />
                </VStack>
            </VStack>
            <ProfilePicChangeInput />
        </VStack>
    );
}
