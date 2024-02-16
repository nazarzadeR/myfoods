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
        noRight?: boolean;
        left?: string | JSX.Element;
        right?: string | JSX.Element;
    },
    InputProps
>;

export default function InputField({
    left,
    right,
    size = "lg",
    pwd = false,
    noRight = false,
    ...props
}: TProps) {
    const [show, { toggle }] = useBoolean(false);
    const [field, meta] = useField(props as FieldHookConfig<unknown>);

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
                    size={size}
                    variant="outline"
                    {...field}
                    {...(props as any)}
                    type={show ? "text" : props.type}
                />
                <CreateRightIcon
                    pwd={pwd}
                    meta={meta}
                    show={show}
                    right={right}
                    toggle={toggle}
                    noRight={noRight}
                />
            </InputGroup>

            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
}

type CreateRightIconProps = Pick<TProps, "pwd" | "right" | "noRight"> & {
    show: boolean;
    meta: any;
    toggle: any;
};

function CreateRightIcon({
    pwd,
    right,
    meta,
    toggle,
    show,
    noRight,
}: CreateRightIconProps) {
    if (noRight || meta.touched) return null;

    return !pwd ? (
        !!right ? (
            <InputRightElement
                fontSize="sm"
                pointerEvents="none"
                children={right}
            />
        ) : (
            <InputRightElement
                fontSize="md"
                pointerEvents="none"
                color={meta.error ? "crimson" : "green.600"}
                children={meta.error ? <CrossIcon /> : <CheckIcon />}
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
    );
}
