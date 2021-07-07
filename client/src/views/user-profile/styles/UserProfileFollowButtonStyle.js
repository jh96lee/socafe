import styled from "styled-components";

export const UserProfileFollowButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.7rem;
	color: ${(props) => (props.isFollowing ? "#fff" : "var(--text-1)")};
	background-color: ${(props) =>
		props.isFollowing ? "var(--bg-clickable-1)" : "transparent"};
	border: none;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.6px
		${(props) =>
			props.isFollowing ? "var(--bg-clickable-1)" : "var(--text-1)"};

	& > svg {
		fill: ${(props) => (props.isFollowing ? "#fff" : "var(--text-1)")};
		width: 2.3rem;
		height: 2.3rem;
	}

	& > p {
		font-size: 1.37rem;
		font-weight: 500;
	}

	&:hover {
		background-color: ${(props) =>
			props.isFollowing ? "var(--bg-clickable-hover-1)" : "var(--bg-hover-1)"};
		cursor: pointer;
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: transparent;
	}
`;
