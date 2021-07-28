import styled from "styled-components";

export const MainPostStyle = styled.div`
	position: ${(props) => (props.isOverlayMainPost ? "fixed" : "relative")};
	z-index: ${(props) => (props.isOverlayMainPost ? "100" : "5")};
	display: grid;
	grid-column: 2 / 3;
	grid-template-columns: 1fr 24rem 24rem;
	grid-auto-rows: min-content 1fr min-content;
	background: var(--bg-1);
	width: 100%;
	height: ${(props) =>
		props.isOverlayMainPost ? "100vh" : "calc(100vh - 7.8rem)"};
	max-height: ${(props) =>
		props.isOverlayMainPost ? "100vh" : "calc(100vh - 7.8rem)"};
	overflow: scroll;

	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 4;
	}

	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		justify-self: start;
		width: 100%;
		padding: 2rem 0rem 2rem 2.5rem;
		box-shadow: 0 1px 0 0 var(--input-default-separator-color);
	}

	& > *:nth-child(3) {
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		justify-self: end;
		width: 100%;
		padding: 2rem 2.5rem 2rem 0rem;
		box-shadow: 0 1px 0 0 var(--input-default-separator-color);
	}

	& > *:nth-child(4) {
		grid-column: 2 / 4;
		grid-row: 2 / 3;
	}

	& > *:nth-child(5) {
		grid-column: 2 / 4;
		grid-row: 3 / 4;
	}

	@media (max-width: 1300px) {
		grid-template-columns: 1fr 20rem 20rem;
	}

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;
		grid-auto-rows: min-content 1fr min-content 15rem min-content;
		border-left: 1px solid var(--input-default-separator-color);
		border-right: 1px solid var(--input-default-separator-color);

		& > * {
			grid-column: 1 / 2 !important;
		}

		& > *:nth-child(2),
		& > *:nth-child(3) {
			padding: 1.4rem 0rem 1.4rem 2rem;
		}

		& > *:nth-child(1) {
			grid-row: 2 / 3;
		}

		& > *:nth-child(2) {
			grid-row: 1 / 2;
			box-shadow: none;
		}

		& > *:nth-child(3) {
			grid-row: 3 / 4;
			box-shadow: 0 1px 0 0 var(--input-default-separator-color);
		}

		& > *:nth-child(4) {
			grid-row: 4 / 5;
		}

		& > *:nth-child(5) {
			grid-row: 5 / 6;
		}
	}

	@media (max-width: 700px) {
		grid-column: 1 / 3;
		grid-auto-rows: min-content 1fr min-content 18rem min-content;
	}

	@media (max-width: 500px) {
		grid-auto-rows: min-content 1fr min-content 22rem min-content;

		& > *:nth-child(4) {
			padding: 1.7rem 1rem;
		}
	}
`;
