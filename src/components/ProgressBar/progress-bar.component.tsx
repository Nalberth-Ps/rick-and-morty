import { useEffect } from "react"
import NProgress from "nprogress"

export const ProgressBar: React.FC = () => {
	useEffect(() => {
		NProgress.start()
		return () => {
			NProgress.done()
		}
	}, [])

	return null
}
