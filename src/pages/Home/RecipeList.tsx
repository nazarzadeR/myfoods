import React from "react";
import { nanoid } from "nanoid";
import { Flex, WrapItem } from "@chakra-ui/react";

import useRecipe from "stores/recipe";
import useSetting from "stores/settings";
import { DesktopCard, MobileCard, Loader } from "components";

const RecipeList = () => {
    const { device, pagCord } = useSetting();
    const { recipes, hasRecipe } = useRecipe();
    const isDeviceMobile = device === "MOBILE";

    if (!hasRecipe()) return <Loader />;

    const { from, to } = pagCord();
    const pagination = recipes.slice(from, to);

    return (
        <Flex
            my="8"
            as="ul"
            gap="20px"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
        >
            {React.Children.toArray(
                pagination.map(({ recipe }: any) => (
                    <WrapItem key={nanoid()}>
                        {isDeviceMobile ? (
                            <MobileCard recipe={recipe} />
                        ) : (
                            <DesktopCard recipe={recipe} />
                        )}
                    </WrapItem>
                ))
            )}
        </Flex>
    );
};

export default RecipeList;
