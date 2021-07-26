import styled from "styled-components";

export const MainPostStyle = styled.div`
	position: relative;
	z-index: 5;
	display: grid;
	grid-template-columns: 1fr 48rem;
	/* REVIEW: this has to conditional */
	grid-auto-rows: calc(100vh - 7.8rem);
	background: var(--bg-1);
	width: 100%;
	overflow: scroll;

	@media (max-width: 1300px) {
		grid-template-columns: 1fr 40rem;
	}

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;
		grid-auto-rows: calc(100vh - 7.8rem - 35rem) 35rem;
	}

	@media (max-width: 700px) {
		grid-column: 1 / 3;
	}
`;
