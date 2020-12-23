import '../styles/globals.scss'
import React from "react";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App
