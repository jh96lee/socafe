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
		color: var(--primary-text-color);
		margin-bottom: 2.2rem;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;