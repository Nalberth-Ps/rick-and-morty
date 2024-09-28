import type React from "react"
import ArrowRight from "@assets/icons/arrow-right.svg"
import styles from "./navigate-wrapper.module.css"
import { Link } from "react-router-dom"

type NavigateWrapperProps = {
	children: React.ReactNode
	path?: string | boolean
	haveAnchor?: boolean
}

export const NavigateWrapper: React.FC<NavigateWrapperProps> = ({
	children,
	path,
	haveAnchor = false,
}) => {
	if (!haveAnchor || !path || typeof path === "boolean") return <>{children}</>

	return (
		<Link to={path} className={styles.navigateWrapper}>
			{children}
			<img src={ArrowRight} alt="Arrow icon" />
		</Link>
	)
}
