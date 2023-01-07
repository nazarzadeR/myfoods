import React from "react";
import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props extends React.DetailedHTMLProps<any, any> {}

const DropDownMenu: React.FC<Props> = (props): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <VStack
            as={motion.div}
            variants={{
                fromRight: {
                    x: 300,
                },
                fromLeft: {
                    x: -300,
                },
                to: {
                    x: 0,
                    transition: {
                        duration: 0.4,
                        // delay: .1
                    },
                },
                toLeft: {
                    x: -300,
                    transition: {
                        duration: 0.4,
                    },
                },
                toRight: {
                    x: 300,
                    transition: {
                        duration: 0.4,
                    },
                },
            }}
            animate="to"
            {...rest}
        >
            {children}
        </VStack>
    );
};

export default DropDownMenu;
