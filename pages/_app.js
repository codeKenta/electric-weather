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

export default App
