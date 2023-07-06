import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import BackgroundImage from "../components/BackgroundImage";

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return await response.json();
  };
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component {...pageProps} />
        <BackgroundImage />
      </SWRConfig>
    </>
  );
}
