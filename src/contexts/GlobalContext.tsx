import { useContext, useMemo, createContext } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import { MEDIA_BREAKPOINTS } from "@/data/constants";
import { detectOSInfo, detectMobileDevice } from "@/util";

const defaultGlobal = {} as Context.TGlobalContext;
const GlobalContext = createContext(defaultGlobal);

export function GlobalProvider({ children }: TProps) {
    const os = useMemo(detectOSInfo, []);
    const isMobileDevice = useMemo(detectMobileDevice, []);
    const [
        isSM,
        isMD,
        isLG,
        isXL,
        aboveSM,
        aboveMD,
        aboveLG,
        aboveXL,
        aboveXXL,
    ] = useMediaQuery([
        MEDIA_BREAKPOINTS.MAX_MOBILE,
        MEDIA_BREAKPOINTS.MAX_TABLET,
        MEDIA_BREAKPOINTS.MAX_LAPTOP,
        MEDIA_BREAKPOINTS.MAX_DESKTOP,
        MEDIA_BREAKPOINTS.MOBILE,
        MEDIA_BREAKPOINTS.TABLET,
        MEDIA_BREAKPOINTS.LAPTOP,
        MEDIA_BREAKPOINTS.DESKTOP,
        MEDIA_BREAKPOINTS.EXTRA,
    ]);

    return (
        <GlobalContext.Provider
            value={{
                os,
                isMobileDevice,
                screenSize: {
                    isSM,
                    isMD,
                    isLG,
                    isXL,
                    aboveSM,
                    aboveMD,
                    aboveLG,
                    aboveXL,
                    aboveXXL,
                },
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobals = () => useContext(GlobalContext);
