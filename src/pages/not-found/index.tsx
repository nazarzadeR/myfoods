import { useMemo } from "react";
import Lottie from "lottie-react";
import { Box, Center } from "@chakra-ui/react";

import { randomFromArr } from "@/util";
import { useRedirect } from "@/hooks";
import NotFoundRow from "@/assets/lottie/not_found.json";
import NotFoundWithAstronaut from "@/assets/lottie/not_found_with_space.json";

export default function NotFound() {
    const dataset = useMemo(
        () => randomFromArr([NotFoundRow, NotFoundWithAstronaut]),
        [],
    );

    useRedirect({
        where: "/",
    });

    return (
        <Box
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Center w="full">
                <Box
                    as={Lottie}
                    maxW="600px"
                    maxH="560px"
                    loop={false}
                    animationData={dataset}
                />
            </Center>
        </Box>
    );
}
