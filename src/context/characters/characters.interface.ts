import type { ApolloError } from "@apollo/client"
import type { Character } from "@typings/rick-and-morty-api"

export interface CharactersState {
	characters: Character[] | null
	loading: boolean
	error: ApolloError | null
}

export enum CHARACTERS_ACTION_TYPE {
	SET_CHARACTERS = "SET_CHARACTERS",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

interface SetCharactersAction {
	type: CHARACTERS_ACTION_TYPE.SET_CHARACTERS
	payload: Character[]
}

interface SetLoadingAction {
	type: CHARACTERS_ACTION_TYPE.SET_LOADING
	payload: boolean
}

interface SetErrorAction {
	type: CHARACTERS_ACTION_TYPE.SET_ERROR
	payload: ApolloError
}

export type CharactersAction =
	| SetCharactersAction
	| SetLoadingAction
	| SetErrorAction
