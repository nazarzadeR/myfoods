import {
    Textarea,
    InputGroup,
    FormControl,
    TextareaProps,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";

type Props = TDetailedProps<
    {
        size?: string;
        pwd?: boolean;
        noLeft?: boolean;
        left?: string | JSX.Element;
    },
    FieldHookConfig<any> & TextareaProps
>;

export default function TextFiled({
    left,
    size = "md",
    pwd = false,
    ...props
}: Props) {
    const [field, meta] = useField(props as FieldHookConfig<any>);

    const onError: boolean = !!meta.touched && !!meta.error;

    return (
        <FormControl isInvalid={onError}>
            <InputGroup size={size}>
                <Textarea variant="outline" {...field} {...(props as any)} />
            </InputGroup>

            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
}
