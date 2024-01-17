import _ from "lodash";
import { useRef, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import { useRecipeStore } from "../store/recipe";
import useRecipeInfinityQuery from "../hooks/useRecipeInfiniteQuery";

export default function InfinityPagination() {
    const { isLoading } = useRecipeStore();

    const ref = useRef<HTMLDivElement | null>(null);
    const isView = useInView(ref);

    const {
        isError,
        fetchNextPage,
        isLoading: isRecipeLoading,
    } = useRecipeInfinityQuery();

    useEffect(() => {
        if (isView && !isRecipeLoading) {
            fetchNextPage();
        }
    }, [isView, isRecipeLoading]);

    if (isLoading || isError) return null;

    return (
        <Center py="2" w="full" h="60px" ref={ref}>
            <Box
                w="16px"
                h="16px"
                bg="#5389a6"
                as={motion.span}
                borderRadius="50px"
                initial={{ x: 64 }}
                animate={{
                    x: [0, 0, 64, 0, 0],
                    width: ["16px", "80px", "16px", "80px", "16px"],
                    transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                    },
                }}
            />
        </Center>
    );
}
