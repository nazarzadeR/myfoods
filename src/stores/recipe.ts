import create from "zustand";
import { persist } from "zustand/middleware";

import { IRecipeObj, IRecipe } from "interface";

type State = {
    recipes: IRecipeObj[];
    favorites: IRecipeObj[];
};

type Action = {
    hasRecipe: () => boolean;
    setRecipes: (recipes: any) => void;
    isFavorite: (slug: string) => boolean;
    addOrRemoveFavorite: (recipe: IRecipe) => boolean;
    getRecipe: (slug: string) => IRecipe | undefined;
};

type RecipeStore = State & Action;

const useRecipe = create(
    persist<RecipeStore>(
        (set, get) => ({
            favorites: [],
            recipes: [],
            setRecipes: (recipes) => {
                set(() => ({ recipes }));
            },
            hasRecipe: () => get().recipes.length > 0,
            getRecipe: (slug) => {
                const { recipes, favorites } = get();
                const all: IRecipeObj[] = [...recipes, ...favorites];

                const result = all.find(({ recipe }) => recipe.label === slug);

                if (!result) return;

                return result.recipe;
            },
            isFavorite: (slug) => {
                const { favorites } = get();

                const fav = favorites.find((fav) => fav.recipe.label === slug);

                return !!fav;
            },
            addOrRemoveFavorite: (recipe) => {
                const { favorites } = get();

                const hasFavorite = favorites.find(
                    (fav) => fav.recipe.label === recipe.label
                );

                if (hasFavorite) {
                    const filteredFavorites = favorites.filter(
                        (fav) => fav.recipe.label !== recipe.label
                    );

                    set(() => ({ favorites: filteredFavorites }));

                    return true;
                }

                set(() => ({ favorites: [ ...favorites, { recipe } ] }))

                return false;
            },
        }),
        {
            name: "recipes",
        }
    )
);

export default useRecipe;
