import React from "react";
import { useMutation } from "react-query";

import useToast from "./useToast";
import recipes from "services/api";
import useRecipes from "stores/recipe";

const useRecipe = () => {
    const toast = useToast();
    const { setRecipes } = useRecipes();
    const recipeMutation = useMutation(recipes, {
        onSuccess: (data, variables, context) => {
            setRecipes(data.data.hits)
        },
        onError: (data, variables, context) => {
            toast({
                status: "error",
                description: "Something went wrong",
            });
        },
    });

    return recipeMutation;
};

export default useRecipe;
