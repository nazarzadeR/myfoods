import {
    useState,
    useEffect,
    useContext,
    useCallback,
    createContext,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { hasSignLink, singInWithEmailLinkAndDeleteUser } from "@/services/firebase";

type TMetaState = Pick<
    Context.TAuthContext<User>,
    "hasUser" | "user" | "isLoading"
>;

const defaultAuthContext = {} as Context.TAuthContext<User>;
const AuthContext = createContext(defaultAuthContext);

export function AuthProvider({ children }: TProps) {
    const [meta, setMeta] = useState<TMetaState>({
        hasUser: false,
        user: null,
        isLoading: true,
    });

    let authChangedCallback = useCallback((user: User | null) => {
        setMeta({
            user,
            hasUser: !!user,
            isLoading: false,
        });
    }, []);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, authChangedCallback);

        if (hasSignLink()) {
            singInWithEmailLinkAndDeleteUser();
        }

        return () => {
            unSubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ ...meta }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
