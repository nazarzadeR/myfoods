import {
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export function login({ email, password }: Api.TAuthWithEmailAndPassword) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function register({ email, password }: Api.TAuthWithEmailAndPassword) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signOutAuth() {
    return signOut(auth);
}
