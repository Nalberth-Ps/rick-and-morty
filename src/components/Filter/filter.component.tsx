// Dependencies
import type React from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

// Hooks
import { useFilters } from "@context/filters"
import { usePagination } from "@context/pagination"

// Typings
import type { FilterProps } from "@context/filters/filters.interface"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"

// Styles
import styles from "./filter.module.css"

export const Filter: React.FC<FilterProps> = ({ filterType, items }) => {
	const { updateFilters } = useFilters()
	const { dispatch } = usePagination() ?? {}
	const [_, setSearchParams] = useSearchParams()

	const [selectedFilter, setSelectedFilter] = useState("")

	const resetPagination = () => {
		dispatch?.({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: 1,
		})
		setSearchParams({ page: "1" })
	}

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value
		setSelectedFilter(selectedOption)
		updateFilters(selectedOption, filterType)

		resetPagination()
	}

	return (
		<div className={styles.filterWrapper}>
			<select
				id={`${filterType}-filter`}
				className={styles.selectTrigger}
				value={selectedFilter}
				onChange={handleChange}
				aria-label={filterType}
			>
				<option value="">{filterType}</option>
				{items.map((item) => (
					<option key={item} value={item} className={styles.selectItem}>
						{item}
					</option>
				))}
			</select>
		</div>
	)
}
