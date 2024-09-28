import type { PaginationState, PaginationAction } from "./pagination.interface"
import { PAGINATION_ACTION_TYPE } from "./pagination.interface"

export const paginationReducer = (
	state: PaginationState,
	action: PaginationAction,
): PaginationState => {
	switch (action.type) {
		case PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload }
		case PAGINATION_ACTION_TYPE.SET_TOTAL_PAGES:
			return { ...state, totalPages: action.payload }
		default:
			return state
	}
}
