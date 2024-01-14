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
            borderRadius="md"
            position="relative"
            boxSize={{ base: "full", sm: "140" }}
        >
            <Image
                w="full"
                h="full"
                maxH="260px"
                src={imageSrc}
                borderRadius="md"
                objectFit="cover"
            />
        </Box>
    );
}
