import { useEffect } from 'react'

import Provider from '@Client/core/provider'
import Layout from '@View/atoms/Layout/Layout'

import CssBaseline from '@material-ui/core/CssBaseline'
import '@View/styles/index.scss'

export default function MyApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
