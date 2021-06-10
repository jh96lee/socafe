import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { IconElement } from "../../shared";

import { NavigationStyle } from "../styles/NavigationStyle";

import {
	Home,
	Explore,
	Marketplace,
	Notification,
	Feedback,
} from "../../../assets";

const Navigation = ({ isResponsiveNavigationOpen }) => {
	const iconSize = "2.4rem";
	const iconRole = "navigation";

	const { user } = useSelector((state) => state.userReducer);

	return (
		<NavigationStyle isResponsiveNavigationOpen={isResponsiveNavigationOpen}>
			<NavLink exact to="/">
				<IconElement iconRole={iconRole} iconElementStyleObject={{ iconSize }}>
					<Home />
				</IconElement>
				<span>Home</span>
			</NavLink>

			{user && (
				<NavLink exact to="/notification">
					<IconElement
						iconRole={iconRole}
						iconElementStyleObject={{ iconSize }}
					>
						<Notification />
					</IconElement>
					<span>Notification</span>
				</NavLink>
			)}

			<NavLink exact to="/explore">
				<IconElement iconRole={iconRole} iconElementStyleObject={{ iconSize }}>
					<Explore />
				</IconElement>
				<span>Explore</span>
			</NavLink>

			<NavLink exact to="/marketplace">
				<IconElement iconRole={iconRole} iconElementStyleObject={{ iconSize }}>
					<Marketplace />
				</IconElement>
				<span>Marketplace</span>
			</NavLink>

			<NavLink exact to="/feedback">
				<IconElement iconRole={iconRole} iconElementStyleObject={{ iconSize }}>
					<Feedback />
				</IconElement>
				<span>Feedback</span>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
