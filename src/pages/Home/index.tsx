import React from "react";
import { Center } from "@chakra-ui/react";

import { SearchInput, Pagination } from "components";
import RecipeList from "./RecipeList";

const index = () => {
    return (
        <>
            <Center w="full" h="60px" mx="auto" my="5">
                <SearchInput />
            </Center>

            <RecipeList />

            <Pagination />

        </>
    );
};

export default index;
