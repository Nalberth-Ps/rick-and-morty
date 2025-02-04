export enum FilterType {
	status = "status",
	species = "species",
	gender = "gender",
	name = "name",
	dimension = "dimension",
	type = "type",
}

export type FilterTypes = Lowercase<keyof typeof FilterType>

export type FiltersContextProps = {
	updateFilters: (selectedFilter: string, filterType: FilterTypes) => void
}

export type FilterProps = {
	filterType: FilterTypes
	label: string
	items: {
		label: string
		value: string
	}[]
}

export type SelectItemProps = {
	value: string
	children: React.ReactNode
}

export enum FiltersActionType {
	UPDATE_FILTER = "UPDATE_FILTER",
	RESET_FILTERS = "RESET_FILTERS",
}

interface UpdateFilterAction {
	type: FiltersActionType.UPDATE_FILTER
	payload: {
		selectedFilter: string
		filterTypeName: FilterTypes
	}
}

interface ResetFiltersAction {
	type: FiltersActionType.RESET_FILTERS
}

export type FiltersAction = UpdateFilterAction | ResetFiltersAction
