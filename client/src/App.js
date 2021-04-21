import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { RegisterPage } from "./pages";
import { Header, Logo, Navigation } from "./views/navigation";

import GlobalStyle from "./styles/GlobalStyle";

const GlobalPageStyle = styled.main`
	display: grid;
	grid-template-columns: 24.5rem auto;
	grid-template-rows: 7rem auto;
`;

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);

	const themeStyleObjectCreator = (isDarkMode) => ({ isDarkMode });

	return (
		<ThemeProvider theme={themeStyleObjectCreator(isDarkMode)}>
			<GlobalStyle />

			<BrowserRouter>
				<GlobalPageStyle>
					<Header />

					<Navigation />

					<Switch>
						<Route exact path="/user/register">
							<RegisterPage />
						</Route>

						<Route exact path="/user/login"></Route>
					</Switch>
				</GlobalPageStyle>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
