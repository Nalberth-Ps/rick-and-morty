import type { Status } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByStatus: React.FC = () => {
	const statusTypes: Array<{
		label: string
		value: Status
	}> = [
		{
			label: "Vivo",
			value: "Alive",
		},
		{
			label: "Morto",
			value: "Dead",
		},
		{
			label: "Desconhecido",
			value: "unknown",
		},
	]

	return (
		<Filter
			label="Filtrar por status"
			filterType={FilterType.status}
			items={statusTypes}
			key={FilterType.status}
		/>
	)
}

export default ByStatus
