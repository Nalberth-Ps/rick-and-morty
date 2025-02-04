import type { Gender } from "@typings/rick-and-morty-api"
import { Filter } from "../filter.component"
import { FilterType } from "@context/filters/filters.interface"

const ByGender: React.FC = () => {
	const genderTypes: Array<{
		label: string
		value: Gender
	}> = [
		{
			label: "Feminino",
			value: "Female",
		},
		{
			label: "Sem gênero",
			value: "Genderless",
		},
		{
			label: "Masculino",
			value: "Male",
		},
		{
			label: "Desconhecido",
			value: "unknown",
		},
	]

	return (
		<Filter
			label="Filtrar por gênero"
			filterType={FilterType.gender}
			items={genderTypes}
			key={FilterType.gender}
		/>
	)
}

export default ByGender
