import React from "react";

import "../styles/global.scss";

import { ChartContextProvider } from "../contexts/ChartContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <ChartContextProvider>
            <Component {...pageProps} />
        </ChartContextProvider>
    );
}
