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
		case CHARACTERS_ACTION_TYPE.SET_TOTAL_PAGES:
			return { ...state, totalPages: action.payload }
		case CHARACTERS_ACTION_TYPE.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload }
		default:
			return state
	}
}
