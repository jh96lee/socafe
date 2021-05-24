import styled from "styled-components";

export const CategoriesOfInterestStyle = styled.div`
	min-width: 5rem;
	min-height: 15rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	& button {
		margin-top: 3.5rem;
	}
`;

export const CategoriesOfInterestElementsWrapperStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;
