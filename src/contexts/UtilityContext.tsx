import { useDisclosure } from "@chakra-ui/react";
import { createContext, lazy, Suspense, useContext } from "react";

const AuthLoginModal = lazy(() => import("@/features/auth-modal"));
const RecipeSettingModal = lazy(
    () => import("@/features/recipe-settings-modal"),
);

type TUtilityContext = {
    isAuthOpen: boolean;
    isRecipeSettingOpen: boolean;
    recipeActions: {
        onOpen(): void;
        onClose(): void;
    };
    authActions: {
        onOpen(): void;
        onClose(): void;
    };
};

const Fallback = () => null;
const defaultContext = {} as TUtilityContext;
const UtilityContext = createContext(defaultContext);

export function UtilityProvider({ children }: TProps) {
    const {
        onOpen: onAuthOpen,
        onClose: onAuthClose,
        isOpen: isAuthOpen,
    } = useDisclosure();

    const {
        onOpen: onRecipeSettingOpen,
        onClose: onRecipeSettingClose,
        isOpen: isRecipeSettingOpen,
    } = useDisclosure();

    return (
        <UtilityContext.Provider
            value={{
                isAuthOpen,
                isRecipeSettingOpen,
                recipeActions: {
                    onOpen: onRecipeSettingOpen,
                    onClose: onRecipeSettingClose,
                },
                authActions: {
                    onOpen: onAuthOpen,
                    onClose: onAuthClose,
                },
            }}
        >
            {children && children}
            <Suspense fallback={<Fallback />}>
                {isAuthOpen && (
                    <AuthLoginModal isOpen={isAuthOpen} onClose={onAuthClose} />
                )}
            </Suspense>

            <Suspense fallback={<Fallback />}>
                {isRecipeSettingOpen && (
                    <RecipeSettingModal
                        isOpen={isRecipeSettingOpen}
                        onClose={onRecipeSettingClose}
                    />
                )}
            </Suspense>
        </UtilityContext.Provider>
    );
}

export const useUtility = () => useContext(UtilityContext);
