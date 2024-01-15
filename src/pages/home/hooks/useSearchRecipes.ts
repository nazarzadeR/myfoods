import _ from "lodash";
import { match } from "ts-pattern";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";

import { useToast } from "@/hooks";
import { useRecipeSettings } from "@/store";
import { useRecipeStore } from "../store/recipe";
import { recipes_endpoint } from "../services/recipe_api";

export default function useSearchRecipes() {
    const toast = useToast();
    const { t } = useTranslation();
    const { prepareToQuery } = useRecipeSettings();
    const { setResponse, setLoading } = useRecipeStore();

    const query = prepareToQuery();

    const onError = (errorCode: string) =>
        toast({
            status: "error",
            description: t(`errors.${errorCode}`),
        });

    const recipes_mutation = useMutation<Api.TRecipeApiResponse, unknown, any>(
        (q: string) => recipes_endpoint({ q, ...query }),
        {
            onMutate() {
                setLoading(true);
            },
            onSettled() {
                setLoading(false);
            },
            onSuccess(response) {
                setResponse(response.data);
            },
            onError(error: any) {
                match(error.response.status)
                    .with(429, () => onError("TO_MANY_REQUEST_TO_RECIPES"))
                    .otherwise(() => onError("SOMETHING_WENT_WRONG"));
            },
        },
    );

    return recipes_mutation;
}
