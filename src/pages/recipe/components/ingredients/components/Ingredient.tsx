import { Card, Image, CardBody, Text, Center } from "@chakra-ui/react";

type Props = TProps<{
    ingredient: Recipe.TIngredient;
}>;

export default function Ingredient({ ingredient: { text, image } }: Props) {
    return (
        <Card
            as="li"
            w="90%"
            minW="310px"
            maxW="480px"
            direction="row"
            variant="outline"
        >
            <Image
                alt={text}
                src={image}
                objectFit="cover"
                borderLeftRadius="md"
                maxW={{ base: "80px", sm: "100px" }}
            />

            <CardBody>
                <Center as={Text} h="full" w="full" textAlign="center">
                    {text}
                </Center>
            </CardBody>
        </Card>
    );
}
