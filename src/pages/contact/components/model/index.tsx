import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Float } from "@react-three/drei";

import Progress from "./components/Progress";

const Rocket = lazy(() => import("./components/Rocket"));

export default function RocketModel() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <OrbitControls
                    minZoom={0}
                    zoom0={3}
                    maxZoom={2}
                    enableZoom={true}
                    maxPolarAngle={1.5}
                />
                <directionalLight intensity={3.5}  position={[1, 4, -2]} />
                <PerspectiveCamera
                    fov={60}
                    makeDefault
                    position={[5, -10, 0]}
                />
                <Float floatIntensity={4} rotationIntensity={2}>
                    <Suspense fallback={<Progress />}>
                        <Rocket
                            rotation-y={1.5}
                            position={[0, 3.5, 0]}
                            scale={[1.3, 1.3, 1.3]}
                        />
                    </Suspense>
                </Float>

            </Canvas>
        </Suspense>
    );
}
