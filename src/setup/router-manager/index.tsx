import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { DynamicLoader } from "@/components";
import RequiredAuthLayout from "@/layouts/required-auth";

const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Favorites = lazy(() => import("@/pages/favorites"));
const UnAuthorized = lazy(() => import("@/pages/unauthorized"));
const UnderDevelopment = lazy(() => import("@/pages/under_development"));

export default function RouterManager() {
    return (
        <Routes>
            <Route path="/" element={<DynamicLoader comp={<Home />} />} />

            <Route
                path="/contact"
                element={<DynamicLoader comp={<Contact />} />}
            />

            <Route path="/favorites" element={<RequiredAuthLayout />}>
                <Route index element={<DynamicLoader comp={<Favorites />} />} />
            </Route>

            <Route
                path="/under_development"
                element={<DynamicLoader comp={<UnderDevelopment />} />}
            />

            <Route
                path="/unauthorized"
                element={<DynamicLoader comp={<UnAuthorized />} />}
            />

            <Route path="*" element={<DynamicLoader comp={<NotFound />} />} />
        </Routes>
    );
}
