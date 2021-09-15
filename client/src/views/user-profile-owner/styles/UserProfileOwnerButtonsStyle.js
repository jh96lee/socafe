import styled from "styled-components";

export const UserProfileOwnerButtonsStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
`;

// FIX
export const UserProfileOwnerButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: -0.4px;
	color: ${(props) => (props.isFollowing ? "var(--char-default)" : "#fff")};
	color: ${(props) => (props.isFollowing ? "" : "#fff")};
	background-color: ${(props) =>
		props.isFollowing ? "transparent" : "var(--button-default-bg-color)"};
	width: 100%;
	padding: 1.2rem 0;
	border-radius: 0.5rem;
	border: none;
	box-shadow: ${(props) =>
		props.isFollowing && "0 0 0 1.4px var(--separator-2)"};
	outline: none;

	& > svg {
		fill: ${(props) => (props.isFollowing ? "var(--char-default)" : "#fff")};
		color: ${(props) => (props.isFollowing ? "var(--char-default)" : "#fff")};
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
