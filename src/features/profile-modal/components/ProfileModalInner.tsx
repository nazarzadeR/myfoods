import { VStack } from "@chakra-ui/react";

import ProfileHeader from "./profile-header";
import ProfileFooter from "./profile-footer";

export default function ProfileModalInner() {
    return (
        <VStack
            minH={{
                base: "full",
            }}
            justifyContent="space-between"
        >
            <ProfileHeader />
            <ProfileFooter />
        </VStack>
    );
}
