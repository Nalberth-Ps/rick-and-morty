import { gql } from "@apollo/client"

export const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        id
        name
        type
      }
      info {
        pages
        prev
        next
      }
    }
  }
`
