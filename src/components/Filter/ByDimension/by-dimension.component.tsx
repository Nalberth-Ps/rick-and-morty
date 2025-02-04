import type React from "react"
import type { LocationDimensions } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByDimension: React.FC = () => {
	const dimensionTypes: Array<{
		label: string
		value: LocationDimensions
	}> = [
		{
			label: "Dimensão Cronenberg",
			value: "Cronenberg Dimension",
		},
		{
			label: "Dimensão 5-126",
			value: "Dimension 5-126",
		},
		{
			label: "Dimensão C-137",
			value: "Dimension C-137",
		},
		{
			label: "Dimensão de Reposição",
			value: "Replacement Dimension",
		},
		{
			label: "Desconhecido",
			value: "unknown",
		},
	]

	return (
		<Filter
			label="Filtrar por dimensão"
			filterType={FilterType.dimension}
			items={dimensionTypes}
			key={FilterType.dimension}
		/>
	)
}

export default ByDimension
