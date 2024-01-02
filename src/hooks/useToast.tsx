import { useToast as useReactToast, UseToastOptions } from "@chakra-ui/react";

type TToastParams = Pick<UseToastOptions, "title" | "description" | "status">;

const useToast = () => {
    const t = useReactToast();
    const toast = (
        { title, status, description }: TToastParams,
        { ...params }: UseToastOptions = {},
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
