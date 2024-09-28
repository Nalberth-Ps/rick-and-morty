import type { ApolloError } from "@apollo/client"
import type { Character } from "@typings/rick-and-morty-api"

export interface ICharacterContext {
	character: Character | undefined
	loading: boolean
	error: ApolloError | undefined
}
