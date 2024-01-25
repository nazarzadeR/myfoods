import {
    Alert,
    AlertIcon,
    AlertTitle,
    CloseButton,
    AlertDescription,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type Props = TProps<{
    onClose(): void;
}>;

export default function SendedAlert({ onClose }: Props) {
    const { t } = useTranslation();

    return (
        <Alert
            gap="2"
            minH="200px"
            status="success"
            variant="subtle"
            borderRadius="md"
            textAlign="center"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            position="relative"
        >
            <AlertIcon />
            <AlertTitle fontSize="lg">
                {t("success.RESET_PASS_SENDED.TITLE")}
            </AlertTitle>
            <AlertDescription fontSize="sm">
                {t("success.RESET_PASS_SENDED.DESCRIPTION")}
            </AlertDescription>

            <CloseButton
                top={1}
                right={2}
                onClick={onClose}
                position="absolute"
                alignSelf="flex-start"
            />
        </Alert>
    );
}
