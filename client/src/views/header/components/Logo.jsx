import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SocafeDark } from "../../../assets/socafe-dark.svg";
import { ReactComponent as SocafeLight } from "../../../assets/socafe-light.svg";

import LogoStyle from "../styles/LogoStyle";

const Logo = ({ isDarkMode }) => {
	const history = useHistory();

	const handleLogoOnClick = () => {
		history.push("/");
	};

	return (
		<LogoStyle onClick={handleLogoOnClick}>
			{isDarkMode ? <SocafeDark /> : <SocafeLight />}
		</LogoStyle>
	);
};

export default Logo;
