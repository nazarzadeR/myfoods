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
import { LoginForm, RegisterForm, OtherWays, MagicForm } from "./components";

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
        .with("MAGIC", () => MagicForm)
        .with("REGISTER", () => RegisterForm)
        .otherwise(() => LoginForm);

    return (
        <Modal
            isCentered
            motionPreset="scale"
            size={{
                sm: "sm",
                md: "md"
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
                    <Heading
                        letterSpacing="px"
                        fontSize={["x-large", "xx-large"]}
                    >
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
