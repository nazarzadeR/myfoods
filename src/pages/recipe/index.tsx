import { useRedirect } from "@/hooks";

export default function Recipe() {
    useRedirect({
        instant: true,
        where: "/under_development",
    });

    return null;
}
