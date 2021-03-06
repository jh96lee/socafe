import styled from "styled-components";

export const UserFollowTopicsFormTopicStyle = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0.85rem;
	border-radius: 5rem;
	background-color: var(--bg-input-default);
	box-shadow: 0 0 0 1.6px var(--divider-default);

	& img {
		width: 5.1rem;
		height: 5.1rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > h5 {
		color: var(--char-default);
		margin: 0 1.6rem;
	}

	& svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) =>
			props.isTopicSelected
				? "var(--icon-success-color)"
				: "var(--char-default)"};
		cursor: pointer;
	}

	&:hover {
		cursor: pointer;
	}
`;
