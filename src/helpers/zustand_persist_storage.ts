import { isNull, isString } from "lodash";
import { StateStorage } from "zustand/middleware";

import {
    addRecipeSettingWith,
    getRecipeSettingWith,
} from "@/services/firebase";

export const recipeSettingStorage: StateStorage = {
    async removeItem() {},
    async getItem(name: string) {
        const snapshot = await getRecipeSettingWith(name);

        if (isString(snapshot) || isNull(snapshot)) return snapshot;

        localStorage.setItem(
            name,
            JSON.stringify(snapshot?.data()?.recipe_settings),
        );

        return JSON.stringify(snapshot?.data()?.recipe_settings.state);
    },
    async setItem(name: string, value: any) {
        await addRecipeSettingWith(name, value);
    },
};
