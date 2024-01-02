import { map, get } from "lodash";
import { useTranslation } from "react-i18next";
import { Wrap, WrapItem } from "@chakra-ui/react";

import Tag from "./Tag";
import TagInput from "./TagInput";
import { useRecipeSettings } from "@/store";

const TagList = () => {
    const { t } = useTranslation();
    const { querySettings } = useRecipeSettings();

    const tags = get(querySettings, "tags");

    return (
        <Wrap
            p="1"
            h="max"
            gap="2"
            w="full"
            borderRadius="md"
            border="1px solid var(--chakra-colors-chakra-border-color) "
            _focusWithin={{
                outline: "2px solid rgba(66, 153, 225, 0.6)",
            }}
        >
            {tags &&
                map(tags, (tag, idx) => (
                    <WrapItem as={Tag} key={idx} tag={tag} />
                ))}

            <WrapItem as={TagInput} placeholder={t("expressions.tagList")} />
        </Wrap>
    );
};

export default TagList;
