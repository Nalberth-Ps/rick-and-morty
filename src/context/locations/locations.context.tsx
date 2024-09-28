import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useFilters } from "@context/filters"
import { GET_LOCATIONS } from "@graphql/queries/get-locations"
import { reducer } from "./locations.reducer"
import {
	type LocationsState,
	type LocationsAction,
	LOCATIONS_ACTION_TYPE,
} from "./locations.interface"
import type {
	Info,
	Location,
	LocationFilter,
} from "@typings/rick-and-morty-api"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import { usePagination } from "@context/pagination"

const initialState: LocationsState = {
	locations: null,
	loading: false,
	error: null,
}

const LocationsStateContext = createContext<LocationsState>(initialState)

const LocationsDispatchContext =
	createContext<React.Dispatch<LocationsAction> | null>(null)

export const LocationsContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { filters } = useFilters()
	const { currentPage, dispatch: paginationDispatch } = usePagination()

	const { data, error, loading } = useQuery<
		{ locations: Info<Location[]> },
		{ page: number; filter: LocationFilter }
	>(GET_LOCATIONS, {
		variables: {
			page: currentPage,
			filter: filters ?? {},
		},
		fetchPolicy: "cache-first",
		errorPolicy: "ignore",
	})

	useEffect(() => {
		dispatch({ type: LOCATIONS_ACTION_TYPE.SET_LOADING, payload: loading })

		if (error)
			dispatch({ type: LOCATIONS_ACTION_TYPE.SET_ERROR, payload: error })

		if (data?.locations?.results) {
			dispatch({
				type: LOCATIONS_ACTION_TYPE.SET_LOCATIONS,
				payload: data.locations.results,
			})
			paginationDispatch?.({
				type: PAGINATION_ACTION_TYPE.SET_TOTAL_PAGES,
				payload: data.locations.info?.pages || 0,
			})
		}
	}, [data, error, loading, paginationDispatch])

	return (
		<LocationsStateContext.Provider value={state}>
			<LocationsDispatchContext.Provider value={dispatch}>
				{children}
			</LocationsDispatchContext.Provider>
		</LocationsStateContext.Provider>
	)
}

export const useLocations = () => {
	const state = useContext(LocationsStateContext)
	const dispatch = useContext(LocationsDispatchContext)

	if (state === undefined || dispatch === undefined)
		throw new Error("useLocations must be used within a LocationsProvider")

	return { ...state, dispatch }
}
