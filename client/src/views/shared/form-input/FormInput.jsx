import * as React from "react";

import { FormInputStyle } from "./FormInputStyle";

const FormInput = ({
	id,
	label,
	name,
	type,
	value,
	defaultValue,
	inputRef,
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
				value={value}
				defaultValue={defaultValue}
				ref={inputRef}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</FormInputStyle>
	);
};

export default FormInput;
