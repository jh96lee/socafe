import styled from "styled-components";

export const HomeFeedUserSuggestionsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 1.4rem;

	& > h5 {
		color: var(--char-default);
		font-weight: 600;
	}
`;

export const HomeFeedUserSuggestionsWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	min-height: 5rem;
`;
