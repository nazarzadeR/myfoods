import { Center, Container } from "@chakra-ui/react";

import MagicForm from "./components/Form";

export default function Login() {
    return (
        <Center w="full" h="full" alignItems="center" justifyContent="center">
            <Container
                mx="auto"
                display="flex"
                w="container.sm"
                justifyContent="center"
                alignContent="center"
            >
                <MagicForm />
            </Container>
        </Center>
    );
}
