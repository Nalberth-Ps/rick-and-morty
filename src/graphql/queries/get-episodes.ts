import { gql } from "@apollo/client"

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        name
        air_date
        episode
      }
      info {
        pages
        prev
        next
      }
    }
  }
`
