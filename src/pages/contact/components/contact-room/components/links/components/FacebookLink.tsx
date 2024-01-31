import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function FacebookLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://www.facebook.com", "_blank");
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
            geometry={contactRoom?.nodes.facebook_link.geometry}
            material={contactRoom?.materials.facebook}
            position={[-1.133, 3.973, 0.177]}
            rotation={[-1.562, -0.512, 3.134]}
            scale={0.784}
        >
            <mesh
                geometry={contactRoom?.nodes.facebook_icon.geometry}
                material={contactRoom?.materials.text}
                position={[0.009, 0.052, 0.025]}
                rotation={[-3.137, 0.497, -3.139]}
                scale={[93.42, 108.6, 89.321]}
            />
        </mesh>
    );
}
