import * as React from "react";

import Logo from "./Logo";
import Avatar from "./Avatar";
import { Searchbar } from "../../searchbar";
import { Toggle, IconElement } from "../../shared";

import { HeaderStyle, HeaderStart, HeaderEnd } from "../styles/HeaderStyle";

import { Sun, Moon, Hamburger } from "../../../assets";

const Header = ({
	isDarkMode,
	setIsDarkMode,
	setIsResponsiveNavigationOpen,
}) => {
	const handleOnClick = () => {
		setIsResponsiveNavigationOpen((prevState) => !prevState);
	};

	return (
		<HeaderStyle>
			<HeaderStart>
				<IconElement iconRole="button" onClick={handleOnClick}>
					<Hamburger />
				</IconElement>

				<Logo isDarkMode={isDarkMode} />
			</HeaderStart>

			<Searchbar />

			<HeaderEnd>
				<Avatar />

				<Toggle
					state={isDarkMode}
					width="5rem"
					responsiveWidth="4rem"
					height="3rem"
					responsiveHeight="2.5rem"
					onClick={() => {
						setIsDarkMode((prevState) => !prevState);
					}}
					type="theme"
					icons={{ on: <Moon />, off: <Sun /> }}
				/>
			</HeaderEnd>
		</HeaderStyle>
	);
};

export default Header;
