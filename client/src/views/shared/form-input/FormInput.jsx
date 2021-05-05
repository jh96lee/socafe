import * as React from "react";

import styled from "styled-components";

const FormInputStyle = styled.div`
	display: flex;
	flex-direction: column;

	& label,
	input {
		color: var(--primary-text-color);
		letter-spacing: -0.6px;
	}

	& label {
		display: ${(props) =>
			props.inputUsage === "search" ? "none" : "inline-block"};
		font-size: 1.47rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	& input {
		font-size: 1.43rem;
		width: 100%;
		outline: none;
		border: none;
		box-shadow: ${(props) =>
			props.inputUsage === "search"
				? "none"
				: "0 0 0 1.6px var(--secondary-box-shadow-color)"};
		border-radius: 0.5rem;
		padding: ${(props) =>
			props.inputPadding ? props.inputPadding : "1.4rem 1.5rem"};
		background-color: ${(props) =>
			props.inputUsage === "search"
				? "transparent"
				: "var(--primary-input-background-color)"};
	}

	& input::placeholder {
		font-size: 1.43rem;
		color: ${(props) =>
			props.inputUsage === "search"
				? "var(--secondary-placeholder-color)"
				: "var(--primary-placeholder-color)"};
	}

	/* REVIEW: for error message */
	& p {
		font-size: 1.33rem;
		color: var(--error-text-color);
		background-color: var(--error-background-color);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-top: 0.5rem;
	}

	& input:focus {
		box-shadow: 0 0 0 2px var(--focus-box-shadow-color);
	}
`;

const FormInput = ({
	inputUsage,
	inputID,
	inputLabel,
	inputName,
	inputType,
	inputPlaceholder,
	inputErrorMessage,
	inputWidth,
	inputPadding,
	onChangeEventHandler,
}) => {
	return (
		<FormInputStyle
			inputUsage={inputUsage}
			inputWidth={inputWidth}
			inputPadding={inputPadding}
		>
			<label htmlFor={inputID}>{inputLabel}</label>
			<input
				id={inputID}
				name={inputName}
				type={inputType}
				placeholder={inputPlaceholder}
				onChange={onChangeEventHandler}
			/>
			{inputUsage === "search" || !inputErrorMessage ? null : (
				<p>{inputErrorMessage}</p>
			)}
		</FormInputStyle>
	);
};

export default FormInput;
