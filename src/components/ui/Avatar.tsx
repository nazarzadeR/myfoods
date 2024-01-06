import { get } from "lodash";
import { Center, Avatar, CenterProps } from "@chakra-ui/react";

import { useAuth } from "@/contexts";

export default function AvatarComp(props: TDetailedProps<{}, CenterProps>) {
    const { user } = useAuth();
    const name = get(user, "displayName") as string | undefined;
    const src: string = get(
        user,
        "photoURL",
        "/images/default_user_img.jpg",
    ) as string;

    return (
        <Center w="10" h="10" {...props} cursor="pointer">
            <Avatar size="sm" src={src} name={name} />
        </Center>
    );
}
