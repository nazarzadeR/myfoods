import { useEffect, useRef } from "react";

import { useFocus } from "../store/focus";

export default function FocusMeshIcons() {
    const ref = useRef(null);
    const { addMesh } = useFocus();

    useEffect(() => {
        if (!!ref.current) {
            addMesh({
                name: "HOME",
                mesh: ref.current,
            });
        }
    }, []);

    return (
        <group>
            <mesh
                ref={ref}
                visible={false}
                position={[-1, 3, 7.2]}
                rotation={[0, 0.4, 0]}
            >
                <boxGeometry args={[10, 7]} />
                <meshBasicMaterial color="orange" transparent opacity={0.5} />
            </mesh>
        </group>
    );
}
