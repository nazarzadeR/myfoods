import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Box, HStack } from "@chakra-ui/react";

import { useAuth } from "@/contexts";
import { UsernameSchema } from "@/schema/auth";
import useUsernameUpdate from "../hook/useUsernameChange";
import { InputField, ButtonField, SendIcon } from "@/components";

type TCredential = {
    username: string;
};

export default function ChangeUsernameInput() {
    const { user } = useAuth();
    const { t } = useTranslation();
    const { mutateAsync } = useUsernameUpdate();

    const isInitialAndCurrentDifferent = (initial: string, current: string) =>
        initial !== current;

    const onSubmit = async ({ username }: TCredential) => {
        await mutateAsync(username);
    };

    return (
        <Box w="full">
            <Formik
                onSubmit={onSubmit}
                validationSchema={UsernameSchema(t)}
                initialValues={{
                    username: user?.displayName || "",
                }}
            >
                {(ctx) => (
                    <Form>
                        <HStack>
                            <InputField
                                type="text"
                                id="username"
                                name="username"
                                placeholder={user?.displayName || ""}
                            />
                            {isInitialAndCurrentDifferent(
                                ctx.initialValues.username,
                                ctx.values.username,
                            ) && (
                                <ButtonField
                                size="lg"
                                    type="submit"
                                    isLoading={ctx.isSubmitting}
                                    colorScheme="green"
                                >
                                    <SendIcon />
                                </ButtonField>
                            )}
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}
