import gsap from "gsap";
import { useRef } from "react";

import useHoverElement from "../hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function Desktop() {
    const chairRef = useRef<THREE.Group>(null);
    const { contactRoom } = useContactRoomEnvironment();
    const { onExit, onEnter } = useHoverElement();

    const handleClick = () => {
        if (chairRef.current) {
            gsap.fromTo(
                chairRef.current.rotation,
                {
                    y: 1.361,
                },
                {
                    duration: 1,
                    y: () => 6 + 1.361,
                },
            );
        }
    };

    return (
        <>
            <mesh
                scale={0.053}
                position={[-5.452, 1.817, 4.804]}
                material={contactRoom?.materials.chair}
                geometry={contactRoom?.nodes.monitor_handler_vertical.geometry}
            />
            <mesh
                scale={[0.053, 0.034, 0.053]}
                position={[-5.45, 2.465, 4.806]}
                material={contactRoom?.materials.chair}
                geometry={contactRoom?.nodes.monitor_handler.geometry}
            />
            <mesh
                scale={[0.056, 0.576, 0.056]}
                position={[-4.634, 0.968, 7.055]}
                material={contactRoom?.materials.bed}
                geometry={contactRoom?.nodes.legs.geometry}
            />
            <mesh
                scale={[0.017, 0.505, 1]}
                position={[-5.272, 2.444, 5.306]}
                material={contactRoom?.materials["case"]}
                geometry={contactRoom?.nodes.monitor.geometry}
            >
                <mesh
                    scale={[0.957, 56.166, 1.898]}
                    position={[14.631, -0.021, -0.002]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    material={contactRoom?.materials.myfood_image}
                    geometry={contactRoom?.nodes.myfood_image.geometry}
                />
            </mesh>
            <mesh
                scale={[-0.708, -0.066, -2.151]}
                position={[-5.137, 1.554, 5.155]}
                rotation={[-Math.PI, 0, -Math.PI]}
                material={contactRoom?.materials.bed}
                geometry={contactRoom?.nodes.table.geometry}
            />
            <mesh
                rotation={[0, 0.537, 0]}
                scale={[0.41, 0.431, 0.231]}
                position={[-5.306, 2.054, 3.504]}
                material={contactRoom?.materials["case"]}
                geometry={contactRoom?.nodes["case"].geometry}
            />
            <mesh
                rotation={[0, -0.34, 0]}
                scale={[0.168, 0.205, 0.168]}
                position={[-5.561, 1.822, 4.221]}
                material={contactRoom?.materials["case"]}
                geometry={contactRoom?.nodes.speaker_right.geometry}
            >
                <mesh
                    scale={[0.028, 0.034, 0.034]}
                    rotation={[0, 0, -Math.PI / 2]}
                    position={[1.002, -0.864, 0.491]}
                    geometry={contactRoom?.nodes.speaker_button_left.geometry}
                    material={contactRoom?.nodes.speaker_button_left.material}
                />
                <mesh
                    scale={[0.028, 0.034, 0.034]}
                    rotation={[0, 0, -Math.PI / 2]}
                    position={[1.002, -0.864, 0.602]}
                    geometry={contactRoom?.nodes.speaker_button_right.geometry}
                    material={contactRoom?.nodes.speaker_button_right.material}
                />
                <mesh
                    scale={[0.055, 0.067, 0.067]}
                    rotation={[0, 0, -Math.PI / 2]}
                    position={[1.002, -0.864, -0.659]}
                    geometry={
                        contactRoom?.nodes.speaker_open_close_button.geometry
                    }
                    material={
                        contactRoom?.nodes.speaker_open_close_button.material
                    }
                />
            </mesh>
            <mesh
                rotation={[0, 0.378, 0]}
                scale={[0.168, 0.205, 0.168]}
                position={[-5.561, 1.822, 6.41]}
                material={contactRoom?.materials["case"]}
                geometry={contactRoom?.nodes.speaker_left.geometry}
            />
            <group
                ref={chairRef}
                onClick={handleClick}
                onPointerEnter={onEnter}
                onPointerLeave={onExit}
                rotation={[0, 1.361, 0]}
                scale={[0.442, 0.442, 0.322]}
                position={[-3.692, 1.061, 5.181]}
            >
                <mesh
                    material={contactRoom?.materials.chair}
                    geometry={contactRoom?.nodes.Plane001.geometry}
                />
                <mesh
                    geometry={contactRoom?.nodes.Plane001_1.geometry}
                    material={contactRoom?.materials.text}
                />
            </group>
            <mesh
                position={[-4.863, 1.644, 5.48]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.197, -0.016, -0.473]}
                geometry={contactRoom?.nodes.keyboard.geometry}
                material={contactRoom?.materials.keyboard}
            />
            <mesh
                scale={[-0.005, 0, -0.013]}
                position={[-4.979, 1.697, 5.885]}
                rotation={[-Math.PI, 0, -Math.PI]}
                material={contactRoom?.materials.time}
                geometry={contactRoom?.nodes.keyboard_key.geometry}
            />
            <mesh
                scale={[0.127, 0.046, 0.099]}
                position={[-4.799, 1.681, 4.778]}
                material={contactRoom?.materials.keyboard}
                geometry={contactRoom?.nodes.mouse.geometry}
            />
            <mesh
                rotation={[0, 0, -Math.PI]}
                scale={[-0.372, -0.007, -0.808]}
                position={[-4.957, 1.626, 5.331]}
                material={contactRoom?.materials.mouse_pad}
                geometry={contactRoom?.nodes.mouse_pad.geometry}
            />
        </>
    );
}
