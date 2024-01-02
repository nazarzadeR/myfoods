import {
    Modal,
    Heading,
    ModalBody,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
} from "@chakra-ui/react";
import { match } from "ts-pattern";
import { useTranslation } from "react-i18next";

 
import useAuthModal from "./store/auth-mode";
import { LoginForm, RegisterForm, OtherWays } from "./components";

type Props = TProps<{
    isOpen: boolean;
    onClose(): void;
}>;

export default function AuthModalLayout(props: Props) {
    const { t } = useTranslation();
    const { authMode } = useAuthModal();

    const Form = match(authMode)
        .returnType<React.ComponentType>()
        .with("LOGIN", () => LoginForm)
        .with("OTHER", () => OtherWays)
        .with("REGISTER", () => RegisterForm)
        .otherwise(() => LoginForm);

    return (
        <Modal
            isCentered
            motionPreset="scale"
            size={{
                base: "sm",
                sm: "md"
            }}
            {...props}
        >
            <ModalContent p="2" minH="250px">
                <ModalCloseButton />
                <ModalHeader
                    pb="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading fontSize="xx-large" letterSpacing="px">
                        {t(`auth.title.${authMode.toLowerCase()}`)}
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <Form />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
