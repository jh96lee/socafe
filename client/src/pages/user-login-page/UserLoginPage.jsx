import * as React from "react";
import { useDispatch } from "react-redux";

import { UserLoginForm } from "../../views/user-login-form";

import { resetUserLoginForm } from "../../redux/user-login/userLoginAction";

import { UserLoginPageStyle } from "./UserLoginPageStyle";

const LoginPage = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetUserLoginForm());
		};
	}, []);

	return (
		<UserLoginPageStyle>
			<UserLoginForm />
		</UserLoginPageStyle>
	);
};

export default LoginPage;
