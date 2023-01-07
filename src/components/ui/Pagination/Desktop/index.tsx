import React from "react";
import { nanoid } from "nanoid";
import { HStack } from "@chakra-ui/react";

import Button from "./PagButton";
import useSetting from "stores/settings";
import { pag, isNum } from "util/paginationShorter";
import { Forward, Backward } from "components/svgs";

const Pagination = () => {
    const { isNext, isPrev, pageInfo, pagNext, pagPrev, pagTo } = useSetting();
    const { now, maxPage } = pageInfo();

    if (!isNext() && !isPrev()) return null;

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
            <Button disabled={!isNext()} onClick={() => pagNext()}>
                <Forward />
            </Button>
        </HStack>
    );
};

export default Pagination;
