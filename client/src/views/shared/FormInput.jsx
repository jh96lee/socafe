import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserInfo } from "../../redux/user/userRegisterAction";

import { FormInputLabelWrapper, FormInputStyle } from "../../styles";

const FormInput = ({
	inputId,
	inputName,
	type,
	inputLabel,
	placeholder,
	errorMessage,
}) => {
	const userInfoState = useSelector((state) => state.userRegisterReducer);

	const dispatch = useDispatch();

	const handleInputOnChange = (e) => {
		const userInfoStateCopy = { ...userInfoState };

		const userInfoObjectKey = e.target.id;

		const inputValue = e.target.value;

		userInfoStateCopy[userInfoObjectKey] = inputValue;

		dispatch(setUserInfo(userInfoStateCopy));
	};

	return (
		<FormInputLabelWrapper>
			<label htmlFor={inputId}>{inputLabel}</label>
			<FormInputStyle
				id={inputId}
				name={inputName}
				type={type}
				inputLabel={inputLabel}
				onChange={handleInputOnChange}
				placeholder={placeholder}
			/>
			{errorMessage && <p>{errorMessage}</p>}
		</FormInputLabelWrapper>
	);
};

export default FormInput;
