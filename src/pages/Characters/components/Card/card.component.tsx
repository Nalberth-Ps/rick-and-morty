import type React from "react"
import { Link } from "react-router-dom"
import type { CardProps } from "@typings/characters"
import styles from "./card.module.css"
import classNames from "classnames"

export const Card: React.FC<CardProps> = ({ id, image, name, species }) => {
	return (
		<li className={classNames(styles.characters__item)}>
			<Link to={`${id}`}>
				<article className={styles.article}>
					<div className={styles.imageContainer}>
						<img
							src={image}
							alt={`${name}, um personagem de Rick and Morty, esse personagem é um: ${species}`}
							height={300}
							width={250}
							loading="lazy"
						/>
					</div>
					<div className={styles.characterInfos}>
						<p className={styles.characterName}>{name}</p>
						<p className={styles.characterSpecie}>{species}</p>
					</div>
				</article>
			</Link>
		</li>
	)
}
