export const pag = (c: number, m: number): (string | number)[] => {
    let current = c,
        last = m,
        delta = 1,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++)
        if (i === 1 || i === last || (i >= left && i < right)) range.push(i);

    for (let i of range) {
        if (l) {
            if (i - l === 2) rangeWithDots.push(l + 1);
            else if (i - l !== 1) rangeWithDots.push("....");
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
};

export const isNum = (num: any) => typeof num === "number";
