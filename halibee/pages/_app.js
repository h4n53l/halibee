import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Theme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  );
}

export default MyApp;
