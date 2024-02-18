import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import {
    Stack,
    Input,
    InputGroup,
    FormControl,
    FormErrorMessage,
    Center,
} from "@chakra-ui/react";

import { ButtonField } from "@/components";
import { UserProfilePicSchema } from "@/schema/base";
import useProfilePicChange from "../hook/useUserProfilPicChange";

export default function ProfilePictureChangeInput() {
    const { t } = useTranslation();
    const { mutateAsync } = useProfilePicChange();

    const formik = useFormik({
        initialValues: { userPicture: "" },
        validationSchema: UserProfilePicSchema(t),
        onSubmit: async ({ userPicture }) =>
            await mutateAsync(userPicture as any),
    });

    const hasError = !!formik.touched && !!formik.errors.userPicture;
    const onHandleChange = (e: any) =>
        formik.setFieldValue("userPicture", e.target.files[0]);

    return (
        <Center w="full">
            <Stack
                as="form"
                maxW="380px"
                onSubmit={formik.handleSubmit as any}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <FormControl isInvalid={hasError}>
                    <InputGroup size="lg">
                        <Input
                            type="file"
                            name="userPicture"
                            onChange={onHandleChange}
                        />
                    </InputGroup>
                    <FormErrorMessage fontSize="smaller">
                        {hasError && formik.errors.userPicture}
                    </FormErrorMessage>
                </FormControl>

                <ButtonField
                    h="48px"
                    type="submit"
                    colorScheme="green"
                    isLoading={formik.isSubmitting}
                >
                    {t("words.upload")}
                </ButtonField>
            </Stack>
        </Center>
    );
}
