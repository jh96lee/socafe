import React from "react";
import { useHistory } from "react-router-dom";

import { SocafeDark, SocafeLight, SocafeConcise } from "../../../assets";

import LogoStyle from "../styles/LogoStyle";

const Logo = ({ isDarkMode }) => {
	const history = useHistory();

	const handleLogoOnClick = () => {
		history.push("/");
	};

	return (
		<LogoStyle onClick={handleLogoOnClick} id="logo">
			{isDarkMode ? (
				<SocafeDark id="logo__socafe-full" />
			) : (
				<SocafeLight id="logo__socafe-full" />
			)}

			<SocafeConcise id="logo__socafe-concise" />
		</LogoStyle>
	);
};

export default Logo;
