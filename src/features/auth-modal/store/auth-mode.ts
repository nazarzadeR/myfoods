import { create } from "zustand";

type TAuthMode = "LOGIN" | "REGISTER" | "OTHER";

type State = {
    authMode: TAuthMode;
};
type Actions = {
    setAuthMode(mode: TAuthMode): void;
};

type Store = State & Actions;

const useAuthModal = create<Store>((set) => ({
    authMode: "LOGIN",
    setAuthMode: (mode) => set({ authMode: mode }),
}));

export default useAuthModal;
