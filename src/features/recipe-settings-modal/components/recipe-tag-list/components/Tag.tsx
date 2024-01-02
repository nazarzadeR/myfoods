import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";

import { CrossIcon } from "@/components";
import { useRecipeSettings } from "@/store";

type Props = TProps<{
    tag: Api.TTag;
}>;

const Tags = ({ tag: { text, id } }: Props) => {
    const { deleteTagFromId } = useRecipeSettings();
    return (
        <Tag size="lg" variant="solid">
            <TagLabel>{text}</TagLabel>
            <TagRightIcon as={CrossIcon} onClick={() => deleteTagFromId(id)} />
        </Tag>
    );
};

export default Tags;
