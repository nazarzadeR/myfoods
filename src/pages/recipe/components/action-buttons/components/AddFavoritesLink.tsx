import { Spinner } from "@chakra-ui/react";

import ActionLink from "./ActionLink";
import { FavoriteIcon } from "@/components";
import useQuickAddFavorite from "@/pages/home/hooks/useQuickAddFavorite";
import { useRecipeContext } from "@/pages/recipe/context/RecipeContext";
import { useAuth } from "@/contexts";

export default function AddFavoritesLink() {
    const { hasUser } = useAuth();
    const { isLoading, mutateAsync } = useQuickAddFavorite();
    const { recipe, isFavorites, refetch } = useRecipeContext();

    const addFavorites = async () => {
        await mutateAsync(recipe, {
            onSuccess() {
                refetch();
            },
        });
    };

    if (isFavorites || !hasUser) return null;

    return (
        <ActionLink onClick={addFavorites}>
            {isLoading ? <Spinner size="sm" /> : <FavoriteIcon fontSize="xl" />}
        </ActionLink>
    );
}
