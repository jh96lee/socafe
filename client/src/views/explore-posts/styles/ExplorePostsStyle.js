import styled from "styled-components";

export const ExplorePostsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const ExplorePostsSectionStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: auto;
	gap: 3rem 2rem;
	width: 100%;
`;
