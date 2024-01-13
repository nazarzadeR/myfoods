import { useRedirect } from "@/hooks";

export default function Contact() {
    useRedirect({
        instant: true,
        where: "/under_development",
    });
    return <div>Contact</div>;
}
