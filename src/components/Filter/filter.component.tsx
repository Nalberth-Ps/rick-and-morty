// Dependencies
import type React from "react"
import { useSearchParams } from "react-router-dom"
import * as Select from "@radix-ui/react-select"
import { CheckIcon } from "@radix-ui/react-icons"

// Hooks
import { useFilters } from "@context/filters"
import { usePagination } from "@context/pagination"

// Assets
import ArrowDown from "@assets/icons/arrow-down.svg"

// Typings
import type { FilterProps } from "@context/filters/filters.interface"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"

// Styles
import "./filter.modules.css"

export const Filter: React.FC<FilterProps> = ({ filterType, items }) => {
	const { updateFilters } = useFilters()
	const { dispatch } = usePagination() ?? {}
	const [_, setSearchParams] = useSearchParams()

	function resetPagination() {
		dispatch?.({ type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE, payload: 1 })
		setSearchParams({ page: "1" })
	}

	return (
		<div className="filterWrapper">
			<Select.Root
				onValueChange={(selectedFilter) => {
					updateFilters(selectedFilter, filterType)
					resetPagination()
				}}
			>
				<Select.Trigger className="select-trigger" aria-label={filterType}>
					<Select.Value placeholder={filterType} />
					<Select.Icon className="select-icon">
						<img src={ArrowDown} alt="" />
					</Select.Icon>
				</Select.Trigger>

				<Select.Portal>
					<Select.Content className="select-content">
						<Select.ScrollUpButton>
							<img src={ArrowDown} alt="" />
						</Select.ScrollUpButton>

						<Select.Viewport className="select-viewport">
							<Select.Group>
								<Select.Label className="select-label">
									{filterType}
								</Select.Label>
								{items.map((item) => (
									<Select.Item key={item} value={item} className="select-item">
										<Select.ItemText>{item}</Select.ItemText>
										<Select.ItemIndicator className="select-item-indicator">
											<CheckIcon />
										</Select.ItemIndicator>
									</Select.Item>
								))}

								<Select.Item key="all" value="*" className="select-item">
									<Select.ItemText>All</Select.ItemText>
									<Select.ItemIndicator className="select-item-indicator">
										<CheckIcon />
									</Select.ItemIndicator>
								</Select.Item>
							</Select.Group>
						</Select.Viewport>

						<Select.ScrollDownButton>
							<img src={ArrowDown} alt="" />
						</Select.ScrollDownButton>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	)
}
