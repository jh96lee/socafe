import styled from "styled-components";

export const MessageStyle = styled.p`
	font-size: 1.37rem;
	color: ${(props) =>
		props.success ? "var(--char-success)" : "var(--char-error)"};
	width: ${(props) => (props.messageWidth ? props.messageWidth : "100%")};
	padding: 1.2rem;
	background-color: ${(props) =>
		props.success ? "var(--bg-success)" : "var(--bg-error)"};
	border-radius: 0.5rem;
`;
