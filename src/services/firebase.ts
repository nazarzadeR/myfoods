import {
    User,
    signOut,
    updateEmail,
    updateProfile,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailLink,
    FacebookAuthProvider,
    confirmPasswordReset,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { isEmpty } from "lodash";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
    doc,
    setDoc,
    getDoc,
    collection,
    arrayUnion,
} from "firebase/firestore";

import { auth, db, storage } from "@/lib/firebase";

export const GoogleProvider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();

const USERS_REF = collection(db, "users");
const USERS_DATA_REF = collection(db, "users_meta_data");
const USER_PROFILE_PIC_REF = (id: string) =>
    ref(storage, `profile-images/${id}`);

// const USER_RECIPE_PIC_REF = (uid: string, id: string) =>
//     ref(storage, `user-recipe-images/${uid}/${id}`);

export async function uploadAndUpdateUserPictures(user: User, file: File) {
    const userImageReference = USER_PROFILE_PIC_REF(user.uid);

    await uploadBytes(userImageReference, file);

    const downloadedPhotoURL = await getDownloadURL(userImageReference);

    return updateProfile(user, {
        photoURL: downloadedPhotoURL,
    });
}

export function isResetOopReceived() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const code = params.get("oobCode");

    return !!code && isEmpty(code) && mode === "resetPassword";
}

export function sendResetPassword(email: string) {
    return sendPasswordResetEmail(auth, email, {
        handleCodeInApp: true,
        url: new URL("/sign/forgot_pass", window.location.origin).toString(),
    });
}

export function confirmPassword(oobCode: string, password: string) {
    const email = localStorage.getItem("currentEmailUserFromResetPass");

    if (!!!email) {
        throw new Error("Reset email not found");
    }

    return confirmPasswordReset(auth, oobCode, password);
}

export async function addRecipeToFavoriteFirebase(
    uid: string,
    recipe: Recipe.TRecipe,
) {
    return setDoc(
        doc(USERS_DATA_REF, uid),
        {
            favorites: arrayUnion(recipe),
        },
        { merge: true },
    );
}

export function getUserMeta(uid: string) {
    return getDoc(doc(USERS_REF, uid));
}

export function singInWithEmailLinkAndDeleteUser() {
    const email = localStorage.getItem("currentEmailUserFromMagicLink");

    if (email) {
        signInWithEmailLink(auth, email, window.location.href).then(() =>
            localStorage.removeItem("currentEmailUserFromMagicLink"),
        );
    }
}

export function updateUsername(user: User, displayName: string) {
    return updateProfile(user, {
        displayName,
    });
}

export function updateUserEmail(user: User, email: string) {
    return updateEmail(user, email);
}

export async function addRecipeSettingWith(name: string, value: string) {
    if (!!!auth.currentUser?.uid) {
        return localStorage.setItem(name, value);
    }

    localStorage.setItem(name, value);
    await setDoc(doc(USERS_REF, auth.currentUser?.uid), {
        recipe_settings: JSON.parse(value),
    });
}

export async function getRecipeSettingWith(name: string) {
    if (!!!auth.currentUser?.uid) {
        return localStorage.getItem(name);
    }

    return await getDoc(doc(USERS_REF, auth.currentUser.uid));
}

export function hasSignLink() {
    return isSignInWithEmailLink(auth, window.location.href);
}

export function sendEmailLink(email: string) {
    return sendSignInLinkToEmail(auth, email, {
        handleCodeInApp: true,
        url: new URL("/sign/external_links", window.location.origin).toString(),
    });
}

export function signWithPropUp(provider: any) {
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
