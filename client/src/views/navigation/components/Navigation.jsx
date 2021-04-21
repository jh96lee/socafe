import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";

import { AiOutlineCompass } from "react-icons/ai";
import { VscGraph, VscBell } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";

const NavigationStyle = styled.div`
	position: sticky;
	top: 0rem;
	display: flex;
	flex-direction: column;
	grid-column: 1 / 2;
	grid-row: 1 / 3;
	height: 100vh;
	background-color: var(--secondary-background-color);
	border-right: 1px solid var(--primary-border-color);

	& #navigation-links-wrapper:not(:last-child) {
		border-bottom: 1px solid var(--primary-border-color);
	}
`;

const NavigationLinksWrapperStyle = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 22rem;
	margin: 0 auto;

	& a {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		text-decoration: none;
		color: var(--txt-1);
		font-size: 1.37rem;
		letter-spacing: -0.6px;
		gap: 0.8rem;
		padding: 1rem;
		margin-bottom: 0.2rem;
	}

	& a svg {
		color: var(--primary-icon-color);
		fill: var(--primary-icon-color);
		width: 2.52rem;
		height: 2.52rem;
	}

	& .active {
		color: var(--primary-active-color);
		border-radius: 0.5rem;
		background-color: var(--primary-active-background-color);
	}

	& .active svg {
		color: var(--primary-active-color);
		fill: var(--primary-active-color);
		border-radius: 0.5rem;
	}
`;

const Navigation = () => {
	return (
		<NavigationStyle>
			<Logo />

			<NavigationLinksWrapperStyle id="navigation-links-wrapper">
				<NavLink exact to="/">
					<RiHomeLine />
					Home
				</NavLink>

				<NavLink exact to="/likes/:userId">
					<IoMdHeartEmpty />
					Likes
				</NavLink>

				<NavLink exact to="/notification">
					<VscBell />
					Notifications
				</NavLink>

				<NavLink exact to="/stat/:userId">
					<VscGraph />
					Stats
				</NavLink>
			</NavigationLinksWrapperStyle>

			<NavigationLinksWrapperStyle id="navigation-links-wrapper">
				<NavLink exact to="/explore">
					<AiOutlineCompass />
					Explore
				</NavLink>

				<NavLink exact to="/marketplace">
					<IoBagOutline />
					Marketplace
				</NavLink>
			</NavigationLinksWrapperStyle>

			<NavigationLinksWrapperStyle id="navigation-links-wrapper">
				<NavLink exact to="/feedback">
					<IoPaperPlaneOutline />
					Feedback
				</NavLink>
			</NavigationLinksWrapperStyle>
		</NavigationStyle>
	);
};

export default Navigation;
