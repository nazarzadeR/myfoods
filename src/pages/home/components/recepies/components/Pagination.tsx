import _ from "lodash";
import React from "react";

import { useRecipeSettings } from "@/store";
import { useRecipeStore } from "@/pages/home/store/recipe";
import { InfinityPagination, ButtonPagination } from "@/pages/home/components";

export default React.memo(function Pagination() {
    const { paginationMode } = useRecipeSettings();
    const { response, hasHits, isLoading } = useRecipeStore();

    const isButtonPagination = paginationMode === "WITH_BUTTON";

    const hasNext = _.has(response, "_links.next.href");

    const isHidePagination = (!hasNext && !hasHits()) || isLoading;

    if (isHidePagination) return;

    return isButtonPagination ? <ButtonPagination /> : <InfinityPagination />;
});
