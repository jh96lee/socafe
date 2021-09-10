import * as React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { Header } from "./views/header";
import { Navigation } from "./views/navigation";
import {
	HomePage,
	AddPostPage,
	AddStoryPage,
	UserProfilePage,
	UserLoginPage,
	UserRegisterPage,
	EditProfilePage,
	StoryPage,
	ExplorePage,
	NotificationsPage,
	UserStoriesPage,
	StatsPage,
} from "./pages";
import { AddPostIcon } from "./views/shared";
import { MainPost } from "./views/main-post";

import GlobalStyle from "./styles/GlobalStyle";

const GlobalPageStyle = styled.main`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 7.8rem 1fr;
`;

function App() {
	const { isDarkMode } = useSelector((state) => state.userInterfaceReducer);

	const themeStyleObjectCreator = (isDarkMode) => ({ isDarkMode });

	const { user } = useSelector((state) => state.userReducer);

	const appLocation = useLocation();
	const overlaidComponentLocation =
		appLocation.state && appLocation.state.overlaidComponentLocation;

	const isAddIncludedInPathname = appLocation.pathname
		.split("/")
		.includes("add");

	return (
		<ThemeProvider theme={themeStyleObjectCreator(isDarkMode)}>
			<GlobalStyle />

			<GlobalPageStyle>
				{!isAddIncludedInPathname && <Header />}

				{!isAddIncludedInPathname && <Navigation />}

				<Switch location={overlaidComponentLocation || appLocation}>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route exact path="/stats">
						<StatsPage />
					</Route>

					<Route exact path="/user/:username">
						<UserProfilePage />
					</Route>

					{/* REVIEW: 2 ways it can be rendered */}
					<Route exact path="/post/:postID">
						<MainPost />
					</Route>

					<Route exact path="/story/:userID/:storyID">
						<StoryPage />
					</Route>

					<Route exact path="/register">
						{user ? <Redirect to="/" /> : <UserRegisterPage />}
					</Route>

					<Route exact path="/login">
						{user ? <Redirect to="/" /> : <UserLoginPage />}
					</Route>

					<Route exact path="/add/post">
						{user ? <AddPostPage /> : <Redirect to="/login" />}
					</Route>

					<Route exact path="/add/story">
						{user ? <AddStoryPage /> : <Redirect to="/login" />}
					</Route>

					<Route path="/edit/profile">
						{user ? <EditProfilePage /> : <Redirect to="/login" />}
					</Route>

					<Route exact path="/explore">
						<ExplorePage />
					</Route>

					<Route exact path="/notifications">
						<NotificationsPage />
					</Route>

					<Route exact path="/stories">
						<UserStoriesPage />
					</Route>
				</Switch>

				{/* REVIEW: outside of Switch Component */}
				{overlaidComponentLocation && (
					<Route exact path="/post/:postID">
						<MainPost />
					</Route>
				)}
			</GlobalPageStyle>
		</ThemeProvider>
	);
}

export default App;
