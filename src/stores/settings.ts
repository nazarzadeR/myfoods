import { IRecipeObj } from "interface";
import create from "zustand";

type State = {
    pag: number;
    device: "MOBILE" | "DESKTOP";
    pagMode: "PAG" | "INFINITY";
};

type Actions = {
    pagPrev: () => void;
    isPrev: () => boolean;
    pagTo: (num: number) => void;
    pagNext: (recipes: IRecipeObj[]) => void;
    isNext: (recipes: IRecipeObj[]) => boolean;
    setPagMode: (mode: "PAG" | "INFINITY") => void;
    pagCord: (recipes: IRecipeObj[]) => { from: number; to: number };
    pageInfo: (recipes: IRecipeObj[]) => { now: number; maxPage: number };
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
    pagCord: (recipes) => {
        const { pag, pagMode } = get();
        const from = pagMode === "INFINITY" ? 0 : pag;
        const to = recipes.length <= pag + 6 ? recipes.length : pag + 6;
        return { from, to };
    },
    pagNext: (recipes) => {
        const { pag, isNext } = get();

        if (!isNext(recipes)) return;

        const to = recipes.length <= pag + 6 ? recipes.length : pag + 6;
        set(() => ({ pag: to }));
    },
    pagPrev: () => {
        const { pag, isPrev } = get();
        const to = pag - 6 > 0 ? pag - 6 : 0;

        if (!isPrev()) return;

        set(() => ({ pag: to }));
    },
    pageInfo: (recipes) => {
        const { pag } = get();

        return {
            now: (pag + 6) / 6,
            maxPage: Math.floor(recipes.length / 6),
        };
    },
    pagTo: (num) => {
        set(() => ({ pag: (num - 1) * 6 }));
    },
    isNext: (recipes) => {
        const { pag } = get();
        return recipes.length > pag + 6;
    },
    isPrev: () => {
        const { pag } = get();

        return pag > 0;
    },
}));

export default useSetting;
