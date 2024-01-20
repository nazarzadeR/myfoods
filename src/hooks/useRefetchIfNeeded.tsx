import { refetchRecipes } from "@/store";
export default function useUpdateIfNeeded() {
    return () => {
        const hasRecipeSetting =
            !!localStorage.getItem("recipes_settings")?.length;

        if (hasRecipeSetting) return null;

        refetchRecipes();
    };
}
