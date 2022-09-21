// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'
import Layout from '../components/layouts/main'
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
    <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
    </Layout>
</ChakraProvider>
  )
}

export default MyApp