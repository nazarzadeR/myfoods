import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { HStack, Heading, VStack, Text, Box } from "@chakra-ui/react";

import { LoginSchema } from "@/schema/auth";
import useLogin from "@/pages/sign/hooks/useLogin";
import { OtherWays } from "@/pages/sign/components";
import { UserIcon, LockIcon, InputField, ButtonField } from "@/components";

export default function LoginForm() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { mutateAsync } = useLogin();

    const toRegister = () => navigate("/sign/register");
    const toResetPass = () => navigate("/sign/forgot_pass");
    const onSubmit = async (credential: Api.TAuthWithEmailAndPassword) => {
        await mutateAsync(credential);
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={LoginSchema(t)}
            initialValues={{ email: "", password: "" }}
        >
            {(ctx) => (
                <VStack as={Form} gap="5" maxW="320px">
                    <Heading fontSize="xx-large" textAlign="center">
                        {t("sign.head.login")}
                    </Heading>

                    <InputField
                        noRight
                        id="email"
                        name="email"
                        left={<UserIcon />}
                        placeholder={t("auth.email.hint")}
                    />

                    <InputField
                        pwd
                        id="password"
                        name="password"
                        placeholder={t("auth.password.hint")}
                        left={<LockIcon />}
                    />

                    <HStack w="full" gap="10">
                        <Text
                            fontSize="md"
                            color="teal.500"
                            cursor="pointer"
                            textAlign="start"
                            fontWeight="bolder"
                            onClick={toResetPass}
                        >
                            {t("sign.link.forgot")}
                        </Text>
                    </HStack>

                    <OtherWays />

                    <ButtonField
                        size="md"
                        type="submit"
                        w="60%"
                        loading={ctx.isSubmitting}
                    >
                        {t("sign.button.login")}
                    </ButtonField>

                    <Text
                        fontSize="md"
                        color="gray.400"
                        alignSelf="center"
                        justifySelf="center"
                        fontWeight="bolder"
                    >
                        {t("sign.link.login")}
                        <Box
                            as="span"
                            cursor="pointer"
                            color="teal.500"
                            fontWeight="bolder"
                            onClick={toRegister}
                        >
                            &nbsp; {t("sign.button.register")}
                        </Box>
                    </Text>
                </VStack>
            )}
        </Formik>
    );
}
