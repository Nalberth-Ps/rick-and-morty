import { Link } from "react-router-dom"
import logoImg from "@assets/images/logo.webp"

export const Logo = () => {
	return (
		<div className="logo">
			<Link to="/">
				<img src={logoImg} alt="logo" />
			</Link>
		</div>
	)
}
