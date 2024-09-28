import type { Species } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const BySpecie: React.FC = () => {
	const specieTypes: Species[] = ["Alien", "Human", "Humanoid", "unknown"]

	return (
		<Filter
			filterType={FilterType.species}
			items={specieTypes}
			key={FilterType.species}
		/>
	)
}

export default BySpecie
