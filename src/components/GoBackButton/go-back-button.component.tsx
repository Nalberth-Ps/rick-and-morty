import { useNavigate } from "react-router-dom"
import ArrowLeftIcon from "@assets/icons/arrow-left.svg"

import styles from "./go-back-button.module.css"

export const GoBackButton = () => {
	const navigate = useNavigate()

	const haveHistoryAvailable =
		window.history.length > 1 && window.history.state !== null

	if (!haveHistoryAvailable) return null

	const returnToPreviousPage = () => {
		navigate(-1)
	}

	return (
		<button
			className={styles.button}
			type="button"
			onClick={returnToPreviousPage}
		>
			<img
				src={ArrowLeftIcon}
				alt="Voltar para a página anterior"
				height={24}
				width={24}
			/>
			<h3 className={styles.label}>Go back</h3>
		</button>
	)
}
