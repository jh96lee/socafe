import * as React from "react";

import HeaderStart from "./HeaderStart";
import HeaderMiddle from "./HeaderMiddle";
import HeaderEnd from "./HeaderEnd";

import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => {
	return (
		<HeaderStyle>
			<HeaderStart />

			<HeaderMiddle />

			<HeaderEnd />
		</HeaderStyle>
	);
};

export default Header;
