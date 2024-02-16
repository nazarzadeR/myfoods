import { get } from "lodash";
import { useNavigate } from "react-router";
import { HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useRecipeSettings } from "@/store";
import ActionLink from "./components/ActionLink";
import { HomeIcon, TagIcon, LinkIcon } from "@/components";
import AddFavoritesLink from "./components/AddFavoritesLink";
import RemoveFavoritesLink from "./components/RemoveFavoritesLink";
import { useRecipeContext } from "@/pages/recipe/context/RecipeContext";

export default function ActionLinks() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { addTags } = useRecipeSettings();

    const { recipe } = useRecipeContext();

    const recipeTags = get(recipe, "tags");
    const recipeSiteLink = get(recipe, "url");

    const backTo = () => navigate("/");
    const openPage = () => window.open(recipeSiteLink);
    const addTagsTo = () => recipeTags && addTags(...recipeTags);

    return (
        <HStack
            mt="2"
            w="full"
            mx="auto"
            gap="15px"
            justifyContent="center"
            alignItems="center"
        >
            <ActionLink onClick={backTo}>
                <HomeIcon fontSize="2xl" />
            </ActionLink>
            <ActionLink
                onClick={addTagsTo}
                disabled={!!recipeTags}
                tooltip={t("expressions.noTags")}
            >
                <TagIcon fontSize="2xl" />
            </ActionLink>
            {recipeSiteLink && (
                <ActionLink onClick={openPage}>
                    <LinkIcon fontSize="2xl" />
                </ActionLink>
            )}
            <AddFavoritesLink />
            <RemoveFavoritesLink />
        </HStack>
    );
}
