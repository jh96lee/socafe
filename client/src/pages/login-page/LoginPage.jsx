import * as React from "react";
import { useDispatch } from "react-redux";

import { resetLoginForm } from "../../redux/login/loginAction";

import { LoginForm } from "../../views/login-form";

import { FormPageStyle } from "../../styles";
import { LoginPageElementWrapperStyle } from "./LoginPageStyle";

const LoginPage = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetLoginForm());
		};
	}, []);

	return (
		<FormPageStyle>
			<LoginPageElementWrapperStyle>
				<h2>Login</h2>

				<LoginForm />
			</LoginPageElementWrapperStyle>
		</FormPageStyle>
	);
};

export default LoginPage;
