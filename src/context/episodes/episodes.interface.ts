import type { ApolloError } from "@apollo/client"
import type { Episode } from "@typings/rick-and-morty-api"

export interface EpisodesState {
	episodes: Episode[] | null
	loading: boolean
	error: ApolloError | null
}

export enum EPISODES_ACTION_TYPE {
	SET_EPISODES = "SET_EPISODES",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

interface SetEpisodesAction {
	type: EPISODES_ACTION_TYPE.SET_EPISODES
	payload: Episode[]
}

interface SetLoadingAction {
	type: EPISODES_ACTION_TYPE.SET_LOADING
	payload: boolean
}

interface SetErrorAction {
	type: EPISODES_ACTION_TYPE.SET_ERROR
	payload: ApolloError
}

export type EpisodesAction =
	| SetEpisodesAction
	| SetLoadingAction
	| SetErrorAction
