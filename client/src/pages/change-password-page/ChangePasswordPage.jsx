import * as React from "react";
import styled from "styled-components";

import { ChangePasswordForm } from "../../views/change-password-form";

import { PageStyle } from "../../styles";

const ChangePasswordPageStyle = styled(PageStyle)`
	position: relative;
`;

const ChangePasswordPage = () => {
	return (
		<ChangePasswordPageStyle>
			<ChangePasswordForm />
		</ChangePasswordPageStyle>
	);
};

export default ChangePasswordPage;
