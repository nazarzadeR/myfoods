import _ from "lodash";
import { VStack, Text } from "@chakra-ui/react";

import TagLists from "./components/TagList";

type Props = TProps<{
    heading: string;
}>;

const TagList = ({ heading }: Props) => (
    <VStack w="full">
        <Text ml="4" w="full" textAlign="start" noOfLines={2}>
            {heading}
        </Text>
        <TagLists />
    </VStack>
);

export default TagList;
