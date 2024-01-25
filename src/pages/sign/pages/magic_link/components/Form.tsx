import { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { VStack, Heading, Box, Text } from "@chakra-ui/react";

import LinkSendedAlert from "./SendedAlert";
import { UserEmailSchema } from "@/schema/auth";
import { InputField, EmailIcon, ButtonField } from "@/components";
import useSendEmailLink from "@/pages/sign/hooks/useSendEmailLink";

type TCredential = {
    email: string;
};

export default function MagicForm() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { mutateAsync } = useSendEmailLink();
    const [isSended, setSended] = useState(false);

    const onClose = () => setSended(false);
    const backToLogin = () => navigate("/sign");

    const onSubmit = async ({ email }: TCredential) => {
        await mutateAsync(email, {
            onError: () => setSended(false),
            onSuccess: () => setSended(true),
        });
    };

    if (isSended) return <LinkSendedAlert onClose={onClose} />;

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{ email: "" }}
            validationSchema={UserEmailSchema(t)}
        >
            {(ctx) => (
                <VStack as={Form} spacing="4" maxW="320px">
                    <Heading fontSize="xx-large" textAlign="center">
                        {t("sign.head.login")}
                    </Heading>
                    <Box w="full">
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
