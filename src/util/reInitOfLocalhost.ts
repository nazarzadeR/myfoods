import useRecipe from "stores/recipe";

export default async function () {
    let isHasRecipe = await localStorage.getItem("recipe");

    if (!isHasRecipe) return false;

    await localStorage.removeItem("recipe");

    await useRecipe.getState().setRecipes([]);

    return true;
}
