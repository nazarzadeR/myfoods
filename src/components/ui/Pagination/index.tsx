import { Center } from "@chakra-ui/react";
import React from "react";
import useSetting from "stores/settings";

import PaginationDesk from "./Desktop";
import InfinityPagination from "./Mobile";

const Pagination = () => {
    const { pagMode } = useSetting();

    return (
        <Center w="full" h="60px" my="4" >
            {pagMode === "PAG" ? <PaginationDesk /> : <InfinityPagination />}
        </Center>
    );
};

export default Pagination;
