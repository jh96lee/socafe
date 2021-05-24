import styled from "styled-components";

export const RegisterPageElementsWrapperStyle = styled.div`
	width: ${(props) =>
		props.registerStepIndex === 0
			? "40rem"
			: props.registerStepIndex === 1
			? "75%"
			: "100%"};
	margin-top: 3.5rem;

	& > h2 {
		color: var(--primary-text-color);
		margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		width: ${(props) =>
			props.registerStepIndex === 0
				? "90%"
				: props.registerStepIndex === 1
				? "85%"
				: "80%"};
	}
`;
