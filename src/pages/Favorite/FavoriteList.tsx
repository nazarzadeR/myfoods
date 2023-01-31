import React from "react";
import { nanoid } from "nanoid";
import { Flex, WrapItem } from "@chakra-ui/react";

import useRecipe from "stores/recipe";
import useSetting from "stores/settings";
import { DesktopCard, MobileCard, Loader } from "components";

const FavoriteList = () => {
    const { device, } = useSetting();
    const { favorites  } = useRecipe();
    const isDeviceMobile = device === "MOBILE";

    if (!(favorites.length > 0)) return <Loader h="100%" />;


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
                favorites.map(({ recipe }: any) => (
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

export default FavoriteList;
