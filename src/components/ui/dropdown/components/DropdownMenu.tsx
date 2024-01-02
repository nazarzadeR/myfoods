import { VStack, StackProps } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { pass } from "@/util";

type Props = TDetailedProps<
    {
        isActive?: boolean;
        setActiveMenu?: () => any;
        exit?: keyof typeof dropdownAnimation;
        animate?: keyof typeof dropdownAnimation;
        initial?: keyof typeof dropdownAnimation;
    },
    StackProps
>;

export default function DropDownMenu({
    children,
    animate = "to",
    initial = "to",
    exit = "toLeft",
    isActive = false,
    setActiveMenu = pass,
    ...rest
}: Props) {
    return (
        <AnimatePresence initial={false} onExitComplete={() => setActiveMenu()}>
            {isActive && (
                <VStack
                    exit={exit}
                    as={motion.div}
                    initial={initial}
                    animate={animate}
                    variants={dropdownAnimation}
                    {...rest}
                >
                    {children && children}
                </VStack>
            )}
        </AnimatePresence>
    );
}

const dropdownAnimation = {
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
};
