import React, { useEffect } from "react";

import Emitter from "lib/emitter";

type ReturnType = {
    emit: (data?: any) => void;
};

const useEvent = (
    name: string,
    callback?: (event: any) => void
): ReturnType => {
    const emit = (data: any = {}) => Emitter.emit(name, data);

    useEffect(() => {
        if (callback) Emitter.on(name, callback);

        return () => {
            if (callback) Emitter.off(name, callback);
        };
    }, [name, callback]);

    return {
        emit,
    };
};

export default useEvent;
