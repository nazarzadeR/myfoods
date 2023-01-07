import React from "react";
import * as yup from "yup";
import { HStack } from "@chakra-ui/react";
import { Formik, FormikHelpers, Form } from "formik";

import Input from "./StyledInput";
import Button from "./SubmitButton";
import useRecipe from "hook/useRecipe";

const index = () => {
    const recipeMutation = useRecipe();
    const submit = async (values: any, helpers: FormikHelpers<any>) => {
        let { query } = values;
        let { setSubmitting, resetForm } = helpers;

        await recipeMutation.mutateAsync(
            {
                search: query,
                FROM: 0,
                TO: 60,
            },
            {
                onSettled: () => {
                    resetForm();
                    setSubmitting(false);
                },
            }
        );
    };

    return (
        <Formik
            onSubmit={submit}
            initialValues={{ query: "" }}
            validationSchema={yup.object().shape({
                query: yup
                    .string()
                    .matches(/^[A-Za-z ]*$/, "must be a alpha characters")
                    .required(),
            })}
        >
            {(props) => (
                <Form>
                    <HStack>
                        <Input type="text" name="query" />
                        <Button loading={props.isSubmitting} />
                    </HStack>
                </Form>
            )}
        </Formik>
    );
};

export default index;
