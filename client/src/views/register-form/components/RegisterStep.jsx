import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IconElement } from "../../shared";

const RegisterStepStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0 1rem;
	color: var(--primary-text-color);

	& > :first-child {
		padding: 1.3rem;
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#00a0ffc2" : "#00a0ff"};
		width: fit-content;
		border-radius: 2rem;
	}

	& > :first-child svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: #fff;
	}

	& :nth-child(2) {
		display: flex;
		flex-direction: column;
	}

	& :nth-child(2) span {
		font-size: 1.4rem;
		letter-spacing: -0.6px;
	}
`;

const RegisterStep = ({ stepCTA, stepIcon }) => {
	const { currentFormStepIndex } = useSelector(
		(state) => state.registerReducer
	);

	return (
		<RegisterStepStyle>
			<div>{stepIcon}</div>

			<div>
				<span>Step {currentFormStepIndex + 1}/3</span>
				<h3>{stepCTA}</h3>
			</div>
		</RegisterStepStyle>
	);
};

export default RegisterStep;
