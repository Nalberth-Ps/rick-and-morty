import { useNavigate } from "react-router-dom"
import { CharacterContextProvider, useCharacter } from "@context/character"
import { Avatar } from "./components/Avatar"

import styles from "./character.module.css"
import classNames from "classnames"
import { Information } from "./components/Information"
import { Episodes } from "./components/Episodes"
import { Skeleton } from "./components/Skeleton"

const Character = () => {
	const { character, error, loading } = useCharacter()
	const navigate = useNavigate()

	if (loading) return <Skeleton />

	if (!character || error) {
		navigate("/404")
		return null
	}

	return (
		<div className={classNames(styles.main)}>
			<Avatar />

			<section className={styles.details}>
				<Information />

				<Episodes />
			</section>
		</div>
	)
}

const CharacterWrapper = () => {
	return (
		<CharacterContextProvider>
			<Character />
		</CharacterContextProvider>
	)
}

export default CharacterWrapper
