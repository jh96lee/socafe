import * as React from "react";
import { useSelector } from "react-redux";

import { RegisterStepStyle } from "../styles/RegisterStepStyle";

const RegisterStep = ({ stepCTA }) => {
	const { currentFormStepIndex } = useSelector(
		(state) => state.registerReducer
	);

	return (
		<RegisterStepStyle>
			<span>Step {currentFormStepIndex + 1}/3</span>
			<h2>{stepCTA}</h2>
		</RegisterStepStyle>
	);
};

export default RegisterStep;
