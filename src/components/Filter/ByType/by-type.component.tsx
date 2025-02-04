import type { LocationTypes } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import type React from "react"
import { FilterType } from "@context/filters/filters.interface"
const ByType: React.FC = () => {
	const locationTypes: Array<{
		label: string
		value: LocationTypes
	}> = [
		{
			label: "Coleção",
			value: "Cluster",
		},
		{
			label: "Sonho",
			value: "Dream",
		},
		{
			label: "Microverso",
			value: "Microverse",
		},
		{
			label: "Planeta",
			value: "Planet",
		},
		{
			label: "Resort",
			value: "Resort",
		},
		{
			label: "Estação Espacial",
			value: "Space station",
		},
		{
			label: "TV",
			value: "TV",
		},
		{
			label: "Desconhecido",
			value: "unknown",
		},
		{
			label: "Cidade Fantasia",
			value: "Fantasy Town",
		},
		{
			label: "Planetóide",
			value: "Planetoid",
		},
		{
			label: "Jogo",
			value: "Game",
		}
	]

	return (
		<Filter
			label="Filtrar por tipo"
			filterType={FilterType.type}
			items={locationTypes}
			key={FilterType.type}
		/>
	)
}

export default ByType
