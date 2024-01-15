import { createContext, useContext, useState } from "react";

type TRecipeSelectedContext = {
    selected: Recipe.TRecipe | null;
    setSelected: React.Dispatch<React.SetStateAction<Recipe.TRecipe | null>>;
};

const defaultContext = {} as TRecipeSelectedContext;
const SelectedContext = createContext(defaultContext);

export default function SelectedRecipeProvider({ children }: TProps) {
    const [selected, setSelected] = useState<Recipe.TRecipe | null>(null);
    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            {children && children}
        </SelectedContext.Provider>
    );
}

export const useSelectedRecipe = () => useContext(SelectedContext);
