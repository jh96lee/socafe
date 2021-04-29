import * as React from "react";
import { Link } from "react-router-dom";

import Searchbar from "./Searchbar";
import Logo from "./Logo";
import { Toggle } from "../../shared";
import { DropdownMenu, IconElement } from "../../shared";

import { HeaderStyle, HeaderIconsWrapperStyle } from "../styles/HeaderStyle";
import { DropdownStyle } from "../../../styles";

import { ReactComponent as User } from "../../../assets/user.svg";
import { ReactComponent as Sun } from "../../../assets/sun.svg";
import { ReactComponent as Moon } from "../../../assets/moon.svg";

const Header = ({ isDarkMode, setIsDarkMode }) => {
	return (
		<HeaderStyle>
			<Logo isDarkMode={isDarkMode} />

			<Searchbar />

			<HeaderIconsWrapperStyle>
				<DropdownStyle id="user-dropdown-trigger">
					<IconElement iconRole="presentation" iconSize="2.3rem">
						<User />
					</IconElement>

					<DropdownMenu
						triggerID="user-dropdown-trigger"
						dataArray={[
							<Link to="/user/login">Login</Link>,
							<Link to="/user/register">Register</Link>,
						]}
						customDropdownId="user-dropdown"
						menuPosition="right"
					/>
				</DropdownStyle>

				<Toggle
					toggleWidth="5rem"
					toggleHeight="3.2rem"
					toggleType="theme"
					switchIcon={isDarkMode ? <Moon /> : <Sun />}
					isToggleTrue={isDarkMode}
					setIsToggleTrue={setIsDarkMode}
				/>
			</HeaderIconsWrapperStyle>
		</HeaderStyle>
	);
};

export default Header;
