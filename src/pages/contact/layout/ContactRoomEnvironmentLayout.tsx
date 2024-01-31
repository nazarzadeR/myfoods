import { CanvasProps, Canvas } from "@react-three/fiber";

import { MultipleRoundSpinner } from "@/components";
import useLoadModel from "@/pages/contact/hooks/useLoadModel";
import { useContactRoomEnvironment } from "../context/ContactRoomEnvironmentContext";

type TEnvironmentProps = TProps<CanvasProps>;

export default function ContactRoomEnvironmentLayout({
    children,
    ...rest
}: TEnvironmentProps) {
    const { contactRoom, setContactRoom } = useContactRoomEnvironment();

    useLoadModel("/models/contact_room.glb", (glb) => {
        setContactRoom(glb);
    });

    if (!!!contactRoom) return <MultipleRoundSpinner />;

    return <Canvas {...rest}>{children}</Canvas>;
}
