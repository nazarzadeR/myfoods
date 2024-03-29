// @ts-nocheck

import { Box, Input, InputProps } from "@chakra-ui/react";

export default function SearchInput(props: InputProps) {
    return (
        <Box
            p="3px"
            h="60px"
            w="15rem"
            borderRadius="lg"
            bgGradient="linear-gradient(to right,#fdde5c,#f8ab5e,#f56a62,#a176c8,#759beb,#65beb3,#70db96)"
        >
            <Input
                w="full"
                h="full"
                zIndex="1400"
                outline="none"
                autoCorrect="off"
                autoComplete="off"
                border="none !important"
                borderColor="none !important"
                boxShadow="none !important"
                bg="chakra-body-bg"
                {...props}
            />
        </Box>
    );
}
