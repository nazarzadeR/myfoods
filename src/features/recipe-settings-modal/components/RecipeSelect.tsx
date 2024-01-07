import { useMemo } from "react";
import { isEmpty } from "lodash";
import { useTranslation } from "react-i18next";
import { Select, Text, VStack } from "@chakra-ui/react";

import { useRecipeSettings } from "@/store";

type Props = TProps<{
    label: string;
    options: string[];
    translateOptions: string;
    option: keyof Omit<
        Api.TRecipeApiParams,
        "q" | "minCalories" | "maxCalories" | "tags"
    >;
}>;

export default function RecipeSelect({
    option,
    options,
    label,
    translateOptions,
}: Props) {
    const { t } = useTranslation();
    const { querySettings, setQuerySettings } = useRecipeSettings();

    const defaultOption = useMemo(
        () => querySettings[option],
        [querySettings, option],
    );

    const optionsWithUndefined = useMemo(
        () => ["", ...options],
        [options],
    );

    const renderOptions = useMemo(
        () =>
            optionsWithUndefined.map((d, idx) => (
                <option key={idx} value={d}>
                    {isEmpty(d)
                        ? t("words.any")
                        : t(`words.${translateOptions}.${d}`)}
                </option>
            )),
        [optionsWithUndefined],
    );

    const setOptionValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuerySettings(option, e.target.value);
    };

    return (
        <VStack w="full" h="max-content" gap="2">
            <Text w="full" alignSelf="flex-start" ml="2">
                {label}
            </Text>
            <Select
                onChange={setOptionValue}
                defaultValue={defaultOption || "undefined"}
                size={{
                    base: "md",
                    md: "lg",
                }}
            >
                {renderOptions}
            </Select>
        </VStack>
    );
}
