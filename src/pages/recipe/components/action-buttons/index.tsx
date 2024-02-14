import { get } from "lodash";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { HStack, Spinner } from "@chakra-ui/react";

import { useRecipeSettings } from "@/store";
import ActionLink from "./components/ActionLink";
import useRemoveFavorites from "../../hooks/useRemoveFavorites";
import { HomeIcon, TagIcon, LinkIcon, DeleteIcon } from "@/components";

type Props = TProps<{
    recipe: Recipe.TRecipe;
}>;

export default function ActionLinks({ recipe }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { addTags } = useRecipeSettings();
    const { removeFavorites } = useRemoveFavorites();

    const recipeTags = get(recipe, "tags");
    const recipeSiteLink = get(recipe, "url");

    const backTo = () => navigate("/");
    const openPage = () => window.open(recipeSiteLink);
    const addTagsTo = () => recipeTags && addTags(...recipeTags);
    const removeFromFavorites = async () => {
        await removeFavorites.mutateAsync(recipe, {
            onSuccess() {
                navigate("/favorites");
            },
        });
    };

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

            <ActionLink
                onClick={removeFromFavorites}
                _hover={{
                    borderColor: "red.300",
                    "& > *": {
                        color: "red.300",
                    },
                }}
            >
                {removeFavorites.isLoading ? (
                    <Spinner size="sm" />
                ) : (
                    <DeleteIcon fontSize="xl" />
                )}
            </ActionLink>
        </HStack>
    );
}
