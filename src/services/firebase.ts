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
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { nanoid } from "nanoid";
import { isEmpty } from "lodash";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

import { Instance } from "@/lib/http";
import { auth, db, storage } from "@/lib/firebase";

export const GoogleProvider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();

const USERS_REF = collection(db, "users");
const USER_PROFILE_PIC_REF = (id: string) =>
    ref(storage, `profile-images/${id}`);

const USER_RECIPE_PIC_REF = (uid: string, id: string) =>
    ref(storage, `user-recipe-images/${uid}/${id}`);

export async function uploadAndUpdateUserPictures(user: User, file: File) {
    const userImageReference = USER_PROFILE_PIC_REF(user.uid);

    await uploadBytes(userImageReference, file);

    const downloadedPhotoURL = await getDownloadURL(userImageReference);

    return updateProfile(user, {
        photoURL: downloadedPhotoURL,
    });
}

export async function addRecipeToFavoriteFirebase(uid: string, recipe: Recipe.TRecipe){
    const photoUId = nanoid();
    let imageBuffer: Buffer;

    try {
        const responseOfImage  = await Instance.get(recipe.image, { responseType: "arraybuffer" });
        imageBuffer = Buffer.from(responseOfImage.data, "binary");
    }catch(error){
        throw error;
    }

    const favoriteImageReference = USER_RECIPE_PIC_REF(uid, photoUId)

    await uploadBytes(favoriteImageReference, imageBuffer);

    const photoURL = await getDownloadURL(favoriteImageReference);

    const linkedRecipe = {
        photoURL: photoURL,
        ...recipe
    }

    return updateDoc(doc(USERS_REF, uid), {
        favorites: arrayUnion(linkedRecipe)
    })

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

export function addRecipeSettingsToCloud(
    id: string,
    recipe_settings: Api.TRecipeApiParams,
) {
    if (isEmpty(id)) throw new Error();

    return setDoc(
        doc(USERS_REF, id),
        {
            recipe_settings,
        },
        { merge: true },
    );
}

export function hasSignLink() {
    return isSignInWithEmailLink(auth, window.location.href);
}

export function sendEmailLink(email: string) {
    return sendSignInLinkToEmail(auth, email, {
        handleCodeInApp: true,
        url: window.location.origin,
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
