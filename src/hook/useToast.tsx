import React from "react";
import { useToast as useReactToast } from "@chakra-ui/react";

interface IToastParams {
    title?: string;
    description: string;
    status: "info" | "warning" | "success" | "error" | "loading";
}

const useToast = () => {
    const t = useReactToast();
    const toast = (
        { title, status, description }: IToastParams,
        { ...params } = {}
    ) =>
        t({
            title,
            status,
            description,
            duration: 3000,
            position: "top",
            isClosable: true,
            ...params,
        });

    return toast;
};

export default useToast;
