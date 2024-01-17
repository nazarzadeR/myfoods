import _ from "lodash";
import { useTranslation } from "react-i18next";
import { Button, Center } from "@chakra-ui/react";

import { useRecipeStore } from "../store/recipe";
import useRecipeInfinityQuery from "../hooks/useRecipeInfiniteQuery";

export default function ButtonPagination() {
    const { t } = useTranslation();
    const { hasLimitOverloaded } = useRecipeStore();

    const { isFetching, fetchNextPage } = useRecipeInfinityQuery();

    const onHandleMutation = () => {
        if (hasLimitOverloaded) return;

        fetchNextPage();
    };

    return (
        <Center my="2" w="full" mx="auto" pb="2">
            <Button
                w="80%"
                mx="auto"
                maxW="280px"
                color="gray.700"
                colorScheme="green"
                disabled={isFetching}
                isLoading={isFetching}
                onClick={onHandleMutation}
                textTransform="capitalize"
            >
                {t("words.loadMore")}
            </Button>
        </Center>
    );
}
