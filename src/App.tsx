import { ApolloProvider } from "@apollo/client"

import { client } from "@graphql/client"
import { GlobalLayout } from "@layouts/GlobalLayout/global-layout.component"

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalLayout />
		</ApolloProvider>
	)
}
