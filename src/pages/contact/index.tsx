import { Flex, Center, Hide } from "@chakra-ui/react";

import ContactRoom from "./components/contact-room";
import ContactForm from "./components/contact-forms";

export default function Contact() {
    return (
        <Flex
            mx="2"
            position="relative"
            w="full"
            h="full"
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
