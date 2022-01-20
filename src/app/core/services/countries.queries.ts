import { gql } from '@apollo/client/core'

// Описание схемы GraphQL для запроса
export const GET_ALL_COUNTRIES = gql`
  query ExampleQuery {
    countries {
      code
      name
    }
  }
`

// Описание схемы с аргументом
export const GET_COUNTRY_INFO = gql`
  query ExampleQuery($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      phone
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      states {
        code
        name
      }
    }
  }
`