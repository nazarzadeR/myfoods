import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SignLayout } from "@/pages/sign";
import { DynamicLoader } from "@/components";
import RequiredAuthLayout from "@/layouts/required-auth";

const Home = lazy(() => import("@/pages/home"));
const Recipe = lazy(() => import("@/pages/recipe"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Favorites = lazy(() => import("@/pages/favorites"));
const Login = lazy(() => import("@/pages/sign/pages/login"));
const UnAuthorized = lazy(() => import("@/pages/unauthorized"));
const Register = lazy(() => import("@/pages/sign/pages/register"));
const MagicLinks = lazy(() => import("@/pages/sign/pages/magic_link"));
const ForgotPass = lazy(() => import("@/pages/sign/pages/forgot_pass"));
const UnderDevelopment = lazy(() => import("@/pages/under_development"));
const ExternalLinks = lazy(() => import("@/pages/sign/pages/ExternalLinks"));

export default function RouterManager() {
    return (
        <Routes>
            <Route path="/" element={<DynamicLoader comp={<Home />} />} />

            <Route path="/sign" element={<SignLayout />}>
                <Route index element={<DynamicLoader comp={<Login />} />} />
                <Route
                    path="register"
                    element={<DynamicLoader comp={<Register />} />}
                />
                <Route
                    path="magic_link"
                    element={<DynamicLoader comp={<MagicLinks />} />}
                />

                <Route
                    path="forgot_pass"
                    element={<DynamicLoader comp={<ForgotPass />} />}
                />

                <Route
                    path="external_links"
                    element={<DynamicLoader comp={<ExternalLinks />} />}
                />
            </Route>

            <Route
                path="/contact"
                element={<DynamicLoader comp={<Contact />} />}
            />

            <Route
                path="/recipe/:name"
                element={<DynamicLoader comp={<Recipe />} />}
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
