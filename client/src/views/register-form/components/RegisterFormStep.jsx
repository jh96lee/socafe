import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const RegisterStepStyle = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2.5rem;
	min-height: 50px;

	& #register-step__step-details {
		display: ${(props) => (props.isActive ? "inline-block" : "none")};
	}

	& #register-step__icon {
		padding: ${(props) =>
			props.isActive || props.isCompleted ? "1.2rem" : "0"};
		background-color: ${(props) =>
			props.isActive
				? "blueviolet"
				: props.isCompleted
				? "rgb(223, 189, 255)"
				: "transparent"};
	}

	& #register-step__icon svg {
		color: ${(props) => props.isCompleted && "rgb(111, 0, 255)"};
	}
`;

const RegisterStepIconWrapperStyle = styled.div`
	border-radius: 50%;

	& svg {
		display: block;
		color: white;
		width: 2.5rem;
		height: 2.5rem;
	}
`;

const RegisterStepDetailsWrapperStyle = styled.div`
	margin-left: 1rem;

	& p {
		color: white;
		font-size: 1.58rem;
		font-weight: 500;
		letter-spacing: -0.6px;
	}

	& span {
		color: rgb(190, 104, 247);
		font-size: 1.5rem;
	}
`;

const RegisterFormStep = ({ icon, message, idx }) => {
	const { currentRegisterStepIndex } = useSelector(
		(state) => state.userRegisterFormReducer
	);

	return (
		<RegisterStepStyle
			id="register-step"
			isActive={currentRegisterStepIndex === idx}
			isCompleted={
				currentRegisterStepIndex > idx && currentRegisterStepIndex !== 0
			}
		>
			<RegisterStepIconWrapperStyle id="register-step__icon">
				{icon}
			</RegisterStepIconWrapperStyle>

			<RegisterStepDetailsWrapperStyle id="register-step__step-details">
				<span>Step {currentRegisterStepIndex + 1}/3</span>
				<p>{message}</p>
			</RegisterStepDetailsWrapperStyle>
		</RegisterStepStyle>
	);
};

export default RegisterFormStep;
