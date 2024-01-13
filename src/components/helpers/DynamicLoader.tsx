import React, { Suspense } from "react";

type Props = TProps<{
    comp?: React.ReactNode;
    fallback?: React.ReactNode;
}>;

export default function DynamicLoader({ comp, fallback, children }: Props) {
    return (
        <Suspense fallback={fallback}>
            {children ? children : comp ? comp : null}
        </Suspense>
    );
}
