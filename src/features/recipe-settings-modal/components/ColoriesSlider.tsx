import { useTranslation } from "react-i18next";

import {
    Text,
    VStack,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderThumb,
    RangeSliderFilledTrack,
} from "@chakra-ui/react";

import { useRecipeSettings } from "@/store";

const CaloriesSlider = () => {
    const { t } = useTranslation();
    const { querySettings, setQueryCalories } = useRecipeSettings();

    const caloriesTitle = t("expressions.calories")
        .replace("$", querySettings.minCalories.toString())
        .replace("*", querySettings.maxCalories.toString());

    const addCaloriesToSetting = (calories: number[]) =>
        setQueryCalories(calories);

    return (
        <VStack gap="3" w="full">
            <Text alignSelf="flex-start" ml="3">
                {caloriesTitle}
            </Text>
            <RangeSlider
                min={0}
                step={50}
                max={3000}
                aria-label={["min", "max"]}
                onChange={addCaloriesToSetting}
                defaultValue={[
                    querySettings.minCalories,
                    querySettings.maxCalories,
                ]}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
        </VStack>
    );
};

export default CaloriesSlider;
