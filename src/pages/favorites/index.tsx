import { useRedirect } from "@/hooks";

export default function Favorites() {
    useRedirect({
        instant: true,
        where: "/under_development",
    });

    return <div>Favorites</div>;
}
