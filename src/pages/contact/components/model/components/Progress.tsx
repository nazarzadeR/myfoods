import { Text } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";

export default function MultipleAndPercentSpinner() {
    const { progress } = useProgress();
    return (
        <Html center>
            <Text>progress {progress}%</Text>
        </Html>
    );
}
