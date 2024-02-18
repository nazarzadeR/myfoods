import { get } from "lodash";
import { useState } from "react";
import { Center, Image, Skeleton } from "@chakra-ui/react";

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
        <Center
            w="full"
            maxH="300px"
            boxSize="full"
            borderRadius="md"
            position="relative"
        >
            <Skeleton
                maxW="420px"
                maxH="300px"
                boxSize="full"
                borderRadius="md"
                position="relative"
                isLoaded={isLoaded}
            >
                <Image
                    w="full"
                    h="full"
                    maxW="420px"
                    maxH="260px"
                    src={imageSrc}
                    borderRadius="md"
                    objectFit="cover"
                    onLoad={onHandleOnLoad}
                    onLoadStart={onHandleLoadStart}
                    onLoadCapture={onHandleLoadStart}
                />
            </Skeleton>
        </Center>
    );
}
