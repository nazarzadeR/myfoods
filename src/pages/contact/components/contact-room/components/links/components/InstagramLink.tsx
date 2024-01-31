import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GradientTexture } from "@react-three/drei";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function InstagramLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://www.instagram.com", "_blank");
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
            position={[-1.879, 4.422, 0.177]}
            rotation={[-1.562, -0.512, 3.134]}
            geometry={contactRoom?.nodes.instagram_link.geometry}
        >
            <meshBasicMaterial>
                <GradientTexture
                    size={1024}
                    stops={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9, 1]}
                    colors={[
                        "#405DE6",
                        "#5B51D8",
                        "#833AB4",
                        "#C13584",
                        "#E1306C",
                        "#FD1D1D",
                        "#F56040",
                        "#777737",
                        "#FCAF45",
                        "#FFDC80",
                    ]}
                />
            </meshBasicMaterial>
            <mesh
                scale={71.403}
                rotation={[3.12, 0.533, 0.008]}
                position={[-0.003, 0.04, -0.026]}
                geometry={contactRoom?.nodes.instagram_icon.geometry}
                material={contactRoom?.materials.text}
            >
                <mesh
                    scale={0.644}
                    material={contactRoom?.materials.text}
                    geometry={contactRoom?.nodes.instagram_inner.geometry}
                />
            </mesh>
        </mesh>
    );
}
