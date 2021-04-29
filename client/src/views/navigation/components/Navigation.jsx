import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { IconElement } from "../../shared";

import { ReactComponent as Home } from "../../../assets/home.svg";
import { ReactComponent as Heart } from "../../../assets/heart.svg";
import { ReactComponent as Compass } from "../../../assets/compass.svg";
import { ReactComponent as Cart } from "../../../assets/cart.svg";
import { ReactComponent as Marketplace } from "../../../assets/marketplace.svg";
import { ReactComponent as Notificaiton } from "../../../assets/notification.svg";
import { ReactComponent as Stats } from "../../../assets/stats.svg";
import { ReactComponent as Feedback } from "../../../assets/feedback.svg";

const NavigationStyle = styled.nav`
	position: sticky;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 79.69px);
	box-shadow: 1px 4px 3px 0px var(--primary-box-shadow-color);

	& a {
		margin: 1.3rem 0;
	}

	& .active svg {
		fill: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
	}
`;

const Navigation = () => {
	return (
		<NavigationStyle>
			<NavLink exact to="/">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Home />
				</IconElement>
			</NavLink>

			<NavLink exact to="/likes/:userId">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Heart />
				</IconElement>
			</NavLink>

			<NavLink exact to="/notification">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Notificaiton />
				</IconElement>
			</NavLink>

			<NavLink exact to="/stat/:userId">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Stats />
				</IconElement>
			</NavLink>

			<NavLink exact to="/cart/:userId">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Cart />
				</IconElement>
			</NavLink>

			<NavLink exact to="/explore">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Compass />
				</IconElement>
			</NavLink>

			<NavLink exact to="/marketplace">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Marketplace />
				</IconElement>
			</NavLink>

			<NavLink exact to="/feedback">
				<IconElement iconSize="2.3rem" iconRole="presentation">
					<Feedback />
				</IconElement>
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
