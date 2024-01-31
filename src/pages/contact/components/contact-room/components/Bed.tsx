import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function Bed() {
    const { contactRoom } = useContactRoomEnvironment();
    return (
        <>
            <mesh
                scale={[2.344, 0.25, 1.091]}
                position={[-2.014, 0.889, 1.438]}
                geometry={contactRoom?.nodes.bed.geometry}
                material={contactRoom?.materials.bed}
            />
            <mesh
                scale={[0.125, 0.166, 0.125]}
                position={[-4.013, 0.569, 0.68]}
                geometry={contactRoom?.nodes.bed_legs.geometry}
                material={contactRoom?.materials.bed_legs}
            />
            <mesh
                scale={[0.104, 0.569, 1.042]}
                position={[0.228, 1.192, 1.438]}
                geometry={contactRoom?.nodes.bed_head.geometry}
                material={contactRoom?.materials.bed}
            />
            <mesh
                scale={0.592}
                position={[-0.325, 1.447, 1.445]}
                geometry={contactRoom?.nodes.pillow.geometry}
                material={contactRoom?.materials.pillow}
            />
            <mesh
                scale={[2.517, 0.282, 1.091]}
                position={[-2.126, 1.194, 1.4]}
                geometry={contactRoom?.nodes.bed_back.geometry}
                material={contactRoom?.materials.text}
            />
            <mesh
                scale={[2.526, 0.282, 1.091]}
                position={[-2.092, 1.194, 1.4]}
                rotation={[Math.PI, 0, Math.PI]}
                geometry={contactRoom?.nodes.blanket.geometry}
                material={contactRoom?.materials.material}
            />
        </>
    );
}
