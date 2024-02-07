import { lazy } from "react";
import { map } from "lodash";

import Card from "./components/Card";
import { DynamicLoader } from "@/components";
import Pagination from "./components/Pagination";
import RecipeLoading from "./components/RecipeLoading";
import { useRecipeStore } from "@/pages/home/store/recipe";
import SelectedRecipeModal from "./components/RecipeDetailedModal";
import SelectedRecipeProvider from "./context/SelectedRecipeContext";

const NoHits = lazy(() => import("./components/NotHits"));
const NothingSearched = lazy(() => import("./components/NothingSearched"));

export default function Recipes() {
    const { hasHits, getHits, hasResponse, isLoading } = useRecipeStore();

    const hits = getHits();

    if (isLoading) return <RecipeLoading />;

    if (!hasResponse()) return <DynamicLoader comp={<NothingSearched />} />;

    if (!hasHits()) return <DynamicLoader comp={<NoHits />} />;

    return (
        <SelectedRecipeProvider>
            {map(hits, ({ recipe }, idx) => (
                <Card key={idx} recipe={recipe} />
            ))}
            <Pagination />
            <SelectedRecipeModal />
        </SelectedRecipeProvider>
    );
}
