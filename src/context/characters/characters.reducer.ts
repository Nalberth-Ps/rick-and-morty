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
		default:
			return state
	}
}
