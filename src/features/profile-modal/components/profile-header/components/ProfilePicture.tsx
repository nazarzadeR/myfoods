import { get } from "lodash";
import { Box, Image } from "@chakra-ui/react";

import { useAuth } from "@/contexts";

export default function ProfilePicture() {
    const { user } = useAuth();
    const imageSrc = get(
        user,
        "photoURL",
        "/images/default_user_img.jpg",
    ) as string;

    return (
        <Box

            position="relative"
            borderRadius="md"
            maxW="360px"
            w={{
                base: "60%",
                sm: "full"
            }}
            boxSize={{ sm: "140" }}
        >
            <Image w="full" h="full" src={imageSrc} borderRadius="md" />
        </Box>
    );
}
