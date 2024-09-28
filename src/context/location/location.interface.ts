import type { ApolloError } from "@apollo/client"
import type { Location } from "@typings/rick-and-morty-api"

export interface ILocationContext {
	location: Location | undefined
	loading: boolean
	error: ApolloError | undefined
}
