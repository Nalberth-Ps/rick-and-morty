import type React from "react"

import SearchIcon from "@assets/icons/search.svg"

import { useFilters } from "@context/filters"

import styles from "./by-name.module.css"

type Props = {
	placeholder?: string
}

const ByName: React.FC<Props> = ({ placeholder = "Filtrar por nome..." }) => {
	const { updateFilters } = useFilters()

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value: personName } = event.target

		updateFilters(personName, "name")
	}

	return (
		<div className={styles.filterByName}>
			<button type="submit" aria-label="Ícone de busca">
				<img src={SearchIcon} alt="Este é um ícone de busca" />
			</button>
			<input
				type="text"
				placeholder={placeholder}
				onChange={handleChangeName}
				onSubmit={handleChangeName}
			/>
		</div>
	)
}

export default ByName
