import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function useOpenHistory() {
    const [isHistoryOpen, setHistoryOpen] = useState(false);
    const [isHistoryWillOpened, setHistoryWillAction] = useState(false);

    const openHistoryPopover = () => setHistoryOpen(() => isHistoryWillOpened);
    const openHistory = useDebouncedCallback(openHistoryPopover, 1000);
    const closeHistory = useDebouncedCallback(
        () => setHistoryOpen(() => false),
        400,
    );

    const toggleOnHistoryHandler = () => {
        setHistoryWillAction(() => true);
        openHistory();
    };

    const toggleOffHistoryHandler =
        (callback: (e: any) => void) => (e: any) => {
            setHistoryWillAction(() => false);
            closeHistory();
            callback(e);
        };

    return { isHistoryOpen, toggleOnHistoryHandler, toggleOffHistoryHandler };
}
