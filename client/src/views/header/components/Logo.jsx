import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SocafeLogo } from "../../../assets/socafe.svg";

const LogoStyle = styled.div`
	margin: 3rem 0 5rem 0;

	& svg {
		display: block;
		width: 4rem;
		height: 4rem;
		cursor: pointer;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}
`;

const Logo = () => {
	const history = useHistory();

	const handleLogoOnClick = () => {
		history.push("/");
	};

	return (
		<LogoStyle onClick={handleLogoOnClick}>
			<SocafeLogo />
		</LogoStyle>
	);
};

export default Logo;
