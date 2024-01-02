export {};

declare global {
    type TProps<
        T extends Record<string, any> = {},
        U extends Record<string, any> = {},
    > = {
        [K in keyof T]: T[K];
    } & {
        children?: React.ReactNode;
    } & Omit<U, keyof T>;

    type TDetailedProps<
        T extends Record<string, any> = {},
        U extends Record<string, any> = React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >,
    > = TProps<T & Omit<U, keyof T>>;
}
