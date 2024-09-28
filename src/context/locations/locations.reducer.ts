import type { LocationsState, LocationsAction } from "./locations.interface"
import { LOCATIONS_ACTION_TYPE } from "./locations.interface"

export const reducer = (
	state: LocationsState,
	action: LocationsAction,
): LocationsState => {
	switch (action.type) {
		case LOCATIONS_ACTION_TYPE.SET_LOCATIONS:
			return { ...state, locations: action.payload }
		case LOCATIONS_ACTION_TYPE.SET_LOADING:
			return { ...state, loading: action.payload }
		case LOCATIONS_ACTION_TYPE.SET_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
