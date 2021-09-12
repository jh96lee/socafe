import * as React from "react";

import HeaderStart from "./HeaderStart";
import { ResponsiveSearchbar } from "../../searchbar";
import HeaderEnd from "./HeaderEnd";

import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => {
	return (
		<HeaderStyle>
			<HeaderStart />

			<ResponsiveSearchbar />

			<HeaderEnd />
		</HeaderStyle>
	);
};

export default Header;
