import { useTranslation } from "react-i18next";

import {
    Modal,
    Center,
    ModalBody,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
} from "@chakra-ui/react";

import RecipeSettingForm from "./components/RecipeForm";

type Props = TProps<{
    isOpen: boolean;
    onClose(): void;
}>;

export default function RecipesSettingModal(props: Props) {
    const { t } = useTranslation();

    return (
        <Modal
            {...props}
            isCentered
            scrollBehavior="inside"
            motionPreset="slideInTop"
            size={{
                base: "sm",
                md: "md",
                lg: "lg",
            }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                    <Center w="full" h="full">
                        {t("words.recipes_settings")}
                    </Center>
                </ModalHeader>
                <ModalBody>
                    <RecipeSettingForm />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
