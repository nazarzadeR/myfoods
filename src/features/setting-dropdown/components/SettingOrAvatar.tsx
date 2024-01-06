import { useAuth } from "@/contexts";
import { Avatar, SettingIcon } from "@/components";
import { Spinner } from "@chakra-ui/react";

export default function SettingOrAvatar() {
    const { hasUser, isLoading } = useAuth();

    if (isLoading) return <Spinner size={["sm", "xs"]} />;

    return hasUser ? <Avatar /> : <SettingIcon />;
}
