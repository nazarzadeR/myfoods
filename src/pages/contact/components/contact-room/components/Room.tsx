import Bed from "./Bed";
import Shelf from "./Shelf";
import Links from "./links";
import Desktop from "./Desktop";
import BookShelf from "./BookShelf";
import FocusToHome from "./FocusToRoom";
import FocusToLinks from "./FocusToLinks";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

type Props = TProps<JSX.IntrinsicElements["group"]>;

export default function Room(props: Props) {
    const { contactRoom } = useContactRoomEnvironment();

    return (
        <group {...props}>
            <mesh
                scale={[4.08, 2.58, 4.08]}
                position={[-3.052, 2.041, 3.004]}
                material={contactRoom?.materials.wall}
                geometry={contactRoom?.nodes.walls.geometry}
            >
                <mesh
                    scale={[1, 0.822, 1]}
                    position={[-0.183, -0.521, -0.2]}
                    material={contactRoom?.materials.floor_trim}
                    geometry={contactRoom?.nodes.floor_trim.geometry}
                />
            </mesh>
            <Shelf />
            <Bed />
            <Links />
            <Desktop />
            <BookShelf />
            <FocusToHome />
            <FocusToLinks />
        </group>
    );
}
