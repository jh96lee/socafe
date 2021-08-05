import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { IconElement } from "../../shared";

import { NavigationStyle } from "../styles/NavigationStyle";

import {
	HomeFilled,
	HomeOutline,
	ExploreFilled,
	ExploreOutline,
	NotificationFilled,
	NotificationOutline,
	FeedbackFilled,
	FeedbackOutline,
} from "../../../assets";

const Navigation = ({ isResponsiveNavigationOpen }) => {
	const iconRole = "navigation";

	const iconElementStyleObject = {
		elementPadding: "0.85rem",
		iconSize: "2.4rem",
	};

	const { user } = useSelector((state) => state.userReducer);

	return (
		<NavigationStyle isResponsiveNavigationOpen={isResponsiveNavigationOpen}>
			<NavLink exact to="/">
				<IconElement
					iconRole={iconRole}
					iconElementStyleObject={iconElementStyleObject}
				>
					<HomeFilled id="filled" />

					<HomeOutline id="outline" />
				</IconElement>

				<span>Home</span>
			</NavLink>

			{user && (
				<NavLink exact to="/notification">
					<IconElement
						iconRole={iconRole}
						iconElementStyleObject={iconElementStyleObject}
					>
						<NotificationFilled id="filled" />

						<NotificationOutline id="outline" />
					</IconElement>
					<span>Notification</span>
				</NavLink>
			)}

			<NavLink exact to="/explore">
				<IconElement
					iconRole={iconRole}
					iconElementStyleObject={iconElementStyleObject}
				>
					<ExploreFilled id="filled" />

					<ExploreOutline id="outline" />
				</IconElement>
				<span>Explore</span>
			</NavLink>

			<NavLink exact to="/feedback">
				<IconElement
					iconRole={iconRole}
					iconElementStyleObject={iconElementStyleObject}
				>
					<FeedbackFilled id="filled" />

					<FeedbackOutline id="outline" />
				</IconElement>
				<span>Feedback</span>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
