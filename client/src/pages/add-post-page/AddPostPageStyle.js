import styled from "styled-components";

export const AddPostPageStyle = styled.div`
	display: grid;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		width: 80%;
		margin: auto;
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;
