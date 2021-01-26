import { useMemo } from 'react'
import merge from 'deepmerge'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__'
export const COOKIES_TOKEN_NAME = 'jwt'

let apolloClient = null

const createApolloClient = (ctx, token = '') => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    credentials: 'same-origin',
  })

  const authLink = setContext(async (_, { headers }) => {
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
  const client = apolloClient ?? createApolloClient(ctx, initialState.token)

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

  const stateWithToken = { ...state, token: pageProps.token }

  const store = useMemo(() => initializeApollo(stateWithToken), [
    stateWithToken,
  ])

  return store
}
