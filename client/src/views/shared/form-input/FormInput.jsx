import * as React from "react";

import { FormInputStyle } from "./FormInputStyle";

const FormInput = ({
	inputUsage,
	inputID,
	inputLabel,
	inputName,
	inputType,
	inputPlaceholder,
	inputWidth,
	inputPadding,
	inputOnChangeEventHandler,
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
				onChange={inputOnChangeEventHandler}
			/>
		</FormInputStyle>
	);
};

export default FormInput;
