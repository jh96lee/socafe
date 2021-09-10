import styled from "styled-components";

const PageWithSidebarStyle = styled.div`
	position: relative;
	z-index: 10;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	display: grid;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;
	min-width: 100vw;
	overflow: scroll;
	background-color: var(--bg-default);

	/* REVIEW: this is to hide the component/element that triggers the opening of responsive sidebar */
	& > *:last-child {
		display: none;
	}

	/* REVIEW: provide the breaking point in which the sidebar becomes absolute positioned */
	@media (max-width: ${(props) => `${props.absoluteSidebarBreakingPoint}px`}) {
		grid-template-columns: 1fr;

		/* REVIEW: first child must be sidebar component */
		& > *:first-child {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100;
			width: 70%;
			background-color: var(--bg-1);
			border-radius: 1rem;
		}

		/* REVIEW: display the element that triggers the opening of sidebar */
		& > *:last-child {
			position: fixed;
			bottom: 2rem;
			left: 2rem;
			z-index: 50;
			display: block;
		}
	}

	@media (max-width: 550px) {
		/* REVIEW: resize sidebar to fit 100% of both width and height */
		& > *:first-child {
			width: 100%;
			height: 100%;
		}
	}
`;

export default PageWithSidebarStyle;
