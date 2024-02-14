import { map } from "lodash";

export function createDataset(data: Recipe.TTotalDaily) {
    const labels = map(data, (d) => d.label);
    const dataSets = map(data, (d) => d.quantity);

    return {
        labels,
        dataSets,
    };
}

export function createRandomColorArray(count: number) {
    const randomColor = () => Math.floor(Math.random() * 128) + 128;

    return Array.from({ length: count }).map(
        () => `rgb(${randomColor()},${randomColor()},${randomColor()})`,
    );
}
