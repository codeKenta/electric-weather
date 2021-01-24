import { useMemo } from 'react'
import merge from 'deepmerge'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__'
export const COOKIES_TOKEN_NAME = 'jwt'

const getToken = async () => {
  const rawResponse = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_LOGIN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: process.env.NEXT_PUBLIC_GRAPHQL_USER,
      password: process.env.NEXT_PUBLIC_GRAPHQL_PASSWORD,
    }),
  })
  const { token } = await rawResponse.json()

  return token ?? ''
}

let apolloClient = null

const createApolloClient = (ctx) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    credentials: 'same-origin',
  })

  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken()

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null, ctx = null) {
  const client = apolloClient ?? createApolloClient(ctx)

  if (initialState) {
    const existingCache = client.extract()

    const data = merge(initialState, existingCache)

    client.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return client
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client
  }

  return client
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME]
  const store = useMemo(() => initializeApollo(state), [state])

  return store
}
