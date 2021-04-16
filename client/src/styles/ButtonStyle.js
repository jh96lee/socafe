import styled from "styled-components";

const ButtonStyle = styled.button`
	font-size: 1.4rem;
	font-weight: 500;
	border: none;
	border-radius: 0.5rem;
	padding: 1.2rem;
	cursor: pointer;
	letter-spacing: -0.6px;
`;

export const RegisterAndLoginFormButtonStyle = styled(ButtonStyle)`
	background-color: ${(props) =>
		props.success ? "var(--bg-success)" : "var(--btn-bg-1)"};
	color: ${(props) => (props.success ? "var(--txt-success)" : "#ffffff")};

	&:disabled {
		cursor: not-allowed;
		background-color: var(--btn-bg-disabled);
	}
`;

export const CategoriesOfInterestButtonStyle = styled(ButtonStyle)`
	background-color: var(--btn-bg-1);
	color: ${(props) => (props.success ? "var(--txt-success)" : "#ffffff")};
	width: 40rem;
	margin: auto;
`;
