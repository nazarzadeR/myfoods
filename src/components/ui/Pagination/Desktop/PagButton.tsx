import React from "react";

import { Button } from "@chakra-ui/react";
import useSetting from "stores/settings";

interface Props extends React.DetailedHTMLProps<any, any> {
    disabled: boolean;
}

const PagButton: React.FC<Props> = (props) => {
    const { children, disabled } = props;
    
    return (
        <Button
            w="40px"
            h="40px"
            {...props}
            disabled={disabled}
            boxShadow="-1px -1px 3px 0 bgDark"
        >
            {children && children}
        </Button>
    );
};

export default PagButton;
