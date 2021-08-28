import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import { ThemeProvider } from '../modules/providers/themeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp
