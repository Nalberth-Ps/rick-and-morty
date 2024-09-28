import type React from "react"
import { useCharacter } from "@context/character"
import { GoBackButton } from "@components/GoBackButton"

import styles from "./avatar.module.css"

export const Avatar: React.FC = () => {
	const { character } = useCharacter() || {}

	if (!character) return null

	const { name, image } = character

	return (
		<div className={styles.container}>
			<GoBackButton />
			<img className={styles.image} src={image} alt={name} />
			<h1 className={styles.name}>{name}</h1>
		</div>
	)
}
