import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Box, Center } from "@chakra-ui/react";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    Legend,
} from "chart.js";

import { createDataset, createRandomColorArray } from "./helpers";

type Props = TProps<{
    data: Recipe.TTotalDaily;
}>;

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Title,
    Legend,
);

export default function ChartOfRecipe({ data }: Props) {
    const dataset = useMemo(() => createDataset(data), [data]);
    const defaultColors = useMemo(
        () => createRandomColorArray(dataset.dataSets.length - 1),
        [dataset],
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "right" as "bottom",
            },
        },
    };

    return (
        <Center maxW="600px" w="full">
            <Box
                as={Pie}
                options={options}
                data={{
                    labels: dataset.labels,
                    datasets: [
                        {
                            data: dataset.dataSets,
                            backgroundColor: defaultColors,
                        },
                    ],
                }}
            />
        </Center>
    );
}
