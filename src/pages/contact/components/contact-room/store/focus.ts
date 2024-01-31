import { omit } from "lodash";
import { create } from "zustand";

type TFocus = "HOME" | "LINKS";
type TAddMesh = {
    name: string;
    mesh: THREE.Mesh;
};
type TMesh = {
    [key: string]: THREE.Mesh;
};

type State = {
    focus: TFocus;
    meshes: TMesh;
};
type Actions = {
    addMesh(mesh: TAddMesh): void;
    setFocus(focus: TFocus): void;
};

type Store = State & Actions;

export const useFocus = create<Store>((set, get) => ({
    meshes: {},
    focus: "HOME",
    setFocus: (focus) => set({ focus: focus }),
    addMesh: (mesh) =>
        set(() => {
            const { meshes } = get();
            const newFocus: TMesh = { [mesh.name]: mesh.mesh };
            const filtered = omit(meshes, [mesh.name]);

            return { meshes: { ...filtered, ...newFocus } };
        }),
}));
