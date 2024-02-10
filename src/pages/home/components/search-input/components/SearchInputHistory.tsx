import { VStack, HStack } from "@chakra-ui/react";

import SearchInputHistoryInner from "./SearchInputHistoryInner";

type Props = TProps<{
    isOpen: boolean;
    setQuery(query: string): void;
}>;

export default function SearchInputHistory({
    isOpen,
    setQuery,
    children,
}: Props) {
    return (
        <VStack w={["280px", "320px"]} position="relative">
            <HStack w="max-content">{children && children}</HStack>
            {isOpen && <SearchInputHistoryInner setQuery={setQuery} />}
        </VStack>
    );
}
