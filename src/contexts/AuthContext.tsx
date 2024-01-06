import {
    useState,
    useEffect,
    useContext,
    useCallback,
    createContext,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { hasSignLink, singInWithEmailLinkAndDeleteUser } from "@/services/auth";

type TMetaState = Pick<Context.TAuthContext<User>, "hasUser" | "user">;

const defaultAuthContext = {} as Context.TAuthContext<User>;
const AuthContext = createContext(defaultAuthContext);

export function AuthProvider({ children }: TProps) {
    const [meta, setMeta] = useState<TMetaState>({
        hasUser: false,
        user: null,
    });

    let authChangedCallback = useCallback((user: User | null) => {
        setMeta({
            hasUser: !!user,
            user,
        });
    }, []);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, authChangedCallback);

        if (hasSignLink()) {
            singInWithEmailLinkAndDeleteUser();
        }

        return unSubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ ...meta }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
