import { Center, Container } from "@chakra-ui/react";

import RegisterForm from "./components/Form";

export default function Register() {
    return (
        <Center w="full" h="full" alignItems="center" justifyContent="center">
            <Container
                mx="auto"
                display="flex"
                w="container.sm"
                justifyContent="center"
                alignContent="center"
            >
                <RegisterForm />
            </Container>
        </Center>
    );
}
