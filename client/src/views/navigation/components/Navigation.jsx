import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Icon } from "../../shared";
import NavigationProfile from "./NavigationProfile";
import NavigationLink from "./NavigationLink";

import { setIsResponsiveNavigationOpen } from "../../../redux/user-interface/userInterfaceAction";

import { NavigationStyle } from "../styles/NavigationStyle";

import {
	HomeColored,
	ExploreColored,
	NotificationColored,
	StatsColored,
	StoryColored,
	FeedbackColored,
	Remove,
} from "../../../assets";

const Navigation = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const { isResponsiveNavigationOpen } = useSelector(
		(state) => state.userInterfaceReducer
	);

	const navigationLocation = useLocation();

	const isNavigationAtHome = navigationLocation.pathname === "/";

	const handleRemoveIconOnClick = () => {
		dispatch(setIsResponsiveNavigationOpen(false));
	};

	const iconSize = "3.3rem";

	return (
		<NavigationStyle
			isNavigationAtHome={isNavigationAtHome}
			isResponsiveNavigationOpen={isResponsiveNavigationOpen}
		>
			<Icon
				iconRole="button"
				iconOnClick={handleRemoveIconOnClick}
				iconStyleObject={{
					iconPosition: "absolute",
					iconTop: "1rem",
					iconRight: "1rem",
				}}
			>
				<Remove />
			</Icon>

			{user && <NavigationProfile />}

			<NavigationLink
				iconSize={iconSize}
				url="/"
				label="Home"
				icon={<HomeColored />}
			/>

			{user && (
				<NavigationLink
					iconSize={iconSize}
					url="/explore"
					label="Explore"
					icon={<ExploreColored />}
				/>
			)}

			{user && (
				<NavigationLink
					iconSize={iconSize}
					url="/notifications"
					label="Notifications"
					icon={<NotificationColored />}
				/>
			)}

			{user && (
				<NavigationLink
					iconSize={iconSize}
					url="/stats"
					label="Stats"
					icon={<StatsColored />}
				/>
			)}

			{user && (
				<NavigationLink
					iconSize={iconSize}
					url="/stories"
					label="Stories"
					icon={<StoryColored />}
				/>
			)}

			<NavigationLink
				iconSize={iconSize}
				url="/feedback"
				label="Feedback"
				icon={<FeedbackColored />}
			/>
		</NavigationStyle>
	);
};

export default Navigation;
