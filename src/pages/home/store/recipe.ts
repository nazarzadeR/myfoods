import _ from "lodash";
import { create } from "zustand";

type State = {
    isLoading: boolean;
    hasLimitOverloaded: boolean;
    response: Recipe.TRecipesResponseType;
};
type Actions = {
    hasHits(): boolean;
    getHits(): Recipe.THit[];
    setLoading(isLoading: boolean): void;
    setHasLimitOverload(overload: boolean): void;
    setResponse(response: Recipe.TRecipesResponseType): void;
};

type TRecipesStore = State & Actions;

const defaultRecipes = {} as Recipe.TRecipesResponseType;

export const useRecipeStore = create<TRecipesStore>((set, get) => ({
    isLoading: false,
    hasLimitOverloaded: false,
    response: defaultRecipes,
    setResponse: (response) => set({ response }),
    setLoading: (isLoading) => set({ isLoading }),
    setHasLimitOverload: (overload) => set({ hasLimitOverloaded: overload }),
    hasHits() {
        const { getHits } = get();
        const hits = getHits();

        return hits && hits.length > 0;
    },
    getHits() {
        const {
            response: { hits },
        } = get();
        return hits;
    },
}));
