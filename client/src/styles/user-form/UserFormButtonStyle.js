import styled from "styled-components";

import { ButtonStyle } from "../../styles";

const UserFormButtonStyle = styled(ButtonStyle)`
	color: ${(props) =>
		props.success
			? "var(--success-text-color)"
			: props.error
			? "var(--error-text-color)"
			: "#fff"};
	background-color: ${(props) =>
		props.success
			? "var(--success-background-color)"
			: props.error
			? "var(--error-background-color)"
			: "var(--primary-clickable-background-color)"};

	&:disabled {
		color: #656565;
		background-color: var(--disabled-button-background-color);
		cursor: not-allowed;
	}
`;

export default UserFormButtonStyle;
