import { Center, Flex, Box } from "@chakra-ui/react";

type Props = TProps<{
    LeftIcon?: React.FC;
    RightIcon?: React.FC;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
}>;

export default function DropdownItem({
    onClick,
    LeftIcon,
    RightIcon,
    children,
    ...rest
}: Props) {
    return (
        <Flex
            px="1"
            h="full"
            w="full"
            minH="50px"
            cursor="pointer"
            fontSize="1.2rem"
            onClick={onClick}
            borderRadius="base"
            alignItems="center"
            justifyItems="space-between"
            justifyContent="space-between"
            _hover={{
                bg: "chakra-body-bg",
                color: "teal.500",
            }}
            {...rest}
        >
            <Box flexGrow="2" flexShrink="0" flexBasis="0">
                {LeftIcon && (
                    <Center
                        w="40px"
                        h="40px"
                        bg="chakra-body-bg"
                        borderRadius="full"
                    >
                        <LeftIcon />
                    </Center>
                )}
            </Box>

            {children && (
                <Box flexGrow="6" flexShrink="1" flexBasis="auto">
                    <Center w="full" h="full" fontWeight="bolder">
                        {children}
                    </Center>
                </Box>
            )}

            <Box flexGrow="1" flexShrink="0" flexBasis="0">
                {RightIcon && (
                    <Center w="full" h="full">
                        <RightIcon />
                    </Center>
                )}
            </Box>
        </Flex>
    );
}
