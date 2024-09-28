import { createContext, useCallback, useContext, useReducer } from "react"
import {
	type FilterTypes,
	FiltersActionType,
	type FiltersContextProps,
} from "@context/filters/filters.interface"
import { filtersReducer } from "@context/filters/filters.reducer"
import type { CharacterFilter } from "@typings/rick-and-morty-api"

const FiltersStateContext = createContext<CharacterFilter | null>(null)
const FiltersDispatchContext = createContext<FiltersContextProps>({
	updateFilters: () => {},
})

export const FiltersContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [filters, dispatch] = useReducer(filtersReducer, null)

	const updateFilters = useCallback(
		(selectedFilter: string, filterType: FilterTypes) => {
			dispatch({
				type: FiltersActionType.UPDATE_FILTER,
				payload: { selectedFilter, filterTypeName: filterType },
			})
		},
		[],
	)

	return (
		<FiltersStateContext.Provider value={filters}>
			<FiltersDispatchContext.Provider value={{ updateFilters }}>
				{children}
			</FiltersDispatchContext.Provider>
		</FiltersStateContext.Provider>
	)
}

export const useFilters = () => {
	const filters = useContext(FiltersStateContext)
	const { updateFilters } = useContext(FiltersDispatchContext) ?? {}

	if (filters === undefined || updateFilters === undefined)
		throw new Error("useFilters must be used within a FiltersContextProvider")

	return { filters, updateFilters }
}
