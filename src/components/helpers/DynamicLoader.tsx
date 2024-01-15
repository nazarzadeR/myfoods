import React, { Suspense } from "react";

import { MultipleRoundSpinner } from "@/components";

type Props = TProps<{
    comp?: React.ReactNode;
    fallback?: React.ReactNode;
}>;

export default function DynamicLoader({
    comp,
    children,
    fallback = <MultipleRoundSpinner />,
}: Props) {
    return (
        <Suspense fallback={fallback}>
            {children ? children : comp ? comp : null}
        </Suspense>
    );
}
