import * as React from "react";

import Searchbar from "./Searchbar";
import Logo from "./Logo";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { HeaderStyle, HeaderIconsWrapperStyle } from "../styles/HeaderStyle";
import { IconElementStyle } from "../../../styles";

import { BiSun, BiMoon, BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ isDarkMode, setIsDarkMode }) => {
	const [
		isResponsiveSearchbarOpen,
		setIsResponsiveSearchbarOpen,
	] = React.useState(false);

	const handleThemeOnClick = () => {
		setIsDarkMode((prevState) => !prevState);
	};

	useShowAndHideElementOnClick(
		"search-icon-element",
		"search-bar-div",
		setIsResponsiveSearchbarOpen,
		false
	);

	return (
		<HeaderStyle>
			<GiHamburgerMenu />

			<Logo isDarkMode={isDarkMode} />

			<div id="search-bar-div">
				<Searchbar isResponsiveSearchbarOpen={isResponsiveSearchbarOpen} />
			</div>
			{/* <Searchbar
				id="search-bar-div"
				isResponsiveSearchbarOpen={isResponsiveSearchbarOpen}
			/> */}

			<HeaderIconsWrapperStyle>
				<IconElementStyle id="search-icon-element">
					<BiSearch />
				</IconElementStyle>

				<BsPerson />

				{isDarkMode ? (
					<BiMoon onClick={handleThemeOnClick} />
				) : (
					<BiSun onClick={handleThemeOnClick} />
				)}
			</HeaderIconsWrapperStyle>
		</HeaderStyle>
	);
};

export default Header;
