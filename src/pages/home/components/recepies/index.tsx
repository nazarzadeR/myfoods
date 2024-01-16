import { lazy } from "react";
import { map } from "lodash";

import Card from "./components/Card";
import { DynamicLoader } from "@/components";
import InfinityPagination from "../InfinityPagination";
import { useRecipeStore } from "@/pages/home/store/recipe";
import SelectedRecipeModal from "./components/RecipeDetailedModal";
import SelectedRecipeProvider from "./context/SelectedRecipeContext";

//! TODO: Complete other situation

const NoHits = lazy(() => import("./components/NotHits"));
const NothingSearched = lazy(() => import("./components/NothingSearched"));

export default function Recipes() {
    const { hasHits, getHits, hasResponse } = useRecipeStore();

    const hits = getHits();

    // * Return loading state
    // if(isLoading)

    if (!hasResponse()) return <DynamicLoader comp={<NothingSearched />} />;

    if (!hasHits()) return <DynamicLoader comp={<NoHits />} />;

    return (
        <SelectedRecipeProvider>
            {map(hits, (hit, idx) => (
                <Card key={idx} hit={hit} />
            ))}
            <SelectedRecipeModal />
            <InfinityPagination />
        </SelectedRecipeProvider>
    );
}
