import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider, GlobalProvider, UtilityProvider } from "@/contexts";

import theme from "@/theme";

const queryClient = new QueryClient();

export default function ContextManager({ children }: TProps) {
    return (
        <BrowserRouter>
            <ChakraProvider cssVarsRoot={":root"} theme={theme}>
                <AuthProvider>
                    <QueryClientProvider client={queryClient}>
                        <GlobalProvider>
                            <UtilityProvider>{children}</UtilityProvider>
                        </GlobalProvider>
                    </QueryClientProvider>
                </AuthProvider>
            </ChakraProvider>
        </BrowserRouter>
    );
}
