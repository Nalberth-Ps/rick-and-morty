export interface CharacterLocation {
  name: string
  id: string
}

export interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export interface Endpoints {
  character: string
  location: string
  episode: string
}

export interface CharacterFilter {
  name?: string
  type?: string
  species?: Species
  status?: Status
  gender?: Gender
  page?: number
}

export type CharacterFilterTypes =
  | 'name'
  | 'type'
  | 'species'
  | 'status'
  | 'gender'
  | 'page'

// TODO: Mapping the API response to a more friendly type
export type Species = 'Human' | 'Humanoid' | 'Alien' | 'unknown'
export type Status = 'Dead' | 'Alive' | 'unknown'
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface LocationFilter
  extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
  dimension?: string
}

export interface EpisodeFilter extends Pick<CharacterFilter, 'name' | 'page'> {
  /**
   * Filter by the given episode code.
   * i.e: `{ episode: "S01E01" }`
   */
  episode?: string
}

export interface Character extends ResourceBase {
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: Episode[]
}

export type LocationTypes =
  | 'Planet'
  | 'Cluster'
  | 'Space station'
  | 'Dream'
  | 'Fantasy Town'
  | 'TV'
  | 'Resort'
  | 'Microverse'
  | 'unknown'
  | 'Spacecraft'
  | 'Planetoid'
  | 'Game'

export type LocationDimensions =
  | 'unknown'
  | 'Dimension C-137'
  | 'Replacement Dimension'
  | 'Cronenberg Dimension'
  | 'Dimension 5-126'

export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: Character[]
}

export interface Episode extends ResourceBase {
  air_date: string
  episode: string
  characters: string[]
}

export interface ApiResponse<T> {
  /** The HTTP status code from the API response */
  status: number
  /** The HTTP status message from the API response */
  statusMessage: string
  /** The response that was provided by the API */
  data: T
}

export interface Info<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number
    /** The amount of pages */
    pages: number
    /** Link to the next page (if it exists) */
    next: string | null
    /** Link to the previous page (if it exists) */
    prev: string | null
  }
  results?: T
}
