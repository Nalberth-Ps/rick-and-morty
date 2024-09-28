import type React from "react"
import type { LocationDimensions } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByDimension: React.FC = () => {
	const dimensionTypes: LocationDimensions[] = [
		"Cronenberg Dimension",
		"Dimension 5-126",
		"Dimension C-137",
		"Replacement Dimension",
		"unknown",
	]

	return (
		<Filter
			filterType={FilterType.dimension}
			items={dimensionTypes}
			key={FilterType.dimension}
		/>
	)
}

export default ByDimension
