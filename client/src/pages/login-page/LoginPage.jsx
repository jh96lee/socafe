import * as React from "react";

import { LoginForm } from "../../views/login-form";

import { FormPageStyle } from "../../styles";
import { LoginPageElementWrapperStyle } from "./LoginPageStyle";

const LoginPage = () => {
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
