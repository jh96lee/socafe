import * as React from "react";
import styled from "styled-components";

const FormInputStyle = styled.div`
	display: flex;
	flex-direction: column;

	& label {
		color: var(--txt-1);
		font-size: 1.37rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		margin-bottom: 0.4rem;
	}

	& input {
		color: var(--txt-1);
		background-color: var(--input-bg-1);
		border: 0.18rem solid var(--border-1);
		border-radius: 0.5rem;
		padding: 1rem;
		outline: none;
	}

	& p {
		color: var(--txt-err);
		background-color: var(--bg-err);
		font-size: 1.33rem;
		font-weight: 500;
		margin-top: 0.2rem;
		padding: 1rem;
		border-radius: 0.5rem;
	}
`;

const FormInput = ({
	inputId,
	inputName,
	inputType,
	inputLabel,
	errorMessage,
	setInputState,
}) => {
	const handleOnChange = (e) => {
		setInputState(e.target.value);
	};

	return (
		<FormInputStyle>
			<label htmlFor={inputId}>{inputLabel}</label>
			<input
				id={inputId}
				name={inputName}
				type={inputType}
				placeholder={`Enter ${inputLabel}`}
				onChange={handleOnChange}
			/>
			{errorMessage && <p>{errorMessage}</p>}
		</FormInputStyle>
	);
};

export default FormInput;
