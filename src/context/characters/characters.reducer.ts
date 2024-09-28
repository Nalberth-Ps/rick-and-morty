import {
	type CharactersState,
	type CharactersAction,
	CHARACTERS_ACTION_TYPE,
} from "./characters.interface"

export const reducer = (
	state: CharactersState,
	action: CharactersAction,
): CharactersState => {
	switch (action.type) {
		case CHARACTERS_ACTION_TYPE.SET_CHARACTERS:
			return { ...state, characters: action.payload }
		case CHARACTERS_ACTION_TYPE.SET_LOADING:
			return { ...state, loading: action.payload }
		case CHARACTERS_ACTION_TYPE.SET_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
