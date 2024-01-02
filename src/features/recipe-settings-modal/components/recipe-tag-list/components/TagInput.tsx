import _ from "lodash";
import { useState } from "react";

import { Input, InputProps } from "@chakra-ui/react";
import { useRecipeSettings } from "@/store";

type Props = TProps<InputProps>;

const TagsInput = (props: Props) => {
    const [tag, setTag] = useState("");
    const { addTags } = useRecipeSettings();

    const handleInputVal = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTag(() => e.target.value);

    const onHandleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter" || tag.length < 3) return;

        addTags(tag);
        setTag(() => "");
    };

    return (
        <Input
            w="50%"
            value={tag}
            boxShadow="none"
            border="none !important"
            outline="none !important"
            onChange={handleInputVal}
            onKeyUp={onHandleKeyPress}
            _focusVisible={{
                border: "none",
                outline: "none",
            }}
            {...props}
        />
    );
};

export default TagsInput;
