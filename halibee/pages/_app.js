import Amplify from "aws-amplify";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";
import { Theme } from "../utils/theme";
import awsExports from "../src/aws-exports";

Amplify.configure({
  ...awsExports,
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
