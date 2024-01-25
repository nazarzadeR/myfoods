import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ComponentWithAs, IconButton } from "@chakra-ui/react";

type Props = TProps<{
    to: string;
    scheme: string;
    Icon: ComponentWithAs<"svg">;
}>;

export default function LinkWith({ Icon, scheme, to }: Props) {
    const navigate = useNavigate();

    const goTo = () => navigate(to);

    return (
        <IconButton
            size="md"
            onClick={goTo}
            icon={<Icon />}
            as={motion.button}
            colorScheme={scheme}
            borderRadius="full"
            aria-label="Change route to selected"
            whileHover={{
                scale: 1.05,
            }}
        />
    );
}
