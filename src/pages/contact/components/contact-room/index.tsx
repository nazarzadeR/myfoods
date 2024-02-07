import { useRef } from "react";
import { CameraControls } from "@react-three/drei";

import Room from "./components/Room";
import useCameraPosition from "./hooks/useCameraPosition";

import Environment from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function ContentRoom() {
    const cameraRef = useRef(null);

    useCameraPosition(cameraRef);

    return (
        <Environment>
            <directionalLight
                castShadow
                intensity={6.5}
                position={[2.1, 1.3, 1.5]}
            />

            <CameraControls
                ref={cameraRef}
                minPolarAngle={1.2}
                maxPolarAngle={1.5}
                maxAzimuthAngle={0.8}
                minAzimuthAngle={0}
            />

            <Room position-x={3.5} position-y={-0.5} scale={0.7} />
        </Environment>
    );
}
