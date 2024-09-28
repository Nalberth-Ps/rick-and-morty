import type { Gender } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByGender: React.FC = () => {
	const genderTypes: Gender[] = ["Female", "Genderless", "Male", "unknown"]

	return (
		<Filter
			filterType={FilterType.gender}
			items={genderTypes}
			key={FilterType.gender}
		/>
	)
}

export default ByGender
