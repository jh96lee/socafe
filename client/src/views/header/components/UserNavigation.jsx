import * as React from "react";
import styled from "styled-components";

import { RiMoonFill } from "react-icons/ri";
import { MdWbSunny } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

const DarkAndLightModeSVGStyle = styled.div`
	background-color: ${(props) =>
		props.theme.isDarkMode ? "var(--purple-1)" : "var(--blue-1)"};
	padding: 0.85rem;
	width: fit-content;
	border-radius: 50%;
	cursor: pointer;

	& svg {
		display: block;
		fill: var(--yellow-1);
		width: 2rem;
		height: 2rem;
	}
`;

const UserNavigationStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& svg:not(:last-child) {
		width: 2.3rem;
		height: 2.3rem;
		color: var(--txt-1);
		fill: var(--txt-1);
		margin-right: 1rem;
	}
`;

const UserNavigation = ({ isDarkMode, setIsDarkMode }) => {
	const handleThemeOnClick = (e) => setIsDarkMode((prevState) => !prevState);

	return (
		<UserNavigationStyle>
			<BsPeopleCircle />

			<IoPaperPlaneOutline />

			<DarkAndLightModeSVGStyle onClick={handleThemeOnClick}>
				{isDarkMode ? <RiMoonFill /> : <MdWbSunny />}
			</DarkAndLightModeSVGStyle>
		</UserNavigationStyle>
	);
};

export default UserNavigation;
