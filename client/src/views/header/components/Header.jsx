import * as React from "react";

import Searchbar from "./Searchbar";
import Logo from "./Logo";
import Avatar from "./Avatar";
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
				<IconElement
					iconSize="2.3rem"
					iconUsage="button"
					iconBreakingPoint="600px"
					iconResponsiveSize="2rem"
					onClickEventHandler={handleOnClick}
				>
					<Hamburger />
				</IconElement>

				<Logo isDarkMode={isDarkMode} />
			</HeaderStart>

			<Searchbar />

			<HeaderEnd>
				<Avatar />

				<Toggle
					toggleWidth="5rem"
					toggleHeight="3.2rem"
					toggleType="theme"
					switchIcon={isDarkMode ? <Moon /> : <Sun />}
					isToggleTrue={isDarkMode}
					setIsToggleTrue={setIsDarkMode}
				/>
			</HeaderEnd>
		</HeaderStyle>
	);
};

export default Header;
