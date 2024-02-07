import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/contexts";
import { MultipleRoundSpinner } from "@/components";

export default function RequiredAuthLayout() {
    const { hasUser, isLoading } = useAuth();

    if (isLoading) return <MultipleRoundSpinner />;

    if (!hasUser) return <Navigate to="/unauthorized" />;

    return <Outlet />;
}
