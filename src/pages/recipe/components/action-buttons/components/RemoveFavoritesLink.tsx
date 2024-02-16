import { useNavigate } from "react-router";

import ActionLink from "./ActionLink";
import { DeleteIcon } from "@/components";
import useRemoveFavorites from "@/pages/recipe/hooks/useRemoveFavorites";
import { useRecipeContext } from "@/pages/recipe/context/RecipeContext";
import { Spinner } from "@chakra-ui/react";

export default function RemoveFavoritesLink() {
    const navigate = useNavigate();
    const { removeFavorites } = useRemoveFavorites();
    const { recipe, isFavorites } = useRecipeContext();

    const removeFromFavorites = async () => {
        await removeFavorites.mutateAsync(recipe, {
            onSuccess() {
                navigate("/favorites");
            },
        });
    };

    if (!isFavorites) return null;

    return (
        <ActionLink
            onClick={removeFromFavorites}
            _hover={{
                borderColor: "red.300",
                "& > *": {
                    color: "red.300",
                },
            }}
        >
            {removeFavorites.isLoading ? (
                <Spinner size="sm" />
            ) : (
                <DeleteIcon fontSize="xl" />
            )}
        </ActionLink>
    );
}
