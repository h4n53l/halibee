import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import { AuthUserProvider } from '../modules/providers/authProvider'
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
