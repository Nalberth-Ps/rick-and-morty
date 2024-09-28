import type { ApolloError } from "@apollo/client"
import type { Character } from "@typings/rick-and-morty-api"

export interface CharactersState {
	characters: Character[] | null
	totalPages: number
	currentPage: number
	loading: boolean
	error: ApolloError | null
}

export enum CHARACTERS_ACTION_TYPE {
	SET_CHARACTERS = "SET_CHARACTERS",
	SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

interface SetCharactersAction {
	type: CHARACTERS_ACTION_TYPE.SET_CHARACTERS
	payload: Character[]
}

interface SetPagesAction {
	type: CHARACTERS_ACTION_TYPE.SET_TOTAL_PAGES
	payload: number
}

interface SetCurrentPageAction {
	type: CHARACTERS_ACTION_TYPE.SET_CURRENT_PAGE
	payload: number
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
	| SetPagesAction
	| SetCurrentPageAction
	| SetLoadingAction
	| SetErrorAction
