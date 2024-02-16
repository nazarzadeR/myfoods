import { useNavigate } from "react-router";
import { Spinner } from "@chakra-ui/react";

import ActionLink from "./ActionLink";
import { useAuth } from "@/contexts";
import { DeleteIcon } from "@/components";
import useRemoveFavorites from "@/pages/recipe/hooks/useRemoveFavorites";
import { useRecipeContext } from "@/pages/recipe/context/RecipeContext";

export default function RemoveFavoritesLink() {
    const { hasUser } = useAuth();
    const navigate = useNavigate();
    const { recipe, isFavorites } = useRecipeContext();
    const { isLoading, mutateAsync } = useRemoveFavorites();

    const removeFromFavorites = async () => {
        await mutateAsync(recipe, {
            onSuccess() {
                navigate("/favorites");
            },
        });
    };

    if (!isFavorites || !hasUser) return null;

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
            {isLoading ? <Spinner size="sm" /> : <DeleteIcon fontSize="xl" />}
        </ActionLink>
    );
}
