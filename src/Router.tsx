import React from "react"
import { App } from "./App"
import { createBrowserRouter } from "react-router-dom"

const Characters = React.lazy(() => import("@pages/Characters"))
const Character = React.lazy(() => import("@pages/Character"))
const Locations = React.lazy(() => import("@pages/Locations"))

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Characters /> },
			{
				path: "characters",
				element: <Characters />,
			},
			{
				path: "characters/:id",
				element: <Character />,
			},
			{
				path: "locations",
				element: <Locations />,
			},
		],
	},
])
