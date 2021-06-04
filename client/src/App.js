import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { Header, Navigation } from "./views/navigation";
import {
	RegisterPage,
	LoginPage,
	CategoryOfInterestPage,
	HomePage,
	AddPostPage,
} from "./pages";
import { Post } from "./views/post";
import { AddPostIcon } from "./views/shared";

import GlobalStyle from "./styles/GlobalStyle";

const GlobalPageStyle = styled.main`
	display: grid;
	grid-template-columns: 7.8rem auto;
	grid-template-rows: 7.8rem auto;
`;

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(true);
	const [isResponsiveNavigationOpen, setIsResponsiveNavigationOpen] =
		React.useState(false);

	const themeStyleObjectCreator = (isDarkMode) => ({ isDarkMode });

	const { user } = useSelector((state) => state.userReducer);

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

					{user && <AddPostIcon />}

					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>

						<Route exact path="/add-post">
							{user ? <AddPostPage /> : <Redirect to="/login" />}
						</Route>

						<Route exact path="/register">
							{user ? <Redirect to="/" /> : <RegisterPage />}
						</Route>

						<Route exact path="/login">
							{user ? <Redirect to="/" /> : <LoginPage />}
						</Route>

						<Route exact path="/category-of-interest">
							<CategoryOfInterestPage />
						</Route>
					</Switch>
				</GlobalPageStyle>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
