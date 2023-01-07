import React from "react";
import { Center } from "@chakra-ui/react";

import useRecipe from "stores/recipe";
import useSetting from "stores/settings";

import PaginationDesk from "./Desktop";
import InfinityPagination from "./Mobile";

const Pagination = () => {
    const { hasRecipe, recipes } = useRecipe();
    const { pagMode } = useSetting();

    if (!hasRecipe()) return null;

    return (
        <Center w="full" h="60px" my="4">
            {pagMode === "PAG" ? <PaginationDesk /> : <InfinityPagination />}
        </Center>
    );
};

export default Pagination;
