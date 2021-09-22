import 'tailwindcss/tailwind.css'
import NextNProgress from "nextjs-progressbar"
import Layout from '../components/layout'
import { ThemeProvider } from '../modules/providers/themeProvider'







function MyApp({ Component, pageProps }) {
  return (
    
    <ThemeProvider initialTheme={undefined}>
    <Layout>
    <NextNProgress height={6} color="#FAAA20" />
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    
  )
}

export default MyApp
