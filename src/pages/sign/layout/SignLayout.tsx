import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import { useAuth } from "@/contexts";

export default function SignLayout() {
    const { hasUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (hasUser) navigate("/");
    }, [hasUser]);

    return <Outlet />;
}
