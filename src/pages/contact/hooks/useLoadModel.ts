import { isEmpty } from "lodash";
import { useEffect } from "react";
import { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";

type GLTFResult = ContactRoom.GLTFResult<GLTF>;
type onLoad = (glb: GLTFResult) => void;

export default function useLoadGLBF(url: string, onLoad: onLoad) {
    const glb = useGLTF(url) as GLTFResult;

    useEffect(() => {
        if (!isEmpty(glb)) {
            onLoad(glb);
        }
    }, [glb]);
}

useGLTF.preload("/models/contact_room.glb");
