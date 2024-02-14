import React from "react";
import ReactDOM from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import App from "./App.tsx";
import ContextManager from "@/setup/context-manager";
import ThirdPartyManager from "@/setup/third-party-manager";

import "@/lib/i18n.ts";

if (import.meta.env.PROD) {
    disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ContextManager>
            <ThirdPartyManager>
                <App />
            </ThirdPartyManager>
        </ContextManager>
    </React.StrictMode>,
);
