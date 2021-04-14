import * as React from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";
import UserNavigation from "./UserNavigation";

const HeaderStyle = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	padding: 1.25rem;
	grid-column: 2 / 3;
	grid-row: 1 / 2;
`;

const Header = ({ isDarkMode, setIsDarkMode }) => {
	return (
		<HeaderStyle>
			<div></div>

			<Searchbar />

			<UserNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
		</HeaderStyle>
	);
};

export default Header;
