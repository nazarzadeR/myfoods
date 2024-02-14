import { filter } from "lodash";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    history: string[];
};

type Action = {
    deleteHistory(query: string): void;
    addHistory(query: string): void;
};

type Store = State & Action;

export const useSearchHistory = create(
    persist<Store>(
        (set) => ({
            history: [],
            addHistory: (history) =>
                set((prev) => ({
                    history: [
                        ...filter(prev.history, (p) => p !== history),
                        history,
                    ],
                })),
            deleteHistory: (history) =>
                set((prev) => ({
                    history: [...prev.history.filter((his) => his !== history)],
                })),
        }),
        {
            name: "search_history",
        },
    ),
);
