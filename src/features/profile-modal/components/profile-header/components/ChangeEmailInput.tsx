import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Box, Spinner } from "@chakra-ui/react";

import { useAuth } from "@/contexts";
import { InputField } from "@/components";
import { UserEmailSchema } from "@/schema/auth"
import useEmailChange from "../hook/useEmailChange";

type TCredential = {
    email: string
};

export default function ChangeEmailInput() {
    const { user } = useAuth();
    const { t } = useTranslation()
    const { mutateAsync } = useEmailChange();

    const onKeyDownOfEnter = (e: React.KeyboardEvent<HTMLFormElement>) =>
        e.key === "Enter";

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
                    <Form
                        onKeyDown={(e) =>
                            onKeyDownOfEnter(e) && ctx.handleSubmit()
                        }
                    >
                        <InputField
                            type="email"
                            id="email"
                            name="email"
                            placeholder={user?.email || ""}
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
