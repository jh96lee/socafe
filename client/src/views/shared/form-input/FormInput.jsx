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
		display: ${(props) => (props.isLabelHidden ? "none" : "inline-block")};
		font-size: 1.37rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	& input {
		font-size: 1.43rem;
		width: 100%;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.2rem 1rem;
		background-color: var(--primary-input-background-color);
	}

	& p {
		font-size: 1.33rem;
		color: var(--error-text-color);
		background-color: var(--error-background-color);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-top: 0.5rem;
	}

	& input:focus {
		box-shadow: 0 0 0 1.4px var(--secondary-box-shadow-color);
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
	onChangeEventHandler,
	isLabelHidden,
}) => {
	return (
		<FormInputStyle isLabelHidden={isLabelHidden} inputWidth={inputWidth}>
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
