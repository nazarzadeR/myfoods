import { IconButton, ComponentWithAs } from "@chakra-ui/react";
import { motion } from "framer-motion";

import useHandleSignUpWIthPopup from "../hooks/useProviderSign";

type Props = TProps<{
    provider: any;
    schema: string;
    Icon: ComponentWithAs<"svg">;
}>;

export default function WithPopUpLink({ provider, Icon, schema }: Props) {
    const { mutateAsync, isLoading } = useHandleSignUpWIthPopup(provider);

    const handleSingUp = async () => {
        await mutateAsync();
    };

    return (
        <IconButton
            size="md"
            icon={<Icon />}
            as={motion.button}
            borderRadius="full"
            colorScheme={schema}
            isLoading={isLoading}
            onClick={handleSingUp}
            aria-label="open provider"
            whileHover={{
                scale: 1.06,
            }}
        />
    );
}
