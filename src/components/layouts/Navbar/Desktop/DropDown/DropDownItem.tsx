import React from "react";
import { Center, Grid, GridItem } from "@chakra-ui/react";

interface Props extends React.DetailedHTMLProps<any, any> {
    LeftIcon?: React.FC;
    RightIcon?: React.FC;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const DropDownItem: React.FC<Props> = (props): JSX.Element => {
    let { onClick, LeftIcon, RightIcon, children, ...rest } = props;

    return (
        <Grid
            w="full"
            minH="50px"
            h="max-content"
            fontSize="1.2rem"
            onClick={onClick}
            borderRadius="base"
            templateColumns="20% 60% 20%"
            justifyContent="center"
            alignItems="center"
            _hover={{
                bg: "chakra-body-bg",
                color: "teal.500",
            }}
            {...rest}
        >
            {LeftIcon && (
                <GridItem w="70%" h="70%" as="span" bg="chakra-body-bg" borderRadius="full">
                    <Center w="full" h="full">
                        <LeftIcon />
                    </Center>
                </GridItem>
            )}
            {children && (
                <GridItem as="span">
                    <Center w="full" h="full" fontWeight="bolder">
                        {children}
                    </Center>
                </GridItem>
            )}

            {RightIcon && (
                <GridItem as="span">
                    <Center w="full" h="full">
                        <RightIcon />
                    </Center>
                </GridItem>
            )}
        </Grid>
    );
};

export default DropDownItem;
