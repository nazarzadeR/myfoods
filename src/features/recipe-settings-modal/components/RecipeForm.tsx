import { VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Select from "./RecipeSelect";
import TagList from "./recipe-tag-list";
import RecipeCaloriesSlider from "./ColoriesSlider";
import { DIETS, DISH, MEAL, HEALTH, CUISINE } from "@/data/constants";

export default function RecipeForm() {
    const { t } = useTranslation();
    return (
        <VStack mb="8" mx="4" gap="3">
            <RecipeCaloriesSlider />

            <Select
                option="diet"
                options={DIETS}
                translateOptions="diets"
                label={t("expressions.diet")}
            />
            <Select
                options={DISH}
                option="dishType"
                translateOptions="dishes"
                label={t("expressions.dish")}
            />
            <Select
                options={MEAL}
                option="mealType"
                translateOptions="meals"
                label={t("expressions.meal")}
            />
            <Select
                option="health"
                options={HEALTH}
                translateOptions="healths"
                label={t("expressions.health")}
            />
            <Select
                options={CUISINE}
                option="cuisineType"
                translateOptions="cuisines"
                label={t("expressions.cuisine")}
            />

            <TagList heading={t("expressions.tagListHeader")} />
        </VStack>
    );
}
