import * as path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{ find: "@graphql", replacement: path.resolve(__dirname, "src/graphql") },
			{ find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
			{ find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
			{ find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
			{ find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
			{ find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
			{ find: "@context", replacement: path.resolve(__dirname, "src/context") },
			{ find: "@typings", replacement: path.resolve(__dirname, "src/typings") },
		],
	},
	build: {
		modulePreload: false,
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				manualChunks(id) {
					if (id.includes("/node_modules/")) return "dependencies"

					if (id.includes("/src/context/")) {
						const name = id
							.split("/src/context/")[1]
							.split(".")[0]
							.toLowerCase()
						return `${name}.context`
					}

					if (id.includes("/src/hooks/")) {
						const name = id.split("/src/hooks/")[1].split(".")[0].toLowerCase()
						return `${name}.hook`
					}

					if (id.includes("/src/pages/")) {
						const name = id.split("/src/pages/")[1].split("/")[0].toLowerCase()
						return `${name}.page`
					}

					if (id.includes("/src/components/")) {
						const name = id
							.split("/src/components/")[1]
							.split("/")[0]
							.toLowerCase()
						return `${name}.component`
					}

					return null
				},
			},
		},
	},
})
