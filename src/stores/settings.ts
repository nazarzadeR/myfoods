import create from "zustand";

import useRecipes from "./recipe";

type State = {
    pag: number;
    device: "MOBILE" | "DESKTOP";
    pagMode: "PAG" | "INFINITY";
};

type Actions = {
    pagNext: () => void;
    pagPrev: () => void;
    isNext: () => boolean;
    isPrev: () => boolean;
    pagTo: (num: number) => void;
    pagCord: () => { from: number; to: number };
    pageInfo: () => { now: number; maxPage: number };
    setPagMode: (mode: "PAG" | "INFINITY") => void;
};

type SettingStore = State & Actions;

const detectDevice = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ];

    return toMatch.some((matchItems) => navigator.userAgent.match(matchItems))
        ? "MOBILE"
        : "DESKTOP";
};

const useSetting = create<SettingStore>((set, get) => ({
    pag: 0,
    device: detectDevice(),
    pagMode: detectDevice() === "MOBILE" ? "INFINITY" : "PAG",
    setPagMode: (mode) => set(() => ({ pagMode: mode })),
    pagCord: () => {
        const { pag, pagMode } = get();
        const { recipes } = useRecipes.getState();
        const from = pagMode === "INFINITY" ? 0 : pag;
        const to = recipes.length <= pag + 6 ? recipes.length : pag + 6;
        return { from, to };
    },
    pagNext: () => {
        const { pag, isNext } = get();
        const { recipes } = useRecipes.getState();

        if (!isNext()) return;

        const to = recipes.length <= pag + 6 ? recipes.length : pag + 6;
        set(() => ({ pag: to }));
    },
    pagPrev: () => {
        const { pag, isPrev } = get();

        if (!isPrev()) return;

        const to = pag - 6 > 0 ? pag - 6 : 0;

        set(() => ({ pag: to }));
    },
    isNext: () => {
        const { pag } = get();
        const { recipes } = useRecipes.getState();

        return recipes.length > pag + 6;
    },
    isPrev: () => {
        const { pag } = get();

        return pag > 0;
    },
    pageInfo: () => {
        const { pag } = get();
        const { recipes } = useRecipes.getState();

        return {
            now: (pag + 6) / 6,
            maxPage: Math.floor(recipes.length / 6),
        };
    },
    pagTo: num => {
        set(() => ({ pag: (num - 1) * 6 }));
    }
}));

export default useSetting;
