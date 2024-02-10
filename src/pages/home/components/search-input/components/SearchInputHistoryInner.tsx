import { isEmpty, map } from "lodash";
import { CloseButton, Text, Box, HStack } from "@chakra-ui/react";

import { useSearchHistory } from "../store";

type Props = TProps<{
    setQuery(query: string): void;
}>;

export default function SearchInputHistoryInner({ setQuery }: Props) {
    const { history } = useSearchHistory();

    if (isEmpty(history)) return null;

    return (
        <Box
            p="1"
            w="full"
            left="0"
            top="70px"
            bg="bgDark"
            minH="120px"
            maxW="320px"
            minW="280px"
            maxH="240px"
            overflowY="scroll"
            zIndex="popover"
            borderRadius="4px"
            position="absolute"
            sx={{
                "::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            {map(history, (his) => (
                <History history={his} setQuery={setQuery} />
            ))}
        </Box>
    );
}

type HistoryProps = TProps<{
    history: string;
    setQuery(query: string): void;
}>;

function History({ history, setQuery }: HistoryProps) {
    const { deleteHistory } = useSearchHistory();

    const setHistory = () => setQuery(history);
    const handleDeleteHistory = () => deleteHistory(history);

    return (
        <HStack
            p="2"
            w="full"
            h="50px"
            cursor="pointer"
            onClick={setHistory}
            borderRadius="5px"
            justifyContent="space-between"
            alignContent="center"
        >
            <Text>{history}</Text>

            <CloseButton
                bg="bgDark"
                aria-label="delete history"
                onClick={handleDeleteHistory}
            />
        </HStack>
    );
}
