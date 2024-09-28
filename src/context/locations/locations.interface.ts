import type { ApolloError } from "@apollo/client"
import type { Location } from "@typings/rick-and-morty-api"

export interface LocationsState {
	locations: Location[] | null
	loading: boolean
	error: ApolloError | null
}

export enum LOCATIONS_ACTION_TYPE {
	SET_LOCATIONS = "SET_LOCATIONS",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

interface SetLocationsAction {
	type: LOCATIONS_ACTION_TYPE.SET_LOCATIONS
	payload: Location[]
}

interface SetLoadingAction {
	type: LOCATIONS_ACTION_TYPE.SET_LOADING
	payload: boolean
}

interface SetErrorAction {
	type: LOCATIONS_ACTION_TYPE.SET_ERROR
	payload: ApolloError
}

export type LocationsAction =
	| SetLocationsAction
	| SetLoadingAction
	| SetErrorAction
