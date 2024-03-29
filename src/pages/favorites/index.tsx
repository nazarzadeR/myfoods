import { map, isEmpty } from "lodash";
import { Flex } from "@chakra-ui/react";

import NoFavorites from "./components/NoFavorites";
import useFavorites from "@/pages/favorites/hooks/useFavorites";
import { DynamicLoader, MultipleRoundSpinner } from "@/components";
import Card from "@/pages/home/components/recepies/components/Card";
import SelectedModal from "@/pages/home/components/recepies/components/RecipeDetailedModal";
import SelectedProvider from "@/pages/home/components/recepies/context/SelectedRecipeContext";

export default function Favorites() {
    const { favorites, isLoading } = useFavorites();

    if (isLoading) return <MultipleRoundSpinner />;
    if (isEmpty(favorites)) return <DynamicLoader comp={<NoFavorites />} />;

    return (
        <SelectedProvider>
            <Flex
                my="5"
                px="4"
                gap="3"
                w="full"
                h="full"
                flexWrap="wrap"
                alignContent="start"
                justifyContent="center"
            >
                {map(favorites, (recipe, idx) => (
                    <Card key={idx} recipe={recipe} />
                ))}
            </Flex>
            <SelectedModal favoriteCard />
        </SelectedProvider>
    );
}
