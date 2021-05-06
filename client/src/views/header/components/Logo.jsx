import React from "react";
import { useHistory } from "react-router-dom";

import { SocafeDark, SocafeLight } from "../../../assets";

import LogoStyle from "../styles/LogoStyle";

const Logo = ({ isDarkMode }) => {
	const history = useHistory();

	const handleLogoOnClick = () => {
		history.push("/");
	};

	return (
		<LogoStyle onClick={handleLogoOnClick} id="logo">
			{isDarkMode ? <SocafeDark /> : <SocafeLight />}
		</LogoStyle>
	);
};

export default Logo;
