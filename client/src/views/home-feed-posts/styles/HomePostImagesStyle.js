import styled from "styled-components";

export const HomePostImagesStyle = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.column};
	grid-template-rows: ${(props) => props.row};
	height: ${(props) => (props.numberOfImages === 1 ? "40rem" : "45rem")};
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
