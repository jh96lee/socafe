import styled from "styled-components";

import { UserFormPageElementsWrapperStyle } from "../../styles";

export const RegisterElementsWrapper = styled(UserFormPageElementsWrapperStyle)`
	width: ${(props) =>
		props.currentRegisterStepIndex === 0
			? "40rem"
			: props.currentRegisterStepIndex === 1
			? "85%"
			: "100%"};
	margin: 3.5rem 0;

	@media (max-width: 600px) {
		width: ${(props) =>
			props.currentRegisterStepIndex === 0
				? "90%"
				: props.currentRegisterStepIndex === 1
				? "85%"
				: "100%"};
	}
`;
