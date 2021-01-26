import NextApp from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../GraphQL/apollo'
import { GlobalProvider } from '../context/globalContext'

import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </ApolloProvider>
  )
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default App
