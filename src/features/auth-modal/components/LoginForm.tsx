import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers } from "formik";
import { Stack, HStack, Text } from "@chakra-ui/react";

import useAuthModal from "../store/auth-mode";
import { LoginSchema } from "../schema/auth-schema";
import { InputField, ButtonField } from "@/components";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
    const { t } = useTranslation();
    const loginAuth = useLogin();
    const { setAuthMode } = useAuthModal();

    const goToOtherWaysModal = () => setAuthMode("OTHER");
    const goToRegisterModal = () => setAuthMode("REGISTER");

    const onSubmit = async (
        data: Api.TAuthWithEmailAndPassword,
        _: FormikHelpers<Api.TAuthWithEmailAndPassword>,
    ) => {
        await loginAuth.mutateAsync(data, {
            onSettled(response) {
                console.log(response);
            },
        });
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={LoginSchema(t)}
            initialValues={{ email: "", password: "" }}
        >
            {(ctx) => (
                <Stack
                    p="4"
                    as={Form}
                    spacing="5"
                    justifyContent="center"
                    alignItems="center"
                >
                    <InputField
                        name="email"
                        autoComplete="email"
                        placeholder={t("auth.username.hint")}
                    />

                    <InputField
                        pwd
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder={t("auth.password.hint")}
                    />

                    <HStack
                        w="full"
                        px="2"
                        fontWeight="bold"
                        boxSizing="border-box"
                    >
                        <Text
                            w="full"
                            color="teal.400"
                            cursor="pointer"
                            onClick={goToRegisterModal}
                            _hover={{
                                color: "teal.300",
                            }}
                        >
                            {t("auth.link.login")}
                        </Text>

                        <Text
                            w="full"
                            color="teal.400"
                            cursor="pointer"
                            textAlign="right"
                            onClick={goToOtherWaysModal}
                            _hover={{
                                color: "teal.300",
                            }}
                        >
                            {t("auth.link.otherWays")}
                        </Text>
                    </HStack>

                    <ButtonField
                        w="80%"
                        h="45px"
                        type="submit"
                        fontSize="large"
                        loading={ctx.isSubmitting}
                    >
                        {t("auth.action.login")}
                    </ButtonField>
                </Stack>
            )}
        </Formik>
    );
}
