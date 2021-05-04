import styled from "styled-components";

import { PageStyle } from "../../styles";

export const RegisterPageStyle = styled(PageStyle)`
	display: flex;
	justify-content: center;
`;

export const RegisterElementsWrapper = styled.div`
	width: ${(props) =>
		props.registerStep === 0
			? "40rem"
			: props.registerStep === 1
			? "85%"
			: "45rem"};
	margin: 3.5rem 0;

	@media (max-width: 600px) {
		width: ${(props) =>
			props.registerStep === 0
				? "90%"
				: props.registerStep === 1
				? "80%"
				: "75%"};
	}
`;
