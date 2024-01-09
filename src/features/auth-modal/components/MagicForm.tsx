import { useTranslation } from "react-i18next";
import { Form, Formik, FormikHelpers } from "formik";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";

import useAuthModal from "../store/auth-mode";
import { UserEmailSchema } from "@/schema/auth";
import useSendEmailLink from "../hooks/useSendEmailLink";
import { InputField, ButtonField, EmailIcon } from "@/components";

type TCredential = {
    email: string;
};

export default function MagicLink() {
    const { t } = useTranslation();
    const { setAuthMode } = useAuthModal();
    const { mutateAsync } = useSendEmailLink();

    const backToLogin = () => setAuthMode("LOGIN");

    const onSubmit = async (
        { email }: TCredential,
        _: FormikHelpers<TCredential>,
    ) => {
        await mutateAsync(email);
    };

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{ email: "" }}
            validationSchema={UserEmailSchema(t)}
        >
            {(ctx) => (
                <VStack as={Form} spacing="4">
                    <Box w="full" mb="2">
                        <Heading
                            as="h4"
                            textAlign="center"
                            fontSize={["small", "medium"]}
                        >
                            {t("auth.magicLink.info")}
                        </Heading>
                    </Box>
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        left={<EmailIcon />}
                        placeholder={t("auth.email.hint")}
                    />

                    <Text
                        w="full"
                        color="teal.400"
                        cursor="pointer"
                        fontWeight="bolder"
                        onClick={backToLogin}
                        _hover={{
                            color: "teal.300",
                        }}
                    >
                        {t("expressions.backToLogin")}
                    </Text>

                    <ButtonField
                        w="80%"
                        type="submit"
                        isLoading={ctx.isSubmitting}
                    >
                        {t("words.send")}
                    </ButtonField>
                </VStack>
            )}
        </Formik>
    );
}
