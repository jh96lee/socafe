import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button, Loader } from "../../shared";
import ChangePasswordFormFieldset from "./ChangePasswordFormFieldset";

import {
	changePassword,
	resetChangePassword,
} from "../../../redux/change-password/changePasswordAction";

import { FormStyle } from "../../../styles";

const ChangePasswordFormStyle = styled(FormStyle)`
	width: 45rem;
`;

const ChangePasswordForm = () => {
	const dispatch = useDispatch();

	const {
		oldPassword,
		newPassword,
		confirmPassword,
		isPasswordChanging,
		changePasswordErrorMessage,
		changePasswordSuccessMessage,
	} = useSelector((state) => state.changePasswordReducer);

	React.useEffect(() => {
		return () => {
			dispatch(resetChangePassword());
		};
	}, []);

	const handleChangePasswordButtonOnClick = (e) => {
		e.preventDefault();

		dispatch(changePassword());
	};

	return (
		<ChangePasswordFormStyle>
			<h2>Change Password</h2>

			<ChangePasswordFormFieldset />

			<Button
				disabled={
					changePasswordErrorMessage ||
					!oldPassword ||
					!newPassword ||
					!confirmPassword
				}
				success={changePasswordSuccessMessage}
				error={changePasswordErrorMessage}
				onClick={handleChangePasswordButtonOnClick}
				buttonStyleObject={{
					buttonMargin: "3rem 0 1rem 0",
				}}
			>
				{isPasswordChanging ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
				) : changePasswordSuccessMessage ? (
					changePasswordSuccessMessage
				) : changePasswordErrorMessage ? (
					"Error"
				) : (
					"Submit"
				)}
			</Button>
		</ChangePasswordFormStyle>
	);
};

export default ChangePasswordForm;
