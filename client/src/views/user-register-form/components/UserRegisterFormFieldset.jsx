import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { FormInput, Message } from "../../shared";

import { setUserRegisterFormData } from "../../../redux/user-register/user-register-form/userRegisterFormAction";

const FormFieldsetStyle = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	width: 100%;
	border: none;
`;

const FormInputAndMessageWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const UserRegisterFormFieldset = () => {
	const dispatch = useDispatch();

	const { fullName, email, username, password, userRegisterFormErrorMessage } =
		useSelector((state) => state.userRegisterFormReducer);

	const handleUserRegisterFormInputOnChange = (e) => {
		const userRegisterFormData = { fullName, email, username, password };

		userRegisterFormData[e.target.name] = e.target.value;

		dispatch(setUserRegisterFormData(userRegisterFormData));
	};

	return (
		<FormFieldsetStyle>
			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="full-name"
					label="Full Name(required)"
					name="fullName"
					type="text"
					placeholder="Enter your full name"
					onChange={handleUserRegisterFormInputOnChange}
				/>

				<Message
					errorMessage={
						userRegisterFormErrorMessage &&
						userRegisterFormErrorMessage.fullName
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="email"
					label="Email(required)"
					name="email"
					type="email"
					placeholder="Enter your email"
					onChange={handleUserRegisterFormInputOnChange}
				/>

				<Message
					errorMessage={
						userRegisterFormErrorMessage && userRegisterFormErrorMessage.email
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="username"
					label="Username(required)"
					name="username"
					type="text"
					placeholder="Enter your username"
					onChange={handleUserRegisterFormInputOnChange}
				/>

				<Message
					errorMessage={
						userRegisterFormErrorMessage &&
						userRegisterFormErrorMessage.username
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
					onChange={handleUserRegisterFormInputOnChange}
				/>

				<Message
					errorMessage={
						userRegisterFormErrorMessage &&
						userRegisterFormErrorMessage.password
					}
				/>
			</FormInputAndMessageWrapperStyle>
		</FormFieldsetStyle>
	);
};

export default UserRegisterFormFieldset;
