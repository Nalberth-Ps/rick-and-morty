import type { Status } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByStatus: React.FC = () => {
	const statusTypes: Status[] = ["Alive", "Dead", "unknown"]

	return (
		<Filter
			filterType={FilterType.status}
			items={statusTypes}
			key={FilterType.status}
		/>
	)
}

export default ByStatus
