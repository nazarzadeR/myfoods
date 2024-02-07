import { isEmpty } from "lodash";
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";

import { useAuth } from "@/contexts";
import { useFavorites } from "../store/favorites";
import { getUserMetaData } from "@/services/firebase";

type TFavorites = {
    favorites: Recipe.TRecipe[];
};

export default function useFavorite() {
    const { user } = useAuth();
    const { favorites, setFavorites } = useFavorites();

    useEffect(() => {
        const unSub = onSnapshot(getUserMetaData(user?.uid!), (doc) => {
            console.log(doc.data());
            const favoritesData = doc.data() as TFavorites;

            if (isEmpty(favoritesData.favorites)) return;

            setFavorites(favoritesData.favorites);
        });

        return () => {
            unSub();
        };
    }, []);

    return { favorites };
}
