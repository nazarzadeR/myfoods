import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";

import { useSearchHistory } from "./store";
import Input from "./components/SearchInput";
import { RecipeSearchSchema } from "@/schema/base";
import useOpenHistory from "./hooks/useOpenHistory";
import Button from "./components/SearchInputButton";
import SearchInputHistory from "./components/SearchInputHistory";
import useSearchRecipes from "@/pages/home/hooks/useSearchRecipes";

export default function SearchInput() {
    const { t } = useTranslation();
    const { addHistory } = useSearchHistory();
    const { mutateAsync } = useSearchRecipes();
    const { isHistoryOpen, toggleOffHistoryHandler, toggleOnHistoryHandler } =
        useOpenHistory();

    const formik = useFormik({
        initialValues: { query: "" },
        validationSchema: RecipeSearchSchema(t),
        async onSubmit(values, helpers) {
            const { query } = values;

            await mutateAsync(query, {
                onSettled() {
                    helpers.resetForm();
                    addHistory(query);
                },
            });
        },
    });

    const setQuery = (val: string) => formik.setFieldValue("query", val);

    return (
        <Box maxW="320px" my="2">
            <SearchInputHistory isOpen={isHistoryOpen} setQuery={setQuery}>
                <Input
                    name="query"
                    type="text"
                    value={formik.values.query}
                    onChange={formik.handleChange}
                    onFocus={toggleOnHistoryHandler}
                    onBlur={toggleOffHistoryHandler(formik.handleBlur)}
                />
                <Button
                    loading={formik.isSubmitting}
                    onClick={() => formik.handleSubmit()}
                />
            </SearchInputHistory>
        </Box>
    );
}
