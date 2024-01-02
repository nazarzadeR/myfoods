import _ from "lodash";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TRecipesSetting = Api.TRecipeApiParams;
export type TPaginationMode = "INFINITY" | "PAGINATION";

type State = {
    paginationMode: TPaginationMode;
    querySettings: TRecipesSetting;
};

type Actions = {
    save(): void;
    addTags(...tag: string[]): void;
    deleteTagFromId(id: string): void;
    getQuerySettings(): TRecipesSetting;
    setQueryCalories(calories: number[]): void;
    setQuerySettings(option: keyof TRecipesSetting, value?: string): void;
};

type SettingsStore = State & Actions;

const defaultQuerySettings = {
    tags: [],
    diet: undefined,
    minCalories: 100,
    maxCalories: 512,
    health: undefined,
    mealType: undefined,
    dishType: undefined,
    cuisineType: undefined,
};

export const useRecipeSettings = create(
    persist<SettingsStore>(
        (set, get) => ({
            paginationMode: "PAGINATION",
            querySettings: defaultQuerySettings,
            getQuerySettings() {
                const { querySettings } = get();
                const newQuerySetting = _.cloneDeep(querySettings);

                return _.omitBy(
                    newQuerySetting,
                    (value) => value === "undefined",
                ) as TRecipesSetting;
            },

            setQuerySettings: (option, value) =>
                set((data) => ({
                    querySettings: {
                        ...data.querySettings,
                        [option]: value,
                    },
                })),
            setQueryCalories: (calories) =>
                set((data) => ({
                    querySettings: {
                        ...data.querySettings,
                        minCalories: calories[0],
                        maxCalories: calories[1],
                    },
                })),
            addTags(...tags) {
                const newTags: Api.TTags = _.map(tags, (t) => ({
                    id: t,
                    text: t,
                }));

                set((data) => ({
                    querySettings: {
                        ...data.querySettings,
                        tags: [...(data.querySettings.tags || []), ...newTags],
                    },
                }));
            },
            deleteTagFromId(tagId) {
                const { querySettings } = get();

                const newTags = _.filter(
                    _.get(querySettings, "tags"),
                    ({ id }) => id !== tagId,
                );

                set({
                    querySettings: {
                        ...querySettings,
                        tags: newTags,
                    },
                });
            },

            save() {
                // const { getQuerySettings  } = get();
                // const queries = getQuerySettings();
                // TODO: Save settings to firestore
            },
        }),
        {
            name: "setting",
        },
    ),
);
