import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { HStack, Box } from "@chakra-ui/react";

import Input from "./components/SearchInput";
import { RecipeSearchSchema } from "@/schema/base";
import Button from "./components/SearchInputButton";
import useSearchRecipes from "@/pages/home/hooks/useSearchRecipes";

export default function SearchInput() {
    const { t } = useTranslation();
    const { mutateAsync } = useSearchRecipes();

    const formik = useFormik({
        initialValues: { query: "" },
        validationSchema: RecipeSearchSchema(t),
        async onSubmit(values, helpers) {
            const { query } = values;

            await mutateAsync(query, {
                onSettled() {
                    helpers.resetForm();
                },
            });
        },
    });

    return (
        <Box maxW="320px" my="2">
            <HStack w="max-content">
                <Input
                    name="query"
                    type="text"
                    value={formik.values.query}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <Button
                    loading={formik.isSubmitting}
                    onClick={() => formik.handleSubmit()}
                />
            </HStack>
        </Box>
    );
}
