import React from "react";

import { nanoid } from "nanoid";
import { useParams, Navigate } from "react-router";
import { Center, Text, Card, VStack, CardBody, Image, Box } from "@chakra-ui/react";

import Thumbnail from "./Thumbnail";
import useRecipe from "stores/recipe";

const Recipe = () => {
    const { slug } = useParams();
    const { getRecipe } = useRecipe();

    if (!slug) return <Navigate to="/" replace />;

    const recipe = getRecipe(slug);

    if (!recipe) return <Navigate to="/" replace />;

    const { label, totalTime, calories, ingredients } = recipe;

    return (
        <>
            <Thumbnail recipe={recipe} />
            <Center w="80%" marginInline="auto" textAlign="center" my="4">
                <Text size={["sm", "md", "lg"]}>
                    {label} recipes take a {totalTime} minutes to cook and have{" "}
                    {calories.toFixed(0)} calories.
                </Text>
            </Center>
            <VStack>
                {ingredients.map((ing) => (
                    <Card
                        width={[ "95%", "80%" ]}
                        maxW="400px"
                        maxH="100px"
                        key={nanoid()}
                        variant="filled"
                        direction="row"

                        sx={{
                            "&:last-child": {
                                marginBottom: "20px"
                            }
                        }}

                    >
                        <Box width="120px" height="90px" marginBlock="auto">
                            <Image w="full" h="full" src={ing.image} borderLeftRadius="base" />
                        </Box>

                        <CardBody>
                            <Text>
                                { ing.text }
                            </Text>
                        </CardBody>
                    </Card>
                ))}
            </VStack>
        </>
    );
};

export default Recipe;
