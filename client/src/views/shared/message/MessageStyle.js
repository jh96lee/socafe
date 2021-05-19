import styled from "styled-components";

export const MessageStyle = styled.p`
	font-size: 1.3rem;
	color: ${(props) =>
		props.success ? "var(--success-text-color)" : "var(--error-text-color)"};
	padding: 1rem 1.2rem;
	background-color: ${(props) =>
		props.success
			? "var(--success-background-color)"
			: "var(--error-background-color)"};
	border-radius: 0.5rem;
	width: fit-content;
`;
