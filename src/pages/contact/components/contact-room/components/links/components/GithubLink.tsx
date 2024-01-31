import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function GithubLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://github.com/nazarzadeR", "_blank");
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
            position={[-1.894, 3.55, 0.184]}
            rotation={[-1.562, -0.512, 3.134]}
            material={contactRoom?.materials.github}
            geometry={contactRoom?.nodes.github_link.geometry}
        >
            <mesh
                geometry={contactRoom?.nodes.github_icon.geometry}
                material={contactRoom?.materials.text}
                position={[0.022, 0.04, -0.011]}
                rotation={[-3.127, 0.512, 0.014]}
                scale={59.525}
            />
        </mesh>
    );
}
