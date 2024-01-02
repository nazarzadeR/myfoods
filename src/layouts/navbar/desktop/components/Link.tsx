import { Center, Link, Tooltip } from "@chakra-ui/react";
import { Link as ReactLink, useLocation } from "react-router-dom";

type Props = TDetailedProps<{
    to: string;
    title: string;
    label?: string;
    deActive?: boolean;
}>;

export default function RouteLink(
    // prettier-no-check
    { to, title, deActive, label }: Props,
) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Tooltip label={label}>
            <Center
                w="max-content"
                position="relative"
                color={isActive ? "teal.500" : undefined}
                cursor={deActive ? "not-allowed" : "pointer"}
                _hover={{
                    "& > p": {
                        color: "teal.500",
                    },
                }}
            >
                <Link
                    to={to}
                    as={ReactLink}
                    fontSize="1.2rem"
                    fontWeight="bold"
                    color={deActive ? "gray" : "inherit"}
                    pointerEvents={deActive ? "none" : "all"}
                >
                    {title}
                </Link>
            </Center>
        </Tooltip>
    );
}
