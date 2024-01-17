import { Skeleton } from "@chakra-ui/react";

export default function RecipeLoading() {
    return (
        <>
            {Array.from({ length: 20 }).map((_, idx) => (
                <Skeleton
                    key={idx}
                    w="310px"
                    h="250px"
                    cursor="pointer"
                    borderRadius="base"
                />
            ))}
        </>
    );
}
