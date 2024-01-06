import {
    signOut,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailLink,
    FacebookAuthProvider,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/lib/firebase";


export const GoogleProvider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();


export function singInWithEmailLinkAndDeleteUser() {
    const email = localStorage.getItem("currentEmailUserFromMagicLink");

    if (email) {
        signInWithEmailLink(auth, email, window.location.href).then(
            () =>
                localStorage.removeItem(
                    "currentEmailUserFromMagicLink",
                ),
        );
    }
}

export function hasSignLink(){
    return isSignInWithEmailLink(auth, window.location.href)
}

export function sendEmailLink(email: string){
    return sendSignInLinkToEmail(auth, email, {
        handleCodeInApp: true,
        url: window.location.origin,
    })
}

export function signWithPropUp(provider: any){
    return signInWithPopup(auth, provider);
}

export function login({ email, password }: Api.TAuthWithEmailAndPassword) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function register({ email, password }: Api.TAuthWithEmailAndPassword) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signOutAuth() {
    return signOut(auth);
}
