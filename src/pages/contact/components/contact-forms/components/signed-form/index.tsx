import { useAuth } from "@/contexts";
import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers } from "formik";
import { VStack, Heading, Button } from "@chakra-ui/react";

import { TextField } from "@/components";
import { messageSchema } from "../../schema";
import useEmailjs from "../../hooks/useEmailjs";

type Params = Pick<Api.TEmailJSParams, "message">;

export default function WithAuthForm() {
    const { user } = useAuth();
    const { t } = useTranslation();
    const { emailJSMutation } = useEmailjs();

    const onSubmit = async (
        { message }: Params,
        helpers: FormikHelpers<Params>,
    ) => {
        if (!!!user) return;

        const userMeta: Api.TEmailJSParams = {
            message,
            from_email: user.email || "",
            from_username: user.displayName || "",
        };

        await emailJSMutation.mutateAsync(userMeta, {
            onSettled() {
                helpers.resetForm();
                helpers.setSubmitting(false);
            },
        });
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={messageSchema(t)}
            initialValues={{
                message: "",
            }}
        >
            {(ctx) => (
                <VStack as={Form} gap="4" w="full" maxW="360px">
                    <VStack>
                        <Heading size="lg">{t("contact.title")}</Heading>

                        <Heading mb="2" size={{ base: "sm", md: "md" }}>
                            {t("contact.singedHelper")}
                        </Heading>
                    </VStack>

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
