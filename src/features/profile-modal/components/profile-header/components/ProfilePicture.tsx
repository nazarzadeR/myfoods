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
            maxW="320px"
            maxH="300px"
            position="relative"
            borderRadius="md"
            boxSize={{ sm: "140" }}
        >
            <Image w="full" h="full" src={imageSrc} borderRadius="md" />
        </Box>
    );
}
