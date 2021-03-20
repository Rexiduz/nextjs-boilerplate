import Provider from '@Client/core/provider'
import Layout from '@View/atoms/Layout/Layout'
import '@View/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
