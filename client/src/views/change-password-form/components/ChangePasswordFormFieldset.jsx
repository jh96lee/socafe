import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Message, TextEditor } from "../../shared";

import { setPasswordsData } from "../../../redux/change-password/changePasswordAction";

import {
	FormFieldsetStyle,
	FormInputAndMessageWrapperStyle,
} from "../../../styles";

const ChangePasswordFormFieldset = () => {
	const dispatch = useDispatch();

	const {
		oldPassword,
		newPassword,
		confirmPassword,
		changePasswordErrorMessage,
	} = useSelector((state) => state.changePasswordReducer);

	const handleFormInputOnChange = (e) => {
		const passwordsObject = {
			oldPassword,
			newPassword,
			confirmPassword,
		};

		passwordsObject[e.target.name] = e.target.value;

		dispatch(setPasswordsData(passwordsObject));
	};

	return (
		<FormFieldsetStyle>
			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="change-password-form__old-password"
					label="Old Password"
					name="oldPassword"
					type="password"
					onChange={handleFormInputOnChange}
				/>

				<Message
					errorMessage={
						changePasswordErrorMessage && changePasswordErrorMessage.oldPassword
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="change-password-form__new-password"
					label="New Password"
					name="newPassword"
					type="password"
					onChange={handleFormInputOnChange}
				/>

				<Message
					errorMessage={
						changePasswordErrorMessage && changePasswordErrorMessage.newPassword
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="change-password-form__confirm-password"
					label="Confirm Password"
					name="confirmPassword"
					type="password"
					onChange={handleFormInputOnChange}
				/>

				<Message
					errorMessage={
						changePasswordErrorMessage &&
						changePasswordErrorMessage.confirmPassword
					}
				/>
			</FormInputAndMessageWrapperStyle>
		</FormFieldsetStyle>
	);
};

export default ChangePasswordFormFieldset;
