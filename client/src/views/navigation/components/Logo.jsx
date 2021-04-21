import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SocafeDark } from "../../../assets/socafe-dark.svg";
import { ReactComponent as SocafeLight } from "../../../assets/socafe-light.svg";

const LogoStyle = styled.div`
	padding-left: 2rem;

	& svg {
		display: block;
		width: 8.5rem;
		height: 6.5rem;
		cursor: pointer;
	}
`;

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
