import { Center, Container } from "@chakra-ui/react";

import useCheckOop from "./hooks/useCheckOop";
import ResetPasswordForm from "./components/ResetPasswordForm";
import SendLinkToEmailForm from "./components/SendLinkToEmailForm";

export default function ForgotPass() {
    const isOopReceived = useCheckOop();

    return (
        <Center w="full" h="full" alignItems="center" justifyContent="center">
            <Container
                mx="auto"
                display="flex"
                w="container.sm"
                justifyContent="center"
                alignContent="center"
            >
                {isOopReceived ? (
                    <ResetPasswordForm />
                ) : (
                    <SendLinkToEmailForm />
                )}
            </Container>
        </Center>
    );
}
