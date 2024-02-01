import { Flex, Center, Hide } from "@chakra-ui/react";

import ContactRoom from "./components/contact-room";
import ContactForm from "./components/contact-forms";

export default function Contact() {
    return (
        <Flex
            mx="2"
            h="full"
            w="full"
            position="relative"
            alignContent="center"
        >
            <Center w={{ base: "full", lg: "40%" }}>
                <ContactForm />
            </Center>

            <Hide below="lg">
                <Center w="full">
                    <ContactRoom />
                </Center>
            </Hide>
        </Flex>
    );
}
