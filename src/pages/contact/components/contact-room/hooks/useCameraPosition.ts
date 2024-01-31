import { useEffect } from "react";
import { match } from "ts-pattern";

import { useFocus } from "../store/focus";
import { introCameraPosition } from "../helpers/camera";

export default function useCameraPosition(cameraRef: any) {
    const { focus, meshes } = useFocus();

    useEffect(() => {
        if (!!cameraRef.current && !!meshes[focus]) {
            match(focus)
                .with("HOME", () =>
                    introCameraPosition(cameraRef.current, meshes[focus]),
                )
                .with("LINKS", () =>
                    introCameraPosition(cameraRef.current, meshes[focus]),
                )
                .otherwise(() =>
                    introCameraPosition(cameraRef.current, meshes[focus]),
                );
        }
    }, [cameraRef, focus]);
}
