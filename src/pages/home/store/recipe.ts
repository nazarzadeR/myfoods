import _ from "lodash";
import { create } from "zustand";

type State = {
    isLoading: boolean;
    hasLimitOverloaded: boolean;
    response: Recipe.TRecipesResponseType;
};
type Actions = {
    hasHits(): boolean;
    hasResponse(): boolean;
    getHits(): Recipe.THit[];
    setLoading(isLoading: boolean): void;
    setHasLimitOverload(overload: boolean): void;
    setResponse(response: Recipe.TRecipesResponseType): void;
    mergeRecipes(response: Recipe.TRecipesResponseType): void;
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
    hasResponse() {
        const { response } = get();

        return !_.isEmpty(response);
    },
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
    mergeRecipes(newResponse) {
        const { response } = get();
        const pickedResponse: Partial<Recipe.TRecipesResponseType> = {
            to: newResponse.to,
            count: newResponse.count,
            _links: newResponse._links,
            hits: [...response.hits, ...newResponse.hits],
        };

        set(() => ({
            response: {
                ...response,
                ...pickedResponse,
            },
        }));
    },
}));
