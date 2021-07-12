import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message } from "../../shared";

import { setUserLoginFormData } from "../../../redux/user-login/userLoginAction";

import {
	FormFieldsetStyle,
	FormInputAndMessageWrapperStyle,
} from "../../../styles";

const UserLoginFormFieldset = () => {
	const dispatch = useDispatch();

	const { email, password, userLoginFormErrorMessage } = useSelector(
		(state) => state.userLoginReducer
	);

	const handleUserLoginFormInputOnChange = (e) => {
		const userLoginFormData = { email, password };

		userLoginFormData[e.target.name] = e.target.value;

		dispatch(setUserLoginFormData(userLoginFormData));
	};

	return (
		<FormFieldsetStyle>
			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="email"
					label="Email(required)"
					name="email"
					type="email"
					placeholder="Enter your email"
					onChange={handleUserLoginFormInputOnChange}
				/>

				<Message
					errorMessage={
						userLoginFormErrorMessage && userLoginFormErrorMessage.email
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="password"
					label="Password(required)"
					name="password"
					type="password"
					placeholder="Enter your password"
					onChange={handleUserLoginFormInputOnChange}
				/>

				<Message
					errorMessage={
						userLoginFormErrorMessage && userLoginFormErrorMessage.password
					}
				/>
			</FormInputAndMessageWrapperStyle>
		</FormFieldsetStyle>
	);
};

export default UserLoginFormFieldset;
