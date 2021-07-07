import styled from "styled-components";

import { PageStyle } from "../../styles";

export const CategoryOfInterestPageStyle = styled(PageStyle)`
	display: flex;
	justify-content: center;
`;

export const CategoriesOfInterestElementsWrapperStyle = styled.div`
	width: 90%;
	margin: 3.5rem 0;

	& h2 {
		font-size: 2.6rem;
		color: var(--text-1);
		margin-bottom: 2.5rem;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;
