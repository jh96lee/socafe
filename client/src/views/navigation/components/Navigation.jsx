import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { IconElement } from "../../shared";

import { NavigationStyle } from "../styles/NavigationStyle";

import {
	Home,
	Heart,
	Explore,
	Cart,
	Marketplace,
	Notification,
	Stats,
	Feedback,
} from "../../../assets";

const Navigation = ({ isResponsiveNavigationOpen }) => {
	const iconSize = "2.15rem";

	const { user } = useSelector((state) => state.userReducer);

	return (
		<NavigationStyle isResponsiveNavigationOpen={isResponsiveNavigationOpen}>
			<NavLink exact to="/">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Home />
				</IconElement>
				<span>Home</span>
			</NavLink>

			{user && (
				<NavLink exact to="/likes/:userId">
					<IconElement iconSize={iconSize} iconUsage="contentinfo">
						<Heart />
					</IconElement>
					<span>Likes</span>
				</NavLink>
			)}

			{user && (
				<NavLink exact to="/notification">
					<IconElement iconSize={iconSize} iconUsage="contentinfo">
						<Notification />
					</IconElement>
					<span>Notification</span>
				</NavLink>
			)}

			{/* TODO: move these to profile */}
			{/* <NavLink exact to="/stat/:userId">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Stats />
				</IconElement>
				<span>Stats</span>
			</NavLink> */}

			{/* <NavLink exact to="/cart/:userId">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Cart />
				</IconElement>
				<span>Cart</span>
			</NavLink> */}

			<NavLink exact to="/explore">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Explore />
				</IconElement>
				<span>Explore</span>
			</NavLink>

			<NavLink exact to="/marketplace">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Marketplace />
				</IconElement>
				<span>Marketplace</span>
			</NavLink>

			<NavLink exact to="/feedback">
				<IconElement iconSize={iconSize} iconUsage="contentinfo">
					<Feedback />
				</IconElement>
				<span>Feedback</span>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
