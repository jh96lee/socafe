import styled from "styled-components";

export const PostPreviewStyle = styled.div`
	display: grid;
	grid-template-columns: 63% auto;
	grid-auto-rows: 55rem;
	gap: 1rem;
	width: 95rem;
	height: fit-content;
	margin: 6rem auto 3rem auto;
	padding: 2rem;
	background: ${(props) => (props.theme.isDarkMode ? "#121212" : "#fdfdfd")};
	box-shadow: 0 0 2px 1.8px var(--primary-separator-color);
	border-radius: 1rem;

	@media (max-width: 1450px) {
		width: 95%;
		grid-auto-rows: 50rem;
	}

	@media (max-width: 1250px) {
		grid-template-columns: 1fr;
		width: 50rem;
		grid-auto-rows: 40rem auto;
	}

	@media (max-width: 1000px) {
		width: 90%;
		grid-auto-rows: 33rem auto;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

export const PostPreviewDetailsStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	gap: 1.5rem;
	overflow: scroll;
`;
