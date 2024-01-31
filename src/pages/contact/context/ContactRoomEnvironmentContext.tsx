import { GLTF } from "three-stdlib";
import { CanvasProps } from "@react-three/fiber";
import { createContext, lazy, useContext, Suspense, useState } from "react";

import { MultipleRoundSpinner } from "@/components";

type TEnvironmentProps = TProps<CanvasProps>;
type GLTFResult = ContactRoom.GLTFResult<GLTF> | null;
type TContactRoomContext = {
    contactRoom: GLTFResult;
    setContactRoom(glb: GLTFResult): void;
};

const ContactRoomLayout = lazy(
    () => import("@/pages/contact/layout/ContactRoomEnvironmentLayout"),
);

const defaultContext = {} as TContactRoomContext;

const ContactRoomContext = createContext<TContactRoomContext>(defaultContext);

export default function ContactRoomEnvironmentProvider({
    children,
    ...rest
}: TEnvironmentProps) {
    const [contactRoom, setContactRoom] = useState<GLTFResult | null>(null);

    return (
        <ContactRoomContext.Provider
            value={{
                contactRoom,
                setContactRoom,
            }}
        >
            <Suspense fallback={<MultipleRoundSpinner />}>
                <ContactRoomLayout
                    camera={{
                        fov: 50,
                        position: [6.5, 4.5, 12.5],
                    }}
                    {...rest}
                >
                    {children}
                </ContactRoomLayout>
            </Suspense>
        </ContactRoomContext.Provider>
    );
}

export const useContactRoomEnvironment = () => useContext(ContactRoomContext);
