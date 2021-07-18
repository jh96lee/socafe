import styled from "styled-components";

const AddContentFormStyle = styled.div`
	display: grid;
	grid-template-rows: min-content auto min-content;
	min-height: 100%;
	max-height: 100vh;
	box-shadow: 0 0 0 1.4px var(--separator-1);

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		gap: 2.2rem;
		width: 65%;
		min-height: fit-content;
		max-height: fit-content;
		margin: auto;
		padding: 2rem;
		box-shadow: none;

		& > * {
			padding: 0;
			box-shadow: none;
		}
	}

	@media (max-width: 750px) {
		width: 80%;
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export default AddContentFormStyle;
