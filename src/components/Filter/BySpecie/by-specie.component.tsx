import type { Species } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const BySpecie: React.FC = () => {
	const specieTypes: Array<{
		label: string
		value: Species
	}> = [
		{
			label: "Alien",
			value: "Alien",
		},
		{
			label: "Humano",
			value: "Human",
		},
		{
			label: "Humanóide",
			value: "Humanoid",
		},
		{
			label: "Desconhecido",
			value: "unknown",
		},
	]

	return (
		<Filter
			label="Filtrar por espécie"
			filterType={FilterType.species}
			items={specieTypes}
			key={FilterType.species}
		/>
	)
}

export default BySpecie
