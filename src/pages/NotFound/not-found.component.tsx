import { Link } from "react-router-dom"
import NOT_FOUND_IMAGE from "@assets/images/not-found-page.svg"

import styles from "./not-found.module.css"

const NotFound = () => {
	return (
		<main className={styles.main}>
			<img src={NOT_FOUND_IMAGE} alt="Not found" />

			<h1 className={styles.title}>Página não encontrada</h1>

			<p className={styles.description}>
				A página que você está procurando pode ter sido removida, alterado o
				nome ou está temporariamente indisponível.
			</p>

			<Link className={styles.anchor} to="/">
				Voltar para a página inicial
			</Link>
		</main>
	)
}

export default NotFound
