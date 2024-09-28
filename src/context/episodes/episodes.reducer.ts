import type { EpisodesState, EpisodesAction } from "./episodes.interface"
import { EPISODES_ACTION_TYPE } from "./episodes.interface"

export const reducer = (
	state: EpisodesState,
	action: EpisodesAction,
): EpisodesState => {
	switch (action.type) {
		case EPISODES_ACTION_TYPE.SET_EPISODES:
			return { ...state, episodes: action.payload }
		case EPISODES_ACTION_TYPE.SET_LOADING:
			return { ...state, loading: action.payload }
		case EPISODES_ACTION_TYPE.SET_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
