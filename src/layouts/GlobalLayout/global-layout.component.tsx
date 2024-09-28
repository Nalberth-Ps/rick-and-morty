import { Outlet } from "react-router-dom"

import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Suspense } from "react"
import { ProgressBar } from "@components/ProgressBar"

export const GlobalLayout = () => {
	return (
		<>
			<Header />

			<Suspense fallback={<ProgressBar />}>
				<div className="container">
					<Outlet />
				</div>
			</Suspense>

			<Footer />
		</>
	)
}
