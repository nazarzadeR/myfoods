import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function Shelf() {
    const { contactRoom } = useContactRoomEnvironment();
    return (
        <>
            <mesh
                scale={[0.824, 1, 1]}
                position={[1.607, 1.091, 0.708]}
                material={contactRoom?.materials.self}
                geometry={contactRoom?.nodes.self.geometry}
            >
                <mesh
                    scale={[0.144, 0.041, 0.018]}
                    position={[-0.003, -0.464, 0.488]}
                    material={contactRoom?.materials.self_handlers}
                    geometry={contactRoom?.nodes.self_handler_top.geometry}
                />

                <mesh
                    position={[-0.003, -0.005, 0.488]}
                    scale={[0.144, 0.041, 0.018]}
                    material={contactRoom?.materials.self_handlers}
                    geometry={contactRoom?.nodes.self_handler_middle.geometry}
                />

                <mesh
                    scale={[0.144, 0.041, 0.018]}
                    position={[-0.003, 0.448, 0.488]}
                    material={contactRoom?.materials.self_handlers}
                    geometry={contactRoom?.nodes.self_handler_bottom.geometry}
                />
            </mesh>

            <group
                rotation={[-0.26, 0, 0]}
                scale={[0.039, 0.006, 0.009]}
                position={[1.806, 1.956, 0.559]}
            >
                <mesh
                    geometry={contactRoom?.nodes.Cube023.geometry}
                    material={contactRoom?.materials.youtube_hexagon}
                />
                <mesh
                    geometry={contactRoom?.nodes.Cube023_1.geometry}
                    material={contactRoom?.materials.daltonlar}
                />
            </group>

            <mesh
                scale={[0.063, 0.13, 0.13]}
                position={[1.243, 1.869, 0.458]}
                rotation={[1.559, -0.534, -1.572]}
                material={contactRoom?.materials.time}
                geometry={contactRoom?.nodes.scorpion_seconds.geometry}
            >
                <mesh
                    scale={[0.984, 1, 1]}
                    rotation={[-2.105, -0.009, 0.018]}
                    position={[-0.102, -0.001, -0.179]}
                    material={contactRoom?.materials.clock}
                    geometry={contactRoom?.nodes.Clock.geometry}
                />
                <mesh
                    scale={[0.984, 1, 1]}
                    rotation={[-2.105, -0.009, 0.018]}
                    position={[-0.102, -0.001, -0.179]}
                    material={contactRoom?.materials.time}
                    geometry={contactRoom?.nodes.clock_inner.geometry}
                />
                <mesh
                    rotation={[-2.105, -0.009, 0.018]}
                    position={[-0.102, -0.001, -0.179]}
                    material={contactRoom?.materials.time}
                    geometry={contactRoom?.nodes.scorpion_hour.geometry}
                />
                <mesh
                    rotation={[-2.105, -0.009, 0.018]}
                    position={[-0.102, -0.001, -0.179]}
                    material={contactRoom?.materials.time}
                    geometry={contactRoom?.nodes.scorpion_minute.geometry}
                />
            </mesh>
        </>
    );
}
