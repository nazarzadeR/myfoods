import { Link } from "react-router-dom";
import React, { DetailedHTMLProps } from "react";
import { Box, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";

import { IRecipe } from "interface";

interface Props extends DetailedHTMLProps<any, any> {
    recipe: IRecipe;
}

const MobileCard: React.FC<Props> = ({ recipe }) => {
    let { label, image, totalTime, calories } = recipe;
    return (
        <VStack w="310px">
            <Box w="full" h="250px">
                <Image
                    w="full"
                    h="full"
                    src={image}
                    alt={label}
                    borderTopRadius="base"
                />
            </Box>

            <VStack
                w="full"
                h="195px"
                bg="bgDark"
                mt="0 !important"
                paddingBlock="3"
                borderBottomRadius="base"
                justifyContent="space-between"
            >
                <Heading w="80%" size="sm" textAlign="center" noOfLines={2}>
                    {label}
                </Heading>
                <Text w="80%" textAlign="center" fontSize="sm" fontWeight="bold" noOfLines={3}>
                    {label} recipes take a {totalTime} minutes to cook and have
                    {calories.toFixed(0)} calories.
                </Text>

                <Button as={Link} to={`favorite/${label}`} justifySelf="flex-end">
                    READ MORE
                </Button>
            </VStack>
        </VStack>
    );
};

export default MobileCard;
