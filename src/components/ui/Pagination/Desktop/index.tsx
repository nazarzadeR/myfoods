import React from "react";
import { nanoid } from "nanoid";
import { HStack } from "@chakra-ui/react";

import Button from "./PagButton";
import useRecipe from "stores/recipe";
import useSetting from "stores/settings";
import { pag, isNum } from "util/paginationShorter";
import { Forward, Backward } from "components/svgs";

const Pagination = () => {
    const { recipes } = useRecipe();
    const { isNext, isPrev, pageInfo, pagNext, pagPrev, pagTo } = useSetting();
    const { now, maxPage } = pageInfo(recipes);

    if (!isNext(recipes) && !isPrev()) return null;

    const handlePag = (num: string | number) => {
        return () => {
            if (!isNum(num)) return;

            pagTo(num as number);
        };
    };


    return (
        <HStack>
            <Button disabled={!isPrev()} onClick={() => pagPrev()}>
                <Backward />
            </Button>
            {pag(now, maxPage).map((num) => (
                <Button
                    key={ nanoid() }
                    onClick={handlePag(num)}
                    disabled={!isNum(num) || now === num}
                >
                    {num}
                </Button>
            ))}
            <Button disabled={!isNext(recipes)} onClick={() => pagNext(recipes)}>
                <Forward />
            </Button>
        </HStack>
    );
};

export default Pagination;
