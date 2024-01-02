import {
    Input,
    useBoolean,
    InputGroup,
    InputProps,
    FormControl,
    InputRightElement,
    InputLeftElement,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";

import { CheckIcon, CrossIcon, OpenEyeIcon, CloseEyeIcon } from "@/components";

type TProps = TDetailedProps<
    {
        size?: string;
        pwd?: boolean;
        noLeft?: boolean;
        left?: string | JSX.Element;
    },
    InputProps
>;

export default function InputField({
    left,
    size = "lg",
    pwd = false,
    noLeft = false,
    ...props
}: TProps) {
    const [show, { toggle }] = useBoolean(false);
    const [field, meta] = useField(props as FieldHookConfig<any>);

    const onError = !!meta.touched && !!meta.error;

    return (
        <FormControl isInvalid={onError}>
            <InputGroup size={size}>
                {left && (
                    <InputLeftElement
                        fontSize="md"
                        children={left}
                        pointerEvents="none"
                        color="gray.500"
                    />
                )}
                <Input
                    w="full"
                    variant="outline"
                    {...field}
                    {...(props as any)}
                    type={show ? "text" : props.type}
                />
                {!pwd ? (
                    meta.touched &&
                    !noLeft && (
                        <InputRightElement
                            fontSize="md"
                            pointerEvents="none"
                            color={meta.error ? "crimson" : "green.600"}
                            children={
                                meta.error ? <CrossIcon /> : <CheckIcon />
                            }
                        />
                    )
                ) : (
                    <InputRightElement
                        cursor="pointer"
                        fontSize="x-large"
                        userSelect="none"
                        onClick={() => toggle()}
                        children={show ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    />
                )}
            </InputGroup>

            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
}
