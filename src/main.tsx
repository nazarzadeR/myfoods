import React from "react";
import ReactDOM from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

import App from "./App.tsx";
import ContextManager from "@/setup/context-manager";

import "@/lib/i18n.ts";

if(import.meta.env.PROD){
    disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ContextManager>
            <App />
        </ContextManager>
    </React.StrictMode>,
);
