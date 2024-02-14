import Meta from "./components/Meta";

export default function ThirdPartyManager({ children }: TProps) {
    return (
        <>
            <Meta />
            {children && children}
        </>
    );
}
