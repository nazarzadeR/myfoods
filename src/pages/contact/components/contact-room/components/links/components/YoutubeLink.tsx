import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function YoutubeLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { contactRoom } = useContactRoomEnvironment();
    const { hovered, onEnter, onExit } = useHoverElement();

    const onHandleClick = () => {
        window.open("https://www.youtube.com", "_blank");
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
            onPointerLeave={onExit}
            onPointerEnter={onEnter}
            onClick={onHandleClick}
            geometry={contactRoom?.nodes.youtube_link.geometry}
            material={contactRoom?.materials.youtube_hexagon}
            position={[-2.643, 3.989, 0.191]}
            rotation={[-1.562, -0.512, 3.134]}
            scale={0.784}
        >
            <mesh
                geometry={contactRoom?.nodes.youtube_icon.geometry}
                material={contactRoom?.materials.youtube_color}
                position={[0.003, 0.063, -0.029]}
                rotation={[-3.135, 0.521, -3.123]}
                scale={80.52}
            >
                <mesh
                    geometry={
                        contactRoom?.nodes.youtube_icon_play_button.geometry
                    }
                    material={contactRoom?.materials.text}
                    rotation={[1.543, -1.531, -1.606]}
                    scale={[0.009, 0.01, 0.009]}
                />
            </mesh>
        </mesh>
    );
}
