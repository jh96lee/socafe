import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderAvatar from "./HeaderAvatar";
import { Searchbar } from "../../searchbar";
import { Toggle, IconElement, Logo } from "../../shared";

import {
	setIsDarkMode,
	setIsResponsiveNavigationOpen,
} from "../../../redux/user-interface/userInterfaceAction";

import { HeaderStyle } from "../styles/HeaderStyle";
import { HeaderStartStyle } from "../styles/HeaderStartStyle";
import { HeaderEndStyle } from "../styles/HeaderEndStyle";

import { Sun, Moon, Hamburger } from "../../../assets";

const Header = ({}) => {
	const dispatch = useDispatch();

	const { isDarkMode } = useSelector((state) => state.userInterfaceReducer);

	const handleHeaderHamburgerIconOnClick = () => {
		dispatch(setIsResponsiveNavigationOpen());
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
