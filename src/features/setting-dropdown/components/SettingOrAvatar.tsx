import { useAuth } from "@/contexts";
import { Avatar, SettingIcon } from "@/components";

export default function SettingOrAvatar() {
    const { hasUser } = useAuth();
    return hasUser ? <Avatar /> : <SettingIcon />;
}
