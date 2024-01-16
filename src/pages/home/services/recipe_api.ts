import _ from "lodash";
import { Instance, RECIPES_ENDPOINT } from "@/lib/http";

export const recipes_endpoint = async (params: Api.TRecipeApiParams) => {
    let recipeData: Api.TRecipeApiResponse;
    const { minCalories, maxCalories, tags, ...restParams } = params;
    const { VITE_RECIPES_APP_ID, VITE_RECIPES_APP_KEY } = import.meta.env;

    const calories = `${minCalories}-${maxCalories}`;
    const stringifiedTags = _.join(
        _.map(tags, (t) => t.text),
        "%",
    );

    try {
        recipeData = await RECIPES_ENDPOINT.get<Recipe.TRecipesResponseType>(
            "",
            {
                params: {
                    calories,
                    ...restParams,
                    type: "public",
                    tags: stringifiedTags,
                    app_id: VITE_RECIPES_APP_ID,
                    app_key: VITE_RECIPES_APP_KEY,
                },
            },
        );

        return recipeData;
    } catch (error: any) {
        throw error;
    }
};

export const recipes_infinite_pagination =
    (initial_link: string) =>
    async ({ pageParam = initial_link }) => {
        try {
            return Instance.get(pageParam);
        } catch (error: any) {
            throw error;
        }
    };
