import { create } from "zustand";

type State = { isNavbarOpen: boolean };
type Action = {
    setNavbarSituation(situation: boolean): void;
};

type Store = State & Action;

export const useUtil = create<Store>((set) => ({
    isNavbarOpen: false,
    setNavbarSituation(situation) {
        set(() => ({ isNavbarOpen: situation }));
    },
}));
