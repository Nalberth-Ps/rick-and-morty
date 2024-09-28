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
