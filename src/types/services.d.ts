declare namespace Api {
    type TFirebaseErrorCodes =
        | "auth/quota-exceeded"
        | "auth/too-many-requests"
        | "auth/invalid-credential"
        | "auth/operation-not-allowed"
        | "auth/email-already-in-use"
        | "auth/popup-closed-by-user"
        | "auth/credential-already-in-use"
        | "account-exists-with-different-credential";

    type TFirebaseException = {
        name: string;
        message: string;
        code: TFirebaseErrorCodes;
    };

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

    type TRecipeApiResponse = AxiosResponse<Recipe.TRecipesResponseType, any>;

    type TAuthWithEmailAndPassword = {
        email: string;
        password: string;
    };

    type TAuthWithConfirm = TAuthWithEmailAndPassword & {
        confirm: string;
    };
}
