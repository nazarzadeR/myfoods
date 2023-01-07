import React, { useEffect } from "react";
import { useField } from "formik";
import { Box, Input as ChakraInput } from "@chakra-ui/react";

import useToast from "hook/useToast";

interface Props extends React.DetailedHTMLProps<any, any> {}

const Input: React.FC<Props> = (props) => {
    const toast = useToast();
    const [fields, meta, helpers] = useField(props);

    useEffect(() => {
        if (meta.error && meta.touched) {
            helpers.setTouched(false);
            helpers.setValue("");
            toast({
                status: "info",
                description: meta.error,
            });
        }
    }, [meta.error, meta.touched]);

    return (
        <Box
            p="3px"
            h="60px"
            w="15rem"
            borderRadius="lg"
            bgGradient="linear-gradient(to right,#fdde5c,#f8ab5e,#f56a62,#a176c8,#759beb,#65beb3,#70db96)"
        >
            <ChakraInput
                w="full"
                h="full"
                zIndex="1900"
                outline="none"
                border="none !important"
                borderColor="none !important"
                boxShadow="none !important"
                bg="chakra-body-bg"
                {...fields}
                {...props}
            />
        </Box>
    );
};

export default Input;
