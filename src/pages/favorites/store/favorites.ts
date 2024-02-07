import { create } from "zustand";

type State = {
    favorites: Recipe.TRecipe[];
};

type Action = {
    setFavorites(favorites: Recipe.TRecipe[]): void;
};

type Store = State & Action;

export const useFavorites = create<Store>((set) => ({
    favorites: [],
    setFavorites(favorites) {
        set({ favorites });
    },
}));
