import React from "react";
import { Button, Box } from "@chakra-ui/react";

import Spinner from "./Spinner";

interface Props extends React.DetailedHTMLProps<any, any> {
    loading: boolean;
}

const SubmitButton: React.FC<Props> = (props) => {
    let { loading } = props;
    return (
        <Box
            p="2px"
            h="50px"
            w="80px"
            zIndex="2000"
            ml="-50px !important"
            borderRadius="lg"
            bgGradient="linear-gradient(to right,#fdde5c,#f8ab5e,#f56a62,#a176c8,#759beb,#65beb3,#70db96)"
        >
            {loading ? (
                <Spinner />
            ) : (
                <Button
                    w="full"
                    h="full"
                    _hover={{}}
                    _active={{}}
                    type="submit"
                    disabled={loading}
                    fontSize="smaller"
                    bg="chakra-body-bg"
                >
                    SEARCH
                </Button>
            )}
        </Box>
    );
};

export default SubmitButton;
