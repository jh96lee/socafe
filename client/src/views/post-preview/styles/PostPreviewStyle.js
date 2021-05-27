import styled from "styled-components";

export const PostPreviewStyle = styled.div`
	display: grid;
	grid-template-columns: 65% auto;
	grid-auto-rows: 55rem;
	gap: 1rem;
	width: 90%;
	max-width: 90rem;
	height: fit-content;
	margin: 6rem auto 0 auto;
	padding: 1rem;
	background: black;
	border-radius: 1rem;

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
