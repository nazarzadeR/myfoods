import { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { VStack, Heading, Text } from "@chakra-ui/react";

import LinkSendedAlert from "./SendedAlert";
import { UserEmailSchema } from "@/schema/auth";
import { InputField, EmailIcon, ButtonField } from "@/components";
import useSendResetLink from "@/pages/sign/hooks/useSendResetLink";

type TCredential = {
    email: string;
};

export default function SendLinkToEmail() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { mutateAsync } = useSendResetLink();
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
                    <VStack w="full">
                        <Heading
                            textAlign="center"
                            fontSize={{
                                md: "xx-large",
                                base: "x-large",
                            }}
                        >
                            {t("sign.head.forgotPass")}
                        </Heading>
                        <Heading
                            as="h4"
                            textAlign="center"
                            fontSize={["small", "medium"]}
                        >
                            {t("auth.resetPass.info")}
                        </Heading>
                    </VStack>
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
