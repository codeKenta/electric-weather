import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../GraphQL/apollo'

import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
