import { gql } from '@apollo/client'

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
      image
    }
  }
`
