import { Button, ButtonProps } from "@chakra-ui/react";

type Props = TDetailedProps<
    {
        loading?: boolean;
    },
    ButtonProps
>;

export default function ButtonField({
    children,
    loading = false,
    ...props
}: Props) {
    return (
        <Button isLoading={loading} {...props}>
            {children && children}
        </Button>
    );
}
