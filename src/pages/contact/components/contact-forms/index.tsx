import { useAuth } from "@/contexts";

import WithAuthForm from "./components/signed-form";
import WithoutAuthForm from "./components/not-signed-form";

export default function ContactForm() {
    const { hasUser } = useAuth();
    return hasUser ? <WithAuthForm /> : <WithoutAuthForm />;
}
