import _ from "lodash";
import { match } from "ts-pattern";
import { useTranslation } from "react-i18next";
import { useInfiniteQuery } from "react-query";

import { useToast } from "@/hooks";
import { useRecipeStore } from "../store/recipe";
import { recipes_infinite_pagination } from "../services/recipe_api";

export default function useRecipesInfiniteQuery() {
    const toast = useToast();
    const { t } = useTranslation();
    const { response, mergeRecipes } = useRecipeStore();

    const initialLink = _.get(response, "_links.next.href", "");

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const query = useInfiniteQuery({
        retry: false,
        enabled: false,
        queryKey: ["recipes"],
        refetchOnMount: false,
        keepPreviousData: true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        queryFn: recipes_infinite_pagination(initialLink),
        getNextPageParam: (previousResponse) => {
            return _.get(previousResponse, "data._links.next.href", undefined);
        },
        onError(error: any) {
            match(error.response.status)
                .with(429, () => onError("TO_MANY_REQUEST_TO_RECIPES"))
                .otherwise(() => onError("SOMETHING_GONE_WRONG"));
        },
        onSuccess(data) {
            const newRecipesResponse = _.last(data.pages)?.data;

            if (_.has(newRecipesResponse, "hits")) {
                mergeRecipes(newRecipesResponse);
            }
        },
    });

    return query;
}
