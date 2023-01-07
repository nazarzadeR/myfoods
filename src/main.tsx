import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import theme from "theme";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider resetCSS theme={theme}>
                <QueryClientProvider client={client}>
                    <App />
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
