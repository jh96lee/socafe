import styled from "styled-components";

export const HomeFeedSectionContentsStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: var(--bg-1);
	min-height: 6rem;

	& > * {
		padding: 1.5rem;
	}
`;

export default HomeFeedSectionContentsStyle;
