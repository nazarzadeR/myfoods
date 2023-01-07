import create from "zustand";
import { persist } from "zustand/middleware";

import { IRecipe } from "interface";

type State = {
    recipes: IRecipe[],
    favorites: IRecipe[]
};

type Action = {
    hasRecipe: () => boolean;
    setRecipes: (recipes: any) => void;
};

type RecipeStore = State & Action;

const useRecipe = create(
    persist<RecipeStore>(
        (set, get) => ({
            favorites: [],
            recipes: [],
            setRecipes: recipes => {
                set(() => ({ recipes }));
            },
            hasRecipe: () => get().recipes.length > 0
        }),
        {
            name: "recipes",
        }
    )
);

export default useRecipe;
