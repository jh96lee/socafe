import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

import { AiOutlineCompass } from "react-icons/ai";
import { VscHome, VscBell } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const NavigationStyle = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--bg-2);
	grid-column: 1 / 2;
	grid-row: 1 / 3;
	height: 100vh;
	border-right: 1px solid var(--border-1);

	& a {
		width: 100%;
		padding: 2rem 0;
	}

	& a svg {
		display: block;
		color: var(--txt-1);
		fill: var(--txt-1);
		width: 2.4rem;
		height: 2.4rem;
		cursor: pointer;
		margin: auto;
	}

	& svg:hover {
		color: red;
		fill: red;
	}

	& .active svg {
		color: ${(props) =>
			props.theme.isDarkMode ? "var(--cyan-1)" : "var(--red-1)"};
		fill: ${(props) =>
			props.theme.isDarkMode ? "var(--cyan-1)" : "var(--red-1)"};
	}

	& .active {
		background-color: ${(props) =>
			props.theme.isDarkMode
				? "var(--cyan-transparent);"
				: "var(--red-transparent)"};
	}
`;

const Navigation = () => {
	return (
		<NavigationStyle>
			<Logo />

			<NavLink exact to="/">
				<VscHome />
			</NavLink>

			<NavLink exact to="/likes/:userId">
				<IoMdHeartEmpty />
			</NavLink>

			<NavLink exact to="/marketplace">
				<IoBagOutline />
			</NavLink>

			<NavLink exact to="/notification/:userId">
				<VscBell />
			</NavLink>

			<NavLink exact to="/explore">
				<AiOutlineCompass />
			</NavLink>
		</NavigationStyle>
	);
};

export default Navigation;
