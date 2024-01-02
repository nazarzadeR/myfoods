import axios from "axios";

export const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export const RECIPES_ENDPOINT = axios.create({
    baseURL: new URL(
        "api/recipes/v2",
        import.meta.env.VITE_RECIPE_URL,
    ).toString(),
    headers: {
        "Content-Type": "application/json",
    },
});
