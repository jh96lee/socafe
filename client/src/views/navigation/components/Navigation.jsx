import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";

import { NavigationStyle } from "../styles/NavigationStyle";

import {
	HomeColored,
	ExploreColored,
	NotificationColored,
	StatsColored,
	StoryColored,
	FeedbackColored,
} from "../../../assets";

import styled from "styled-components";

const NavigationProfileStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;

	& > img {
		width: 3.4rem;
		height: 3.4rem;
		object-fit: cover;
		border: 1px solid var(--border-1);
		border-radius: 50%;
	}

	& > a {
		color: var(--char-default);
		font-size: 1.45rem;
		font-weight: 500;
	}

	&:hover > a {
		text-decoration: underline;
	}
`;

const Navigation = () => {
	const { user } = useSelector((state) => state.userReducer);

	const { isResponsiveNavigationOpen } = useSelector(
		(state) => state.userInterfaceReducer
	);

	const navigationLocation = useLocation();

	const isNavigationAtHome = navigationLocation.pathname === "/";

	return (
		<NavigationStyle
			isNavigationAtHome={isNavigationAtHome}
			isResponsiveNavigationOpen={isResponsiveNavigationOpen}
		>
			<NavigationProfileStyle>
				<img src={user.avatar_url} alt="profile" />

				<Link to={`/user/${user.username}`}>{user.full_name}</Link>
			</NavigationProfileStyle>

			<NavLink exact to="/">
				<HomeColored />

				<p>Home</p>
			</NavLink>

			<NavLink exact to="/explore">
				<ExploreColored />

				<p>Explore</p>
			</NavLink>

			{user && (
				<NavLink exact to="/notifications">
					<NotificationColored />

					<p>Notifications</p>
				</NavLink>
			)}

			{user && (
				<NavLink exact to="/stats">
					<StatsColored />

					<p>Stats</p>
				</NavLink>
			)}

			<NavLink exact to="/stories">
				<StoryColored />

				<p>Stories</p>
			</NavLink>

			<NavLink exact to="/feedback">
				<FeedbackColored />

				<p>Feedback</p>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
