declare namespace Food {
    type TCategoryLabel = "food" | "meal";
    type TCategory = "Generic foods" | "Generic meals" | "Packaged foods";
    type TQualifierLabel =
        | "large"
        | "small"
        | "medium"
        | "quartered"
        | "chopped"
        | "sliced";
    type TServingSizeLabel =
        | "Serving"
        | "Whole"
        | "Apple"
        | "Gram"
        | "Ounce"
        | "Pound"
        | "Kilogram"
        | "Cup"
        | "Milliliter"
        | "Tablespoon"
        | "Package"
        | "Pouch";

    export type TNutrients = {
        enercKcal: number;
        procnt: number;
        fat: number;
        chocdf: number;
        fibtg: number;
    };

    type TServingSize = {
        uri: string;
        quantity: number;
        label: TServingSizeLabel;
    };

    type TMeasure = {
        uri: string;
        label: string;
        weight: number;
        qualified?: TQualified[];
    };

    type TNext = {
        title: string;
        href: string;
    };

    type TLink = {
        next: TNext;
    };

    type TQualifier = {
        uri: string;
        label: string;
    };

    type TQualified = {
        qualifiers: TQualifier[];
        weight: number;
    };

    type ParsedFood = {
        foodID: string;
        label: string;
        knownAs: string;
        nutrients: TNutrients;
        category: TCategory;
        categoryLabel: TCategoryLabel;
        image: string;
    };

    type TParsed = {
        food: ParsedFood;
    };

    type THintFood = {
        foodID: string;
        label: TServingSizeLabel;
        knownAs: string;
        nutrients: TNutrients;
        category: TCategory;
        categoryLabel: TCategoryLabel;
        image?: string;
        foodContentsLabel?: string;
        brand?: string;
        servingSizes?: TServingSize[];
    };

    type THint = {
        food: THintFood;
        measures: TMeasure[];
    };

    type TFoodResponseType = {
        text: string;
        parsed: TParsed[];
        hints: THint[];
        links: TLinks;
    };
}
