import Amplify from "aws-amplify";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";
import { Theme } from "../utils/theme";
import config from "../src/aws-exports";
import "neomo/css/neomo.css"
import "../styles/globals.css"




Amplify.configure({
  ...config,
  ssr: true,
});


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
