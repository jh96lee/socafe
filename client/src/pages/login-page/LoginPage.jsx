import * as React from "react";

import { LoginForm } from "../../views/login-form";

import {
	UserFormPageStyle,
	UserFormPageElementsWrapperStyle,
} from "../../styles";

const LoginPage = () => {
	return (
		<UserFormPageStyle>
			<UserFormPageElementsWrapperStyle>
				<h2>Login</h2>

				<LoginForm />
			</UserFormPageElementsWrapperStyle>
		</UserFormPageStyle>
	);
};

export default LoginPage;
