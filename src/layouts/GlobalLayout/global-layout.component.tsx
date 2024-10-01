import { Outlet } from "react-router-dom"
import classNames from "classnames"

import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Suspense } from "react"
import { ProgressBar } from "@components/ProgressBar"

import styles from "./global-layout.module.css"

export const GlobalLayout = () => {
	return (
		<>
			<Header />

			<Suspense fallback={<ProgressBar />}>
				<main className={classNames(styles.main, "container")}>
					<Outlet />
				</main>
			</Suspense>

			<Footer />
		</>
	)
}
