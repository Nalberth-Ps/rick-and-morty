import type { ApolloError } from "@apollo/client"
import type { Episode } from "@typings/rick-and-morty-api"

export interface IEpisodeContext {
	episode: Episode | undefined
	loading: boolean
	error: ApolloError | undefined
}
