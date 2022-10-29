import "../styles/global.css";

import { usePrefersColorScheme } from "@anatoliygatt/use-prefers-color-scheme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Theme } from "react-daisyui";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const preferredColorScheme = usePrefersColorScheme();
  const isDarkColorSchemePreferred = preferredColorScheme === "dark";
  return (
    <>
      <Head>
        {isDarkColorSchemePreferred ? (
          <>
            <link rel="icon" href="/whiteFavicon/favicon.svg" />
            <link
              rel="mask-icon"
              href="/whiteFavicon/mask-icon.svg"
              color="#ffffff"
            />
            <link
              rel="apple-touch-icon"
              href="/whiteFavicon/apple-touch-icon.png"
            ></link>
            <link rel="icon" href="/whiteFavicon/favicon.ico"></link>
            <link rel="manifest" href="whiteFavicon/manifest.json" />
          </>
        ) : (
          <>
            <link rel="icon" href="/blueFavicon/favicon.svg" />
            <link
              rel="mask-icon"
              href="/blueFavicon/mask-icon.svg"
              color="#ffffff"
            />
            <link
              rel="apple-touch-icon"
              href="/blueFavicon/apple-touch-icon.png"
            ></link>
            <link rel="icon" href="/blueFavicon/favicon.ico"></link>
            <link rel="manifest" href="blueFavicon/manifest.json" />
          </>
        )}
        <link rel="icon" href="/favicon.ico"></link>
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <Theme dataTheme="myTheme">
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default MyApp;
