import useRecipe from "stores/recipe";

export default async function () {
    let isHasRecipe = await localStorage.getItem("recipes");

    if (!isHasRecipe) return false;

    await localStorage.removeItem("recipes");

    await useRecipe.getState().setRecipes([]);

    return true;
}
