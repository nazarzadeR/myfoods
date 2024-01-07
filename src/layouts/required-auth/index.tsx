import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/contexts";

export default function RequiredAuthLayout() {
    const { hasUser } = useAuth();

    if (!hasUser) return <Navigate to="/" />;

    return <Outlet />;
}
