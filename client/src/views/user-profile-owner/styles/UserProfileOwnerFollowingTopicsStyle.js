import styled from "styled-components";

export const UserProfileOwnerFollowingTopicsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
	justify-content: center;
	gap: 1.5rem;
`;

export const UserProfileOwnerFollowingTopicStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.7rem;

	& > img {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--input-default-separator-color);
	}

	& > span {
		font-weight: 400;
	}

	&:hover {
		cursor: pointer;
	}
`;
