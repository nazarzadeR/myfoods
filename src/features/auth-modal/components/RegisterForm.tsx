import { Formik, Form, FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { Stack, Text, HStack } from "@chakra-ui/react";

import useAuthModal from "../store/auth-mode";
import useRegister from "../hooks/useRegister";
import { RegisterSchema } from "../schema/auth-schema";
import { InputField, ButtonField } from "@/components";

export default function RegisterForm() {
    const { t } = useTranslation();
    const registerAuth = useRegister();
    const { setAuthMode } = useAuthModal();

    const goToLoginModal = () => setAuthMode("LOGIN");
    const goToOtherWaysModal = () => setAuthMode("OTHER");

    const onSubmit = async (
        data: Api.TAuthWithConfirm,
        _: FormikHelpers<Api.TAuthWithConfirm>,
    ) => {
        registerAuth.mutateAsync(data, {
            onSettled(response) {
                console.log(response);
            },
        });
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={RegisterSchema(t)}
            initialValues={{ email: "", password: "", confirm: "" }}
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
                        autoComplete="new-password"
                        placeholder={t("auth.password.hint")}
                    />

                    <InputField
                        pwd
                        name="confirm"
                        type="password"
                        autoComplete="new-password"
                        placeholder={t("auth.confirm.hint")}
                    />

                    <HStack w="full" px="2" boxSizing="border-box">
                        <Text
                            w="70%"
                            flexGrow="7"
                            flexShrink="0"
                            color="teal.400"
                            cursor="pointer"
                            fontWeight="bolder"
                            onClick={goToLoginModal}
                            _hover={{
                                color: "teal.300",
                            }}
                        >
                            {t("auth.link.register")}
                        </Text>

                        <Text
                            w="30%"
                            flexGrow="3"
                            color="teal.400"
                            cursor="pointer"
                            textAlign="right"
                            fontWeight="bolder"
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
                        {t("auth.action.register")}
                    </ButtonField>
                </Stack>
            )}
        </Formik>
    );
}
