import { useEffect } from "react";

import {
    hasSignLink,
    singInWithEmailLinkAndDeleteUser,
} from "@/services/firebase";
import { MultipleRoundSpinner } from "@/components";

export default function ExternalLinks() {
    useEffect(() => {
        if (hasSignLink()) singInWithEmailLinkAndDeleteUser();
    }, []);

    return <MultipleRoundSpinner />;
}
