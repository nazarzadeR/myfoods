import { isResetOopReceived } from "@/services/firebase";
import { useEffect, useState } from "react";

export default function useCheckOop() {
    const [isOopReceived, setOopReceived] = useState(false);
    useEffect(() => {
        if (isResetOopReceived()) setOopReceived(true);
    }, [window.location.search]);

    return isOopReceived;
}
