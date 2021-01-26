# electric-weather

Displays weather data via an external GraphQL-server.

## Start

1. Create a _.env.local_ in the root and fill with the content from _.env.local.exampel_ with correct values.
2. Start with _npm run dev_

## Stack

- NextJS
- Apollo Client
- Styled JSX : The look and feel of classic CSS with the extended power of JavaScript. Built in support in NextJS
- Rechart - React D3 library

## The solution

The application fetches the weather data from the external GraphQL-server in the client.

The data is displayed as graphs with the library Rechart.

Custom made animated Tibber-symbol as loader.

Update 2020:26: The initial token request is moved to server-side so credential is not exposed in the browser network tab.

### The Surprise

The surprise function takes the most accouring wehater type of the shown day and sets a giphy in the background.

### Room for improvements

- The JWT-token that are used to athenticate against the server is set on the initial pre-fetch before the apollo client is construced. At the moment, the token is not refreshed but the app structure is prepared so it can refresh the token if nescessary.

- Bar chart: I have worked with D3-wrappers for Angular before but not with Rechart. So I bet there is many improvements regarding the implementation. For e.g. better UX with clearified labels and tooltips.

- Data crunching
  With this solution there is data crunching in the weather-component to get avarage temperature and formating date. A better aproach would be to set up a local wrapping graphQL server with resolvers to provide the client with correct data.

- The GlobalContext and useGlobalContext-hook this is only used for the surprise function. If there was a real global state for the app I would prefer a state handler or at least useReducer over just setState-actions.

- Typing. For the scope of the assignment I didn't use any typing more than PropTypes. If this was a part of a larger application it would use TypeScript.

## Other

Starter template: [Learn Next.js](https://nextjs.org/learn)
Apollo setup: (https://github.com/borisowsky/next-advanced-apollo-starter)
