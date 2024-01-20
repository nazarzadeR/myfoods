import _ from "lodash";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { recipeSettingStorage } from "@/helpers/zustand_persist_storage";

type TRecipesSetting = Api.TRecipeApiParams;
export type TPaginationMode = "INFINITY" | "WITH_BUTTON";

type State = {
    paginationMode: TPaginationMode;
    querySettings: TRecipesSetting;
};

type Actions = {
    addTags(...tag: string[]): void;
    deleteTagFromId(id: string): void;
    prepareToQuery(): TRecipesSetting;
    setQueryCalories(calories: number[]): void;
    setPaginationMode(mode: TPaginationMode): void;
    setQuerySettings(option: keyof TRecipesSetting, value?: string): void;
};

type SettingsStore = State & Actions;

const defaultQuerySettings = {
    tags: [],
    diet: "",
    health: "",
    mealType: "",
    dishType: "",
    cuisineType: "",
    minCalories: 100,
    maxCalories: 512,
};

export const useRecipeSettings = create(
    persist<SettingsStore>(
        (set, get) => ({
            paginationMode: "WITH_BUTTON",
            querySettings: defaultQuerySettings,
            prepareToQuery() {
                const { querySettings } = get();
                const filterFunc = (val: any) => {
                    return _.isNumber(val) ? false : _.isEmpty(val);
                };

                return _.omitBy(
                    querySettings,
                    filterFunc,
                ) as Api.TRecipeApiParams;
            },
            setPaginationMode(mode) {
                set(() => ({
                    paginationMode: mode,
                }));
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
        }),
        {
            name: "recipe_settings",
            storage: createJSONStorage(() => recipeSettingStorage),
        },
    ),
);

export const refetchRecipes = () =>
    useRecipeSettings.persist.getOptions().storage?.getItem("recipe_settings");
