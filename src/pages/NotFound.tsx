import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Center, Text, VStack, Button } from "@chakra-ui/react";

import { Loader } from "components";
import { Home } from "components/svgs";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate("/", { replace: true });
    };
    return (
        <Center
            top="50%"
            left="50%"
            position="absolute"
            transform="translate(-50%, -50%)"
        >
            <VStack>
                <Text
                    my="4"
                    fontSize="2xl"
                    fontWeight="bolder"
                    letterSpacing="wider"
                >
                    404 Not Found
                </Text>
                <Loader cursor="pointer" onClick={handleClickBack}>
                    <Home fontSize="2rem" />
                </Loader>
            </VStack>
        </Center>
    );
};

export default NotFound;
