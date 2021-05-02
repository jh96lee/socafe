import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { Header, Navigation } from "./views/navigation";
import { RegisterPage } from "./pages";

import GlobalStyle from "./styles/GlobalStyle";

const GlobalPageStyle = styled.main`
	display: grid;
	grid-template-columns: 7rem auto;
	grid-template-rows: 7.5rem auto;
`;

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(true);
	const [
		isResponsiveNavigationOpen,
		setIsResponsiveNavigationOpen,
	] = React.useState(false);

	const themeStyleObjectCreator = (isDarkMode) => ({ isDarkMode });

	return (
		<ThemeProvider theme={themeStyleObjectCreator(isDarkMode)}>
			<GlobalStyle />

			<BrowserRouter>
				<GlobalPageStyle>
					<Header
						isDarkMode={isDarkMode}
						setIsDarkMode={setIsDarkMode}
						setIsResponsiveNavigationOpen={setIsResponsiveNavigationOpen}
					/>

					<Navigation isResponsiveNavigationOpen={isResponsiveNavigationOpen} />

					<Switch>
						<Route exact path="/user/register">
							<RegisterPage />
						</Route>
					</Switch>
				</GlobalPageStyle>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
