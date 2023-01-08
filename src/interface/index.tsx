export enum MenuType {
    MAIN = "MAIN",
    SETTING = "SETTING",
    PAG = "PAG",
}

export interface IRecipeObj {
    recipe: IRecipe;
}

export interface IRecipe {
    calories: number;
    cautions: string[];
    cuisineType: string[];
    dietLabels: string[];
    digest: IDigest;
    dishType: string[];
    healthLabels: string[];
    image: string;
    ingredientLines: string[];
    ingredients: IIngredient[];
    label: string;
    mealType: string[];
    shareAs: string;
    source: string;
    totalDaily: ITotalDaily;
    totalNutrients: ITotalDaily;
    totalTime: number;
    totalWeight: number;
    uri: string;
    url: string;
}

export interface IDigest {
    hasRDI: boolean;
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    sub?: IDigest[];
    unit: string;
    daily: number;
}

export interface IIngredient {
    food: string;
    foodCategory: string;
    foodId: string;
    image: string;
    measure: string;
    quantity: number;
    text: string;
    weight: number;
}

export interface ITotalDaily {
    CA: ITotalDailyVal;
    CHOCDF: ITotalDailyVal;
    CHOLE: ITotalDailyVal;
    ENERC_KCAL: ITotalDailyVal;
    FASAT: ITotalDailyVal;
    FAT: ITotalDailyVal;
    FE: ITotalDailyVal;
    FIBTG: ITotalDailyVal;
    FOLDFE: ITotalDailyVal;
    K: ITotalDailyVal;
    MG: ITotalDailyVal;
    NA: ITotalDailyVal;
    NIA: ITotalDailyVal;
    P: ITotalDailyVal;
    PROCNT: ITotalDailyVal;
    RIBF: ITotalDailyVal;
    THIA: ITotalDailyVal;
    TOCPHA: ITotalDailyVal;
    VITA_RAE: ITotalDailyVal;
    VITB6A: ITotalDailyVal;
    VITB12: ITotalDailyVal;
    VITC: ITotalDailyVal;
    VITD: ITotalDailyVal;
    VITK1: ITotalDailyVal;
    ZN: ITotalDailyVal;
}

interface ITotalDailyVal {
    label: string;
    quantity: number;
    unit: string;
}
