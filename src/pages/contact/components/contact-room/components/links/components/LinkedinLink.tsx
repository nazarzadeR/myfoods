import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function LinkedinLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://www.linkedin.com/in/rasad-nazarzade/", "_blank");
    };

    useGSAP(
        () => {
            if (ref.current) {
                gsap.to(ref?.current?.position, {
                    z: hovered ? 0.3 : 0.184,
                    duration: 0.3,
                });
            }
        },
        { dependencies: [hovered] },
    );

    return (
        <mesh
            ref={ref}
            onClick={onHandleClick}
            onPointerLeave={onExit}
            onPointerEnter={onEnter}
            geometry={contactRoom?.nodes.linkedin_link.geometry}
            material={contactRoom?.materials.linkedin}
            position={[-1.906, 2.677, 0.193]}
            rotation={[-1.562, -0.512, 3.134]}
            scale={0.784}
        >
            <mesh
                geometry={contactRoom?.nodes.linkedin_icon.geometry}
                material={contactRoom?.materials.text}
                position={[-0.09, 0.059, -0.063]}
                rotation={[-3.125, 0.533, 3.114]}
                scale={72.939}
            >
                <mesh
                    position={[-0.003, 0, -0.003]}
                    material={contactRoom?.materials.text}
                    geometry={contactRoom?.nodes.Curve002.geometry}
                />
                <mesh
                    geometry={contactRoom?.nodes.linkedin_icon_n.geometry}
                    material={contactRoom?.materials.text}
                    position={[-0.003, 0, 0]}
                />
            </mesh>
        </mesh>
    );
}
