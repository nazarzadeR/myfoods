import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function FintlabLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://fintlabs.com", "_blank");
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
            scale={0.784}
            onClick={onHandleClick}
            onPointerLeave={onExit}
            onPointerEnter={onEnter}
            position={[-1.145, 3.111, 0.191]}
            rotation={[-1.562, -0.512, 3.134]}
            material={contactRoom?.materials.text}
            geometry={contactRoom?.nodes.fintlab_link.geometry}
        >
            <mesh
                scale={14.942}
                position={[0.006, 0.048, -0.156]}
                rotation={[-3.13, 0.444, 3.127]}
                material={contactRoom?.materials.fintlab}
                geometry={contactRoom?.nodes.fintlab_icon.geometry}
            />
        </mesh>
    );
}
