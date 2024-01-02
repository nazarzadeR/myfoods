declare namespace Api {
    type TTag = {
        id: string;
        text: string;
    };

    type TTags = TTag[];

    type TEmailJSParams = {
        message: string;
        from_email: string;
        from_username: string;
    };

    type TRecipeApiParams = {
        q?: string;
        tags?: TTags;
        minCalories: number;
        maxCalories: number;
        diet?: Recipes.TDiet;
        mealType?: Recipes.TMeal;
        dishType?: Recipes.TDish;
        health?: Recipes.THealth;
        cuisineType?: Recipes.TCuisine;
    };

    type TAuthWithEmailAndPassword = {
        email: string;
        password: string;
    };

    type TAuthWithConfirm = TAuthWithEmailAndPassword & {
        confirm: string;
    };
}
