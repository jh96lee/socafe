import styled from "styled-components";

export const HomeFeedUserSuggestionsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 1.4rem;

	& > h5 {
		color: var(--text-1);
		font-weight: 600;
	}
`;

export const HomeFeedUserSuggestionsWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	min-height: 5rem;
`;
