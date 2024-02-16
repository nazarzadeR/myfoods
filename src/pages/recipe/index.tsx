import RecipePage from "./components/RecipePage";
import RecipeProvider from "./context/RecipeContext";

export default function Recipe() {
    return (
        <RecipeProvider>
            <RecipePage />
        </RecipeProvider>
    );
}
