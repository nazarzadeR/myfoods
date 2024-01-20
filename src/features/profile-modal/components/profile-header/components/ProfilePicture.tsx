import { get } from "lodash";
import { useState } from "react";
import { Box, Image, Skeleton } from "@chakra-ui/react";

import { useAuth } from "@/contexts";

export default function ProfilePicture() {
    const { user } = useAuth();
    const [isLoaded, setLoaded] = useState(false);
    const imageSrc = get(
        user,
        "photoURL",
        "/images/default_user_img.jpg",
    ) as string;

    const onHandleLoadStart = () => {
        setLoaded(false);
    };
    const onHandleOnLoad = () => {
        setLoaded(true);
    };

    return (
        <Skeleton
            maxW="320px"
            maxH="300px"
            borderRadius="md"
            position="relative"
            isLoaded={isLoaded}
            boxSize={{ base: "full", sm: "140" }}
        >
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
                    onLoad={onHandleOnLoad}
                    onLoadStart={onHandleLoadStart}
                    onLoadCapture={onHandleLoadStart}
                />
            </Box>
        </Skeleton>
    );
}
