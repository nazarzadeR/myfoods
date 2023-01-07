import React from "react";
import { Center, Link, Text } from "@chakra-ui/react";
import { Link as ReactLink, useLocation } from "react-router-dom";

interface Props extends React.DetailedHTMLProps<any, any> {
    to: string;
    title: string;
    fav?: number;
}

const DefaultLink: React.FC<Props> = ({ to, title, fav }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Center
            position="relative"
            _hover={{
                "& > p": {
                    color: "teal.500",
                }
            }}
        >
            {!!fav && (
                <Text
                    right="-10px"
                    top="-10px"
                    fontSize="xs"
                    fontWeight="bold"
                    position="absolute"
                    display={isActive ? "none" : "initial"}
                >
                    {fav}
                </Text>
            )}
            <Link
                to={to}
                as={ReactLink}
                fontSize="1.2rem"
                fontWeight="bold"
                color={isActive ? "teal.500" : undefined}
            >
                {title}
            </Link>
        </Center>
    );
};

export default DefaultLink;
