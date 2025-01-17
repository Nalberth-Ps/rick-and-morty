import { Link } from "react-router-dom"
import logoImg from "@assets/images/logo.webp"

export const Logo = () => {
	return (
		<div className="logo">
			<Link to="/">
				<img src={logoImg} height={49} width={46} alt="logo" />
			</Link>
		</div>
	)
}
