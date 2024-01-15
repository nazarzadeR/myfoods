import { map } from "lodash";
import { nanoid } from "nanoid";

import Card from "./components/Card";
import { useRecipeStore } from "@/pages/home/store/recipe";
import SelectedRecipeModal from "./components/RecipeDetailedModal";
import SelectedRecipeProvider from "./context/SelectedRecipeContext";

//! TODO: Complete other situation

export default function Recipes() {
    const { hasHits, getHits } = useRecipeStore();

    const hits = getHits();

    // * Return loading state
    // if(isLoading)

    // Return if hits come but nothing inside it
    // if(!hasResponse()) return;

    if (!hasHits()) return;

    return (
        <SelectedRecipeProvider>
            {map(hits, (hit) => (
                <Card key={nanoid()} hit={hit} />
            ))}
            <SelectedRecipeModal />
        </SelectedRecipeProvider>
    );
}
