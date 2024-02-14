import { Center, Tooltip, CenterProps } from "@chakra-ui/react";

type Props = TDetailedProps<
    {
        tooltip?: string;
        disabled?: boolean;
        onClick: () => void;
    },
    CenterProps
>;

export default function ActionLink({
    onClick,
    tooltip,
    children,
    disabled,
    ...rest
}: Props) {
    return (
        <Tooltip label={tooltip} isDisabled={disabled}>
            <Center
                w="64px"
                h="64px"
                cursor="pointer"
                onClick={onClick}
                borderRadius="full"
                border="2px solid whitesmoke"
                _active={{
                    borderColor: "teal.500",
                    "& > *": {
                        color: "teal.500",
                    },
                }}
                _hover={{
                    borderColor: "teal.500",
                    "& > *": {
                        color: "teal.500",
                    },
                }}
                {...rest}
            >
                {children}
            </Center>
        </Tooltip>
    );
}
