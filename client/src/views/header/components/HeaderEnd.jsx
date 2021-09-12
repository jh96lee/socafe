import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HeaderAddContent from "./HeaderAddContent";
import HeaderAvatar from "./HeaderAvatar";
import { Toggle } from "../../shared";

import { setIsDarkMode } from "../../../redux/user-interface/userInterfaceAction";

import { HeaderEndStyle } from "../styles/HeaderEndStyle";

import { Sun, Moon } from "../../../assets";

const HeaderEnd = () => {
	const dispatch = useDispatch();

	const { isDarkMode } = useSelector((state) => state.userInterfaceReducer);

	const handleToggleOnClick = () => {
		dispatch(setIsDarkMode());
	};

	return (
		<HeaderEndStyle>
			<HeaderAddContent />

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
	);
};

export default HeaderEnd;
