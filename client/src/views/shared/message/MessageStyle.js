import styled from "styled-components";

export const MessageStyle = styled.p`
	font-size: 1.33rem;
	color: ${(props) =>
		props.success ? "var(--text-success-color)" : "var(--text-error-color)"};
	width: ${(props) => (props.messageWidth ? props.messageWidth : "100%")};
	padding: 1.2rem;
	background-color: ${(props) =>
		props.success ? "var(--bg-success-color)" : "var(--bg-error-color)"};
	border-radius: 0.5rem;
`;
