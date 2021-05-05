import styled from "styled-components";

import { PageStyle } from "../../styles";

export const RegisterPageStyle = styled(PageStyle)`
	display: flex;
	justify-content: center;
`;

export const RegisterElementsWrapper = styled.div`
	width: ${(props) =>
		props.currentRegisterStepIndex === 0
			? "40rem"
			: props.currentRegisterStepIndex === 1
			? "85%"
			: "100%"};
	margin: 3.5rem 0;

	& h2 {
		font-size: 2.6rem;
		color: var(--primary-text-color);
		margin-bottom: 2.2rem;
	}

	@media (max-width: 600px) {
		width: ${(props) =>
			props.currentRegisterStepIndex === 0
				? "90%"
				: props.currentRegisterStepIndex === 1
				? "85%"
				: "100%"};
	}
`;
