export const getToken = async () => {
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
