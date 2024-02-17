import { MainLayout } from "@/core/layout/MainLayout";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    );
}
