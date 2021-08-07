import Amplify from 'aws-amplify'
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Theme } from "../utils/theme";
import config from "../src/aws-exports";

Amplify.configure({
  ...config,
  ssr: true
})
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  );
}

export default MyApp;
