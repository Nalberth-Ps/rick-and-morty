import {
	type FiltersAction,
	FiltersActionType,
	FilterType,
} from "@context/filters/filters.interface"
import type { CharacterFilter } from "@typings/rick-and-morty-api"

export const filtersReducer = (
	state: CharacterFilter | null,
	action: FiltersAction,
): CharacterFilter | null => {
	switch (action.type) {
		case FiltersActionType.UPDATE_FILTER: {
			const { selectedFilter, filterTypeName } = action.payload
			const filterKey = FilterType[filterTypeName]

			// @ts-ignore
			if (state && state[filterKey] === selectedFilter) {
				// @ts-ignore
				const { [filterKey]: _, ...remainingFilters } = state
				return Object.keys(remainingFilters).length ? remainingFilters : null
			}

			// Atualiza o filtro com o novo valor selecionado
			return {
				...state,
				[filterKey]: selectedFilter,
			}
		}
		case FiltersActionType.RESET_FILTERS:
			return null
		default:
			return state
	}
}
