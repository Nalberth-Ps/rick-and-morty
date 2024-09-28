import { useCharacter } from "@context/character/character.context"

import styles from "./information.module.css"
import { Item } from "../Item"

export const Information: React.FC = () => {
	const { character } = useCharacter()

	if (!character) return null

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Informations</h2>
			<ul className={styles.informationList}>
				<li className={styles.informationItem}>
					<Item title="Gênero" value={character.gender} />
				</li>
				<li className={styles.informationItem}>
					<Item title="Status" value={character.status} />
				</li>
				<li className={styles.informationItem}>
					<Item title="Espécie" value={character.species} />
				</li>
				<li className={styles.informationItem}>
					<Item title="Origem" value={character.origin.name} />
				</li>
				<li className={styles.informationItem}>
					<Item
						title="Localização"
						value={character.location.name}
						path={character.location.id}
					/>
				</li>
			</ul>
		</div>
	)
}
