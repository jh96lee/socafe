import * as React from "react";

import { FormInputStyle } from "./FormInputStyle";

const FormInput = ({
	id,
	label,
	name,
	type,
	placeholder,
	onChange,
	formInputStyleObject,
}) => {
	return (
		<FormInputStyle {...formInputStyleObject}>
			<label htmlFor={id}>{label}</label>

			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</FormInputStyle>
	);
};

export default FormInput;
