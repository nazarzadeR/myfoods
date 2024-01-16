import { lazy } from "react";
import { map } from "lodash";
import { nanoid } from "nanoid";

import Card from "./components/Card";
import { DynamicLoader } from "@/components";
import { useRecipeStore } from "@/pages/home/store/recipe";
import SelectedRecipeModal from "./components/RecipeDetailedModal";
import SelectedRecipeProvider from "./context/SelectedRecipeContext";

//! TODO: Complete other situation

const NoHits = lazy(() => import("./components/NotHits"));
const NothingSearched = lazy(() => import("./components/NothingSearched"))

export default function Recipes() {
    const { hasHits, getHits, hasResponse } = useRecipeStore();

    const hits = getHits();

    // * Return loading state
    // if(isLoading)

    if(!hasResponse()) return <DynamicLoader comp={<NothingSearched />} />;

    if (!hasHits()) return <DynamicLoader comp={<NoHits />} />;

    return (
        <SelectedRecipeProvider>
            {map(hits, (hit) => (
                <Card key={nanoid()} hit={hit} />
            ))}
            <SelectedRecipeModal />
        </SelectedRecipeProvider>
    );
}
