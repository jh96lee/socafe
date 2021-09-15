import styled from "styled-components";

export const HomeFeedSuggestedUserStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.7rem;
	min-height: 5rem;
`;

// FIX
export const HomeFeedFollowSuggestedUserButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	font-size: 1.35rem;
	font-weight: 500;
	letter-spacing: -0.4px;
	color: var(--char-default);
	background-color: transparent;
	border-radius: 0.5rem;
	border: none;

	outline: none;

	& > svg {
		fill: var(--char-default);
		color: var(--char-default);
		width: 1.7rem;
		height: 1.7rem;
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
