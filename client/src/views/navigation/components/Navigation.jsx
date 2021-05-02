import * as React from "react";
import { NavLink } from "react-router-dom";

import { IconElement } from "../../shared";

import { NavigationStyle } from "../styles/NavigationStyle";

import { ReactComponent as Home } from "../../../assets/home.svg";
import { ReactComponent as Heart } from "../../../assets/heart.svg";
import { ReactComponent as Compass } from "../../../assets/compass.svg";
import { ReactComponent as Cart } from "../../../assets/cart.svg";
import { ReactComponent as Marketplace } from "../../../assets/marketplace.svg";
import { ReactComponent as Notificaiton } from "../../../assets/notification.svg";
import { ReactComponent as Stats } from "../../../assets/stats.svg";
import { ReactComponent as Feedback } from "../../../assets/feedback.svg";

const Navigation = ({ isResponsiveNavigationOpen }) => {
	return (
		<NavigationStyle isResponsiveNavigationOpen={isResponsiveNavigationOpen}>
			<NavLink exact to="/">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Home />
				</IconElement>
				<span>Home</span>
			</NavLink>

			<NavLink exact to="/likes/:userId">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Heart />
				</IconElement>
				<span>Likes</span>
			</NavLink>

			<NavLink exact to="/notification">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Notificaiton />
				</IconElement>
				<span>Notification</span>
			</NavLink>

			<NavLink exact to="/stat/:userId">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Stats />
				</IconElement>
				<span>Stats</span>
			</NavLink>

			<NavLink exact to="/cart/:userId">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Cart />
				</IconElement>
				<span>Cart</span>
			</NavLink>

			<NavLink exact to="/explore">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Compass />
				</IconElement>
				<span>Explore</span>
			</NavLink>

			<NavLink exact to="/marketplace">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Marketplace />
				</IconElement>
				<span>Marketplace</span>
			</NavLink>

			<NavLink exact to="/feedback">
				<IconElement iconSize="2.3rem" iconRole="link">
					<Feedback />
				</IconElement>
				<span>Feedback</span>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
