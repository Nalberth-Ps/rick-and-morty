import React from "react"
import { App } from "./App"
import { createBrowserRouter } from "react-router-dom"

// Lazy import
const Characters = React.lazy(() => import("@pages/Characters"))

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
		],
	},
])
