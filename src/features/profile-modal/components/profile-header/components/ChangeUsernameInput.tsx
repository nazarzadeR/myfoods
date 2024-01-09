import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Box, Spinner } from "@chakra-ui/react";

import { useAuth } from "@/contexts";
import { InputField } from "@/components";
import { UsernameSchema } from "@/schema/auth";
import useUsernameUpdate from "../hook/useUsernameChange";

type TCredential = {
    username: string;
};

export default function ChangeUsernameInput() {
    const { user } = useAuth();
    const { t } = useTranslation();
    const { mutateAsync } = useUsernameUpdate();

    const onKeyDownOfEnter = (e: React.KeyboardEvent<HTMLFormElement>) =>
        e.key === "Enter";

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
                    <Form
                        onKeyDown={(e) =>
                            onKeyDownOfEnter(e) && ctx.handleSubmit()
                        }
                    >
                        <InputField
                            type="text"
                            id="username"
                            name="username"
                            placeholder={user?.displayName || ""}
                            right={
                                ctx.isSubmitting
                                    ? ((<Spinner size="sm" />) as any)
                                    : undefined
                            }
                        />
                    </Form>
                )}
            </Formik>
        </Box>
    );
}
