import type React from "react"
import { createContext, useContext, useEffect, useReducer } from "react"
import { paginationReducer } from "./pagination.reducer"
import {
	type PaginationState,
	type PaginationAction,
	PAGINATION_ACTION_TYPE,
} from "./pagination.interface"
import { useSearchParams } from "react-router-dom"

const initialState: PaginationState = {
	currentPage: 1,
	totalPages: 0,
}

const PaginationStateContext = createContext<PaginationState>(initialState)
const PaginationDispatchContext =
	createContext<React.Dispatch<PaginationAction> | null>(null)

export const PaginationContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(paginationReducer, initialState)
	const [searchParams] = useSearchParams()

	// biome-ignore lint/correctness/useExhaustiveDependencies: This effect is used to set the current page from the URL query params when the component mounts.
	useEffect(() => {
		const page = Number(searchParams.get("page")) || 1

		dispatch({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: page,
		})
	}, [])

	return (
		<PaginationStateContext.Provider value={state}>
			<PaginationDispatchContext.Provider value={dispatch}>
				{children}
			</PaginationDispatchContext.Provider>
		</PaginationStateContext.Provider>
	)
}

export const usePagination = () => {
	const state = useContext(PaginationStateContext)
	const dispatch = useContext(PaginationDispatchContext)

	if (state === undefined || dispatch === undefined) {
		throw new Error("usePagination must be used within a PaginationProvider")
	}

	return { ...state, dispatch }
}
