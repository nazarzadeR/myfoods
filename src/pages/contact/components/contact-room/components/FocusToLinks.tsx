import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

import { useFocus } from "../store/focus";
import useHoverElement from "../hooks/useHoverElement";

export default function FocusMeshIcons() {
    const ref = useRef(null);
    const pointGeometryRef = useRef<THREE.Mesh>(null);
    const { hovered, onEnter, onExit } = useHoverElement();
    const { addMesh, focus, setFocus } = useFocus();

    const isNotLinks = focus !== "LINKS";

    const setFocusTo = () => setFocus(isNotLinks ? "LINKS" : "HOME");

    useEffect(() => {
        if (!!ref.current) {
            addMesh({
                name: "LINKS",
                mesh: ref.current,
            });
        }
    }, []);

    useGSAP(
        () => {
            if (!!pointGeometryRef.current) {
                const size = isNotLinks ? 1 : 0.7;
                const scale = hovered ? size + 0.2 : size;

                gsap.to(pointGeometryRef.current.scale, {
                    x: scale,
                    y: scale,
                    z: scale,
                });
            }
        },
        {
            dependencies: [hovered],
        },
    );

    useGSAP(
        () => {
            if (!!pointGeometryRef.current) {
                const scaleSize = isNotLinks ? 1 : 0.7;
                const positionX = isNotLinks ? -1.8 : -3;

                gsap.to(pointGeometryRef.current.position, {
                    x: positionX,
                });

                gsap.to(pointGeometryRef.current.scale, {
                    x: scaleSize,
                    y: scaleSize,
                    z: scaleSize,
                });
            }
        },
        { dependencies: [focus] },
    );

    return (
        <group>
            <mesh ref={ref} visible={false} position={[-2, 2.6, 1.2]}>
                <boxGeometry args={[6.5, 5]} />
                <meshBasicMaterial color="orange" transparent opacity={0.5} />
            </mesh>

            <mesh
                ref={pointGeometryRef}
                onPointerEnter={onEnter}
                onPointerLeave={onExit}
                position={[-1.8, 2.1, 1.6]}
                onClick={() => setFocusTo()}
            >
                <sphereGeometry args={[0.15, 32, 12]} />
                <meshPhongMaterial
                    color="#FFC000"
                    shininess={1200}
                    emissive="#FFC000"
                    emissiveIntensity={1}
                />
            </mesh>
        </group>
    );
}
