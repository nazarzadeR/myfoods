import { useTranslation } from "react-i18next";
import { Button, Box } from "@chakra-ui/react";

import { MultipleRoundSpinner } from "@/components"

type Props = TProps<{
    loading: boolean;
    onClick(): void;
}>;

export default function SearchInputButton({ loading, onClick }: Props) {
    const { t } = useTranslation();
    return (
        <Box
            p="2px"
            h="50px"
            w="80px"
            zIndex="1400"
            borderRadius="lg"
            position="relative"
            ml="-50px !important"
            bgGradient="linear-gradient(to right,#fdde5c,#f8ab5e,#f56a62,#a176c8,#759beb,#65beb3,#70db96)"
        >
            {loading ? (
                <MultipleRoundSpinner />
            ) : (
                <Button
                    w="full"
                    h="full"
                    _hover={{}}
                    _active={{}}
                    onClick={onClick}
                    disabled={loading}
                    fontSize="smaller"
                    bg="chakra-body-bg"
                    textTransform="uppercase"
                >
                    {t("words.search")}
                </Button>
            )}
        </Box>
    );
}
