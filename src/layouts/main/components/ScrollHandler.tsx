import Lottie from "lottie-react";
import { Box } from "@chakra-ui/react";

import { scrollTo } from "@/helpers/scroll";
import scrollAnimation from "@/assets/lottie/scroll_animation.json";

type Props = TProps<{
    scroll: number;
    container: React.RefObject<HTMLElement>;
}>;

export default function ScrollHandler({ scroll, container }: Props) {
    const isBiggerThan1000 = scroll >= 1000;
    const isContainerScrollBiggerThan2000 =
        container.current?.scrollHeight! >= 2000;
    const pos = isBiggerThan1000 ? "top" : "bottom";

    if (!isContainerScrollBiggerThan2000) return null;

    const handleScroll = () => scrollTo(container.current!, pos);

    return (
        <Box
            w="64px"
            h="64px"
            right="1"
            bottom="1"
            position="fixed"
            cursor="pointer"
            onClick={handleScroll}
            transform={`rotate(${!isBiggerThan1000 ? "180deg" : "0"})`}
        >
            <Box
                w="full"
                h="full"
                as={Lottie}
                animationData={scrollAnimation}
            />
        </Box>
    );
}
