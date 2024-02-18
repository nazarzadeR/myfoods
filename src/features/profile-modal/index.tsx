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

import ProfileModalInner from "./components/ProfileModalInner";

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
                base: "full",
                sm: "lg",
            }}
        >
            <ModalOverlay />
            <ModalContent
                overflowY="scroll"
                sx={modalContentSX}
                bg={{
                    base: "chakra-body-bg",
                    sm: "chakra-subtle-bg",
                }}
            >
                <ModalCloseButton />
                <ModalHeader>
                    <Center w="full" h="full">
                        {t("words.profile")}
                    </Center>
                </ModalHeader>
                <ModalBody
                    minH={{
                        base: "full",
                    }}
                >
                    <ProfileModalInner />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

const modalContentSX = {
    "::-webkit-scrollbar": {
        display: "none",
    },
};
