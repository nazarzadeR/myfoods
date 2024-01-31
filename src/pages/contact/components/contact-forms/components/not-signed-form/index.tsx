import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers } from "formik";
import { VStack, Heading, Button } from "@chakra-ui/react";

import { InputField, TextField } from "@/components";
import useEmailjs from "../../hooks/useEmailjs";
import { emailMeFormValidation } from "../../schema";

export default function WithoutAuthForm() {
    const { t } = useTranslation();
    const { emailJSMutation } = useEmailjs();

    const onSubmit = async (
        params: Api.TEmailJSParams,
        helpers: FormikHelpers<Api.TEmailJSParams>,
    ) => {
        await emailJSMutation.mutateAsync(params, {
            onSettled() {
                helpers.resetForm();
                helpers.setSubmitting(false);
            },
        });
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={emailMeFormValidation(t)}
            initialValues={{
                message: "",
                from_email: "",
                from_username: "",
            }}
        >
            {(ctx) => (
                <VStack as={Form} gap="4" w="full" maxW="360px">
                    <Heading mb="2" size="lg">
                        {t("contact.title")}
                    </Heading>
                    <InputField
                        noRight
                        name="from_email"
                        placeholder={t("contact.email.hint")}
                    />
                    <InputField
                        noRight
                        name="from_username"
                        placeholder={t("contact.username.hint")}
                    />

                    <TextField
                        h="150px"
                        resize="none"
                        name="message"
                        placeholder={t("contact.message.hint")}
                    />

                    <Button
                        p="6"
                        w="70%"
                        type="submit"
                        isLoading={ctx.isSubmitting}
                    >
                        {t("contact.button")}
                    </Button>
                </VStack>
            )}
        </Formik>
    );
}
