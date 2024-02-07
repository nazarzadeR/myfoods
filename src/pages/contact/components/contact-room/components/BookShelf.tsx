import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "../hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function BookShelf() {
    const reactBookRef = useRef<THREE.Mesh>(null);
    const { contactRoom } = useContactRoomEnvironment();
    const { hovered, onEnter, onExit } = useHoverElement();

    useGSAP(
        () => {
            const fromHoveredValue = (f: number, s: number) =>
                !hovered ? f : s;

            if (reactBookRef.current) {
                gsap.timeline()
                    .to(reactBookRef.current.position, {
                        x: fromHoveredValue(-5.6, -5),
                        duration: 0.4,
                    })
                    .to(
                        reactBookRef.current.rotation,
                        {
                            x: fromHoveredValue(-1.203, -1.7),
                            z: fromHoveredValue(0.022, 1),
                        },
                        "-=.4",
                    );
            }
        },
        {
            dependencies: [hovered],
        },
    );

    return (
        <group>
            <mesh
                geometry={contactRoom?.nodes.book_shelf.geometry}
                material={contactRoom?.materials.youtube_hexagon}
                position={[-5.588, 4.091, 5.199]}
                scale={[0.282, 0.044, 2.165]}
            />
            <mesh
                geometry={contactRoom?.nodes.book_shelf_handlers.geometry}
                material={contactRoom?.materials["case"]}
                position={[-5.583, 4.348, 7.288]}
                rotation={[-1.557, 0.022, -1.575]}
                scale={0.642}
            />
            <group onPointerEnter={onEnter} onPointerLeave={onExit}>
                <group
                    position={[-5.377, 4.634, 7.168]}
                    rotation={[-3.14, 0.003, -3.127]}
                    scale={0.084}
                >
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder011.geometry}
                        material={contactRoom?.materials.book_one}
                    />
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder011_1.geometry}
                        material={contactRoom?.materials.text}
                    />
                </group>
                <group
                    position={[-5.377, 4.634, 6.997]}
                    rotation={[-3.14, 0.003, -3.127]}
                    scale={0.084}
                >
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder012.geometry}
                        material={contactRoom?.materials.book_two}
                    />
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder012_1.geometry}
                        material={contactRoom?.materials.text}
                    />
                </group>
                <group
                    position={[-5.377, 4.634, 6.835]}
                    rotation={[-3.14, 0.003, -3.127]}
                    scale={0.084}
                >
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder016.geometry}
                        material={contactRoom?.materials.fintlab}
                    />
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder016_1.geometry}
                        material={contactRoom?.materials.text}
                    />
                </group>
                <group
                    position={[-5.377, 4.634, 6.672]}
                    rotation={[-3.14, 0.003, -3.127]}
                    scale={0.084}
                >
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder017.geometry}
                        material={contactRoom?.materials.book_three}
                    />
                    <mesh
                        geometry={contactRoom?.nodes.Cylinder017_1.geometry}
                        material={contactRoom?.materials.text}
                    />
                </group>

                <mesh
                    ref={reactBookRef}
                    scale={875.184}
                    position={[-5.6, 4.41, 6.45]}
                    rotation={[-1.203, 0.032, 0.022]}
                    material={contactRoom?.materials.twitter}
                    geometry={contactRoom?.nodes.react_icon.geometry}
                >
                    <group
                        position={[-0.00004, 0.0001, 0]}
                        rotation={[-1.5, 0.025, 3.124]}
                        scale={0.0001}
                    >
                        <mesh
                            geometry={contactRoom?.nodes.Cylinder018.geometry}
                            material={contactRoom?.materials.bed_legs}
                        />
                        <mesh
                            geometry={contactRoom?.nodes.Cylinder018_1.geometry}
                            material={contactRoom?.materials.text}
                        />
                    </group>
                </mesh>
            </group>
            <mesh
                geometry={contactRoom?.nodes.cactus_cup.geometry}
                material={contactRoom?.materials.cactus_cup}
                position={[-5.583, 4.264, 3.488]}
                scale={0.147}
            >
                <mesh
                    geometry={contactRoom?.nodes.cactus.geometry}
                    material={contactRoom?.materials.cactus}
                    position={[-0.013, 0.327, 0.006]}
                    scale={1.054}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.671, 1.183, 0.959]}
                    rotation={[3.12, -0.946, 1.414]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_001.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.853, 2.043, 0.963]}
                    rotation={[2.993, -0.612, 1.44]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_002.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-1.005, 1.982, 0.415]}
                    rotation={[3.052, 0.401, 1.58]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_003.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-1.034, 2.438, 0.642]}
                    rotation={[3.114, -0.332, 1.734]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_004.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.82, 2.996, 0.833]}
                    rotation={[-2.604, -1.102, 2.463]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_005.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-1.025, 1.476, -0.509]}
                    rotation={[-2.744, 0.268, 1.358]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_006.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.338, 3.763, -0.455]}
                    rotation={[-0.61, 0.867, 0.316]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_007.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.801, 2.31, -0.959]}
                    rotation={[-2.016, 0.955, 0.591]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_008.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.697, 3.311, -0.127]}
                    rotation={[-1.776, 0.312, 2.007]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_009.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.177, 1.601, -0.875]}
                    rotation={[-2.335, 0.987, 0.787]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_010.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.427, 1.293, -0.937]}
                    rotation={[-1.249, 1.144, -0.463]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_011.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.962, 1.258, -0.598]}
                    rotation={[-0.575, -0.102, -1.759]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_012.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.887, 2.416, -0.887]}
                    rotation={[-0.541, 0.462, -1.102]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_013.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.528, 2.759, -0.964]}
                    rotation={[-1.234, 0.853, -0.09]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_014.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.876, 2.598, -0.213]}
                    rotation={[-0.393, -0.44, -1.634]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_015.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.679, 1.983, 0.313]}
                    rotation={[-0.343, 0.473, -1.435]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_016.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.597, 1.51, -0.18]}
                    rotation={[-0.355, -0.381, -1.799]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_017.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.193, 3.686, -0.516]}
                    rotation={[-1.193, 0.496, 0.332]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_018.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.66, 3.365, -0.664]}
                    rotation={[-0.755, 0.442, -0.604]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_019.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.8, 3.248, 0.571]}
                    rotation={[0.076, -0.583, -1.075]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_020.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.747, 2.639, 0.962]}
                    rotation={[0.623, -1.16, -0.935]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_021.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.054, 3.06, 0.678]}
                    rotation={[0.391, -1.06, -0.948]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_022.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[0.723, 1.593, 0.954]}
                    rotation={[0.715, -1.178, -0.993]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_023.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.262, 1.403, 0.898]}
                    rotation={[0.625, -1.115, -1.087]}
                    scale={[0.134, 0.15, 0.149]}
                />
                <mesh
                    geometry={contactRoom?.nodes.cactus_024.geometry}
                    material={contactRoom?.materials.spikes}
                    position={[-0.262, 1.403, 0.898]}
                    rotation={[0.625, -1.115, -1.087]}
                    scale={[0.134, 0.15, 0.149]}
                />
            </mesh>
        </group>
    );
}
