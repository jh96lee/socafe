import styled from "styled-components";

export const RegisterPageElementsWrapperStyle = styled.div`
	width: ${(props) =>
		props.registerStepIndex === 0
			? "40rem"
			: props.registerStepIndex === 1
			? "75%"
			: "37rem"};
	margin-top: ${(props) => (props.registerStepIndex !== 2 ? "3.5rem" : "0rem")};
	display: ${(props) => props.registerStepIndex === 2 && "flex"};
	align-items: ${(props) => props.registerStepIndex === 2 && "center"};

	& > h2 {
		color: var(--text-1);
		margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		width: ${(props) =>
			props.registerStepIndex === 0
				? "90%"
				: props.registerStepIndex === 1
				? "85%"
				: "27.5rem"};
	}
`;
