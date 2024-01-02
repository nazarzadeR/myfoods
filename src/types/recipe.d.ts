declare namespace Recipe {
    type TMeal =
        | "breakfast"
        | "brunch"
        | "lunch"
        | "dinner"
        | "snack"
        | "teatime";

    type TDiet =
        | "balanced"
        | "high-fiber"
        | "high-protein"
        | "low-carb"
        | "low-fat"
        | "low-sodium";

    type TDish =
        | "alcohol cocktail"
        | "biscuits and cookies"
        | "bread"
        | "cereals"
        | "condiments and sauces"
        | "desserts"
        | "drinks"
        | "egg"
        | "ice cream and custard"
        | "main course"
        | "pancake"
        | "pasta"
        | "pastry"
        | "pies and tarts"
        | "pizza"
        | "preps"
        | "preserve"
        | "salad"
        | "sandwiches"
        | "seafood"
        | "side dish"
        | "soup"
        | "starter"
        | "sweets";

    type THealth =
        | "alcohol-cocktail"
        | "alcohol-free"
        | "celery-free"
        | "crustacean-free"
        | "dairy-free"
        | "DASH"
        | "egg-free"
        | "fish-free"
        | "fodmap-free"
        | "gluten-free"
        | "immuno-supportive"
        | "keto-friendly"
        | "kidney-friendly"
        | "kosher"
        | "low-potassium"
        | "low-sugar"
        | "lupine-free"
        | "Mediterranean"
        | "mollusk-free"
        | "mustard-free"
        | "No-oil-added"
        | "paleo"
        | "peanut-free"
        | "pecatarian"
        | "pork-free"
        | "red-meat-free"
        | "sesame-free"
        | "shellfish-free"
        | "soy-free"
        | "sugar-conscious"
        | "sulfite-free"
        | "tree-nut-free"
        | "vegan"
        | "vegetarian"
        | "wheat-free";

    type TCuisine =
        | "american"
        | "asian"
        | "british"
        | "caribbean"
        | "central europe"
        | "chinese"
        | "eastern europe"
        | "french"
        | "greek"
        | "indian"
        | "italian"
        | "japanese"
        | "korean"
        | "kosher"
        | "mediterranean"
        | "mexican"
        | "middle eastern"
        | "nordic"
        | "south american"
        | "south east asian"
        | "world";

    type TLinksInner = {
        href: string;
        title: string;
    };

    type TLinks = {
        self: TLinksInner;
        next: TLinksInner;
    };

    type THit = {
        recipe: TRecipe;
        _links: TLinks;
    };

    type TTotalDaily = Record<string, TTotalDailyInner>;

    type TImageInner = {
        url: string;
        width: number;
        height: number;
    };

    type TImages = {
        THUMBNAIL: TImageInner;
        SMALL: TImageInner;
        REGULAR: TImageInner;
        LARGE: TImageInner;
    };

    type TIngredient = {
        text: string;
        quantity: number;
        measure?: string;
        food: string;
        weight: number;
        foodCategory: string;
        foodId: string;
        image?: string;
    };

    type TSub = {
        label: string;
        tag: string;
        schemaOrgTag?: string;
        total: number;
        hasRDI: boolean;
        daily: number;
        unit: string;
    };

    type TDigest = {
        label: string;
        tag: string;
        schemaOrgTag: string;
        total: number;
        hasRDI: boolean;
        daily: number;
        unit: string;
        sub: TSub;
    };

    type TRecipesResponseType = {
        from: number;
        to: number;
        count: number;
        hits: THit[];
        _links: TLinks;
    };

    type TTotalDailyInner = {
        label: string;
        quantity: number;
        unit: string;
    };

    type TTotalDaily = {
        ENERC_KCAL: TTotalDailyInner;
        FAT: TTotalDailyInner;
        FASAT: TTotalDailyInner;
        CHOCDF: TTotalDailyInner;
        FIBTG: TTotalDailyInner;
        PROCNT: TTotalDailyInner;
        CHOLE: TTotalDailyInner;
        NA: TTotalDailyInner;
        CA: TTotalDailyInner;
        MG: TTotalDailyInner;
        K: TTotalDailyInner;
        FE: TTotalDailyInner;
        ZN: TTotalDailyInner;
        P: TTotalDailyInner;
        VITA_RAE: TTotalDailyInner;
        VITC: TTotalDailyInner;
        THIA: TTotalDailyInner;
        RIBF: TTotalDailyInner;
        NIA: TTotalDailyInner;
        VITB6A: TTotalDailyInner;
        FOLDFE: TTotalDailyInner;
        VITB12: TTotalDailyInner;
        VITD: TTotalDailyInner;
        TOCPHA: TTotalDailyInner;
        VITK1: TTotalDailyInner;
    };

    type TRecipe = {
        uri: string;
        label: string;
        image: string;
        images: Images;
        source: string;
        url: string;
        shareAs: string;
        yield: number;
        dietLabels: string[];
        healthLabels: string[];
        cautions: string[];
        ingredientLines: string[];
        ingredients: Ingredient[];
        calories: number;
        glycemicIndex: number;
        totalCO2Emissions: number;
        co2EmissionsClass: string;
        totalWeight: number;
        cuisineType: string[];
        mealType: string[];
        dishType: string[];
        instructions: string[];
        tags: string[];
        externalId: string;
        totalNutrients: TotalDaily;
        totalDaily: TTotalDaily;
        digest: Digest[];
    };
}
