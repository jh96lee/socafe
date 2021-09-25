import styled from "styled-components";

export const HomePostImagesStyle = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.column};
	grid-template-rows: ${(props) => props.row};
	height: ${(props) => (props.numberOfImages === 1 ? "25.3vw" : "28.46vw")};
	min-height: 40rem;
	gap: 1.2rem;

	& > *:nth-child(1) {
		grid-column: ${(props) => props.gridColumn};
		grid-row: ${(props) => props.gridRow};
		width: 100%;
		height: 100%;
	}

	& > *:nth-child(2),
	& > *:nth-child(3) {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1350px) {
		height: ${(props) => (props.numberOfImages === 1 ? "25.40rem" : "45rem")};
	}

	@media (max-width: 700px) {
		height: ${(props) => (props.numberOfImages === 1 ? "25.3vw" : "28.46vw")};
	}

	@media (max-width: 400px) {
		display: flex;
		flex-direction: column;
		height: auto;
		min-height: 0;

		& > * {
			height: 18rem !important;
		}
	}
`;

export const HomePostImageStyle = styled.div`
	background-image: url(${(props) => props.homePostImageURL});
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 1rem;

	&:hover {
		cursor: pointer;
	}
`;
