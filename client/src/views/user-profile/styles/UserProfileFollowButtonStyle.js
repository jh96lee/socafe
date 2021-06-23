import styled from "styled-components";

export const UserProfileFollowButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.7rem;
	color: ${(props) => (props.isFollowing ? "#fff" : "var(--blue-3)")};
	background-color: ${(props) =>
		props.isFollowing ? "#3f83ff" : "transparent"};
	border: none;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.5px
		${(props) => (props.isFollowing ? "#3f83ff" : "var(--blue-3)")};

	& > svg {
		fill: ${(props) => (props.isFollowing ? "#fff" : "var(--blue-3)")};
		width: 2.5rem;
		height: 2.5rem;
	}

	& > p {
		font-size: 1.5rem;
		font-weight: 500;
	}

	&:hover {
		background-color: ${(props) =>
			props.isFollowing ? "#0066e4c9" : "#007eff2e"};
		cursor: pointer;
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: transparent;
	}
`;
