export interface PaginationState {
	currentPage: number
	totalPages: number
}

export enum PAGINATION_ACTION_TYPE {
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
}

interface SetCurrentPageAction {
	type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE
	payload: number
}

interface SetTotalPagesAction {
	type: PAGINATION_ACTION_TYPE.SET_TOTAL_PAGES
	payload: number
}

export type PaginationAction = SetCurrentPageAction | SetTotalPagesAction
