import * as React from "react";

import { FormInputLabelWrapper, FormInputStyle } from "../../styles";

const FormInput = ({
	inputId,
	inputName,
	inputType,
	inputLabel,
	errorMessage,
	setInputState,
}) => {
	const handleInputOnChange = (e) => {
		setInputState(e.target.value);
	};

	return (
		<FormInputLabelWrapper>
			<label htmlFor={inputId}>{inputLabel}</label>
			<FormInputStyle
				id={inputId}
				name={inputName}
				inputType={inputType}
				inputLabel={inputLabel}
				onChange={handleInputOnChange}
			/>
			{errorMessage && <p>{errorMessage}</p>}
		</FormInputLabelWrapper>
	);
};

export default FormInput;
