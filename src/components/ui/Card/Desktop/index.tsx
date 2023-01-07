import React, { DetailedHTMLProps } from "react";
import { Box, Image, Heading, VStack, Grid, Text } from "@chakra-ui/react";

import { IRecipe } from "interface";
import Button from "./Button";

interface Props extends DetailedHTMLProps<any, any> {
    recipe: IRecipe;
}

const DesktopCard: React.FC<Props> = ({ recipe }) => {
    let { label, image, ingredientLines } = recipe;

    return (
        <Box
            w="315px"
            h="270px"
            borderRadius="base"
            _hover={{
                "& > div": {
                    transform: "rotateY(180deg)",
                },
            }}
        >
            <Grid
                w="full"
                h="full"
                boxShadow="lg"
                borderRadius="lg"
                position="relative"
                templateColumns="1fr"
                transition=".6s linear"
                sx={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                }}
            >
                <Box
                    w="full"
                    h="full"
                    gridArea="1/1"
                    borderRadius="base"
                    position="absolute"
                    sx={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <Image
                        w="full"
                        h="full"
                        src={image}
                        alt={label}
                        borderRadius="base"
                    />
                </Box>

                <VStack
                    bg="bgDark"
                    gridArea="1/1"
                    borderRadius="base"
                    justifyContent="space-between"
                    sx={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <Heading
                        my="4"
                        as="h3"
                        size="sm"
                        textAlign="center"
                        noOfLines={2}
                    >
                        {label}
                    </Heading>

                    <VStack as="ul" listStyleType="none" mx="2">
                        {React.Children.toArray(
                            ingredientLines.slice(0, 3).map((ingredient) => (
                                <Text
                                    as="li"
                                    fontSize="sm"
                                    mt="1 !important"
                                    textAlign="center"
                                >
                                    {ingredient.substring(0, 80)}
                                </Text>
                            ))
                        )}
                    </VStack>

                    <Button name={label}  />
                </VStack>
            </Grid>
        </Box>
    );
};

export default DesktopCard;
