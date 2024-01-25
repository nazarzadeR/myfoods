import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { HStack, Heading, VStack, Text } from "@chakra-ui/react";

import { RegisterSchema } from "@/schema/auth";
import { OtherWays } from "@/pages/sign/components";
import useRegister from "@/pages/sign/hooks/useRegister";
import { UserIcon, LockIcon, InputField, ButtonField } from "@/components";

export default function RegisterForm() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { mutateAsync } = useRegister();

    const toLogin = () => navigate("/sign");
    const onSubmit = async (credential: Api.TAuthWithEmailAndPassword) => {
        await mutateAsync(credential);
    };

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={RegisterSchema(t)}
            initialValues={{ email: "", password: "", confirm: "" }}
        >
            {(ctx) => (
                <VStack as={Form} gap="5" maxW="320px">
                    <Heading fontSize="xx-large" textAlign="center">
                        {t("sign.head.register")}
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
                    <InputField
                        pwd
                        id="confirm"
                        name="confirm"
                        placeholder={t("auth.confirm.hint")}
                        left={<LockIcon />}
                    />
                    <HStack w="full" gap="10">
                        <Text
                            fontSize="md"
                            color="teal.500"
                            cursor="pointer"
                            textAlign="start"
                            fontWeight="bolder"
                            onClick={toLogin}
                        >
                            {t("sign.link.register")}
                        </Text>
                    </HStack>

                    <OtherWays />

                    <ButtonField
                        w="60%"
                        size="md"
                        type="submit"
                        loading={ctx.isSubmitting}
                    >
                        {t("sign.button.register")}
                    </ButtonField>
                </VStack>
            )}
        </Formik>
    );
}
