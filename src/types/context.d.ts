declare namespace Context {
    type TAuthContext<TUser> = {
        hasUser: boolean;
        user: TUser | null;
        isLoading: boolean;
    };

    type TGlobalContext = {
        isMobileDevice: boolean;
        screenSize: {
            isSM: boolean;
            isMD: boolean;
            isLG: boolean;
            isXL: boolean;
            aboveSM: boolean;
            aboveMD: boolean;
            aboveLG: boolean;
            aboveXL: boolean;
            aboveXXL: boolean;
        };
        os?:
            | {
                  isMac: boolean;
                  version: string;
                  isLinux: boolean;
                  isWindows: boolean;
                  isFreeBSD: boolean;
              }
            | "";
    };
}
