import { isUndefined } from "lodash";
import { createContext, useContext } from "react";
import { useLocation, Navigate } from "react-router";

import useCheckFavorites from "../hooks/useCheckFavorites";
import { MultipleRoundSpinner } from "@/components";

type TRecipeContext = {
    isFavorites: boolean;
    recipe: Recipe.TRecipe;
    refetch(): void;
};

const defaultContext = {
    isFavorites: false,
} as TRecipeContext;

const RecipeContext = createContext(defaultContext);

export default function RecipeProvider({ children }: TProps) {
    const { state } = useLocation();
    const { data, isLoading, refetch } = useCheckFavorites(
        state?.recipe?.label,
    );

    if (isUndefined(state?.recipe)) return <Navigate to="/" />;

    if (isLoading) return <MultipleRoundSpinner />;

    return (
        <RecipeContext.Provider
            value={{ recipe: state.recipe, isFavorites: !!data, refetch }}
        >
            {children && children}
        </RecipeContext.Provider>
    );
}

export const useRecipeContext = () => useContext(RecipeContext);
