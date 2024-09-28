import { CharacterContextProvider, useCharacter } from "@context/character"
import { Avatar } from "./components/Avatar"

import styles from "./character.module.css"
import classNames from "classnames"
import { Information } from "./components/Information"
import { Episodes } from "./components/Episodes"
import { Skeleton } from "./components/Skeleton"

const Character = () => {
	const { loading } = useCharacter()

	if (loading) return <Skeleton />

	return (
		<main className={classNames(styles.main)}>
			<Avatar />

			<section className={styles.details}>
				<Information />

				<Episodes />
			</section>
		</main>
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
