import styled from "styled-components";

export const PostPreviewStyle = styled.div`
	display: grid;
	grid-template-columns: 65% auto;
	gap: 2rem;
	width: 90%;
	max-width: 100rem;
	margin: 3.5rem auto;

	@media (max-width: 1250px) {
		grid-template-columns: 1fr;
	}

	/* REVIEW: PostPreview component will be hidden when width hits 900px */
	@media (max-width: 700px) {
		display: none;
	}
`;

export const PostPreviewDetailsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;
