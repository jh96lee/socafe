import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderAvatar from "./HeaderAvatar";
import HeaderStart from "./HeaderStart";
import { Searchbar } from "../../searchbar";
import { Toggle } from "../../shared";

import { setIsDarkMode } from "../../../redux/user-interface/userInterfaceAction";

import { HeaderStyle } from "../styles/HeaderStyle";
import { HeaderEndStyle } from "../styles/HeaderEndStyle";

import { Sun, Moon } from "../../../assets";

const Header = ({}) => {
	const dispatch = useDispatch();

	const { isDarkMode } = useSelector((state) => state.userInterfaceReducer);

	const handleToggleOnClick = () => {
		dispatch(setIsDarkMode());
	};

	return (
		<HeaderStyle>
			<HeaderStart />

			<Searchbar />

			<HeaderEndStyle>
				<HeaderAvatar />

				<Toggle
					state={isDarkMode}
					width="5rem"
					height="3rem"
					onClick={handleToggleOnClick}
					type="theme"
					icons={{ on: <Moon />, off: <Sun /> }}
				/>
			</HeaderEndStyle>
		</HeaderStyle>
	);
};

export default Header;
