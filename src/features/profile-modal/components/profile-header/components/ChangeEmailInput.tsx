import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Box, HStack } from "@chakra-ui/react";

import { useAuth } from "@/contexts";
import { ButtonField, InputField, SendIcon } from "@/components";
import { UserEmailSchema } from "@/schema/auth";
import useEmailChange from "../hook/useEmailChange";

type TCredential = {
    email: string;
};

export default function ChangeEmailInput() {
    const { user } = useAuth();
    const { t } = useTranslation();
    const { mutateAsync } = useEmailChange();

    const isInitialAndCurrentDifferent = (initial: string, current: string) =>
        initial !== current;

    const onSubmit = async ({ email }: TCredential) => {
        await mutateAsync(email);
    };

    return (
        <Box w="full">
            <Formik
                onSubmit={onSubmit}
                validationSchema={UserEmailSchema(t)}
                initialValues={{
                    email: user?.email || "",
                }}
            >
                {(ctx) => (
                    <Form>
                        <HStack>
                            <InputField
                                type="email"
                                id="email"
                                name="email"
                                placeholder={user?.email || ""}
                            />

                            {isInitialAndCurrentDifferent(
                                ctx.initialValues.email,
                                ctx.values.email,
                            ) && (
                                <ButtonField
                                    size="lg"
                                    type="submit"
                                    colorScheme="green"
                                    isLoading={ctx.isSubmitting}
                                >
                                    <SendIcon color="white" />
                                </ButtonField>
                            )}
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}
