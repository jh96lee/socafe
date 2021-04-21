import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

const RegisterFormButtonStyle = styled(ButtonStyle)`
	background-color: ${(props) =>
		props.success ? "var(--bg-success)" : "var(--btn-bg-1)"};
	color: ${(props) => (props.success ? "var(--txt-success)" : "#ffffff")};

	&:disabled {
		cursor: not-allowed;
		background-color: var(--btn-bg-disabled);
	}
`;

export default RegisterFormButtonStyle;
