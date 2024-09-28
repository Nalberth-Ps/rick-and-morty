import type { LocationTypes } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import type React from "react"
import { FilterType } from "@context/filters/filters.interface"
const ByType: React.FC = () => {
	const locationTypes: LocationTypes[] = [
		"Cluster",
		"Dream",
		"Microverse",
		"Planet",
		"Resort",
		"Space station",
		"TV",
		"unknown",
		"Fantasy Town",
		"Planetoid",
		"Game",
	]

	return (
		<Filter
			filterType={FilterType.type}
			items={locationTypes}
			key={FilterType.type}
		/>
	)
}

export default ByType
