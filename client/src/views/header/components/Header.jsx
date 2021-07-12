import * as React from "react";

import Logo from "./Logo";
import HeaderAvatar from "./HeaderAvatar";
import { Searchbar } from "../../searchbar";
import { Toggle, IconElement } from "../../shared";

import { HeaderStyle } from "../styles/HeaderStyle";
import { HeaderStartStyle } from "../styles/HeaderStartStyle";
import { HeaderEndStyle } from "../styles/HeaderEndStyle";

import { Sun, Moon, Hamburger } from "../../../assets";

const Header = ({
	isDarkMode,
	setIsDarkMode,
	setIsResponsiveNavigationOpen,
}) => {
	const handleHeaderHamburgerIconOnClick = () => {
		setIsResponsiveNavigationOpen((prevState) => !prevState);
	};

	return (
		<HeaderStyle>
			<HeaderStartStyle>
				<IconElement
					iconRole="button"
					iconID="header_hamburger-icon"
					onClick={handleHeaderHamburgerIconOnClick}
					iconElementStyleObject={{
						elementBackgroundColor: "transparent",
						iconSize: "",
					}}
				>
					<Hamburger />
				</IconElement>

				<Logo isDarkMode={isDarkMode} />
			</HeaderStartStyle>

			<Searchbar />

			<HeaderEndStyle>
				<HeaderAvatar />

				<Toggle
					state={isDarkMode}
					width="5rem"
					height="3rem"
					onClick={() => {
						setIsDarkMode((prevState) => !prevState);
					}}
					type="theme"
					icons={{ on: <Moon />, off: <Sun /> }}
				/>
			</HeaderEndStyle>
		</HeaderStyle>
	);
};

export default Header;
