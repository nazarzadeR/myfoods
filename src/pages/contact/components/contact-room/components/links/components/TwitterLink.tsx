import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import useHoverElement from "@/pages/contact/components/contact-room/hooks/useHoverElement";
import { useContactRoomEnvironment } from "@/pages/contact/context/ContactRoomEnvironmentContext";

export default function TwitterLink() {
    const ref = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { contactRoom } = useContactRoomEnvironment();

    const onHandleClick = () => {
        window.open("https://twitter.com/?lang=tr", "_blank");
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
            onPointerLeave={onExit}
            onPointerEnter={onEnter}
            onClick={onHandleClick}
            position={[-2.656, 3.132, 0.18]}
            rotation={[-1.562, -0.512, 3.134]}
            geometry={contactRoom?.nodes.twitter_link.geometry}
            material={contactRoom?.materials.twitter_hexagn}
        >
            <mesh
                position={[0.002, 0.04, -0.022]}
                scale={[96.7, 103.612, 103.497]}
                rotation={[3.134, 0.711, -3.102]}
                material={contactRoom?.materials.twitter}
                geometry={contactRoom?.nodes.twitter_icon.geometry}
            />
        </mesh>
    );
}
