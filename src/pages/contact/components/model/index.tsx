import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import Rocket from "./components/Rocket";

export default function RocketModel() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <OrbitControls
                    maxPolarAngle={1.5}
                    minZoom={0}
                    enableZoom={true}
                    zoom0={3}
                    maxZoom={2}
                />
                <directionalLight intensity={2.5} position={[1, 4, -2]} />
                <PerspectiveCamera
                    fov={60}
                    makeDefault
                    position={[5, -10, 0]}
                />
                <Rocket
                    scale={[1.3, 1.3, 1.3]}
                    position={[0, 3.5, 0]}
                    rotation-y={1.5}
                />
            </Canvas>
        </Suspense>
    );
}
