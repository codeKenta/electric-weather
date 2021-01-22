import { gql } from '@apollo/client'

export const getWeather = gql`
  query GetWeather {
    me {
      home(id: "a8c210fc-2988-4f06-9fe9-ab1bad9529d5") {
        weather {
          minTemperature
          maxTemperature
          entries {
            time
            temperature
            type
          }
        }
      }
    }
  }
`
