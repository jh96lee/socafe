import styled from "styled-components";

export const HeaderStyle = styled.header`
	position: relative;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	box-shadow: 0px 0px 0px 1.6px var(--primary-box-shadow-color);
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 50;

	@media (max-width: 600px) {
		display: grid;
		grid-template-columns: 1fr min-content min-content;
		padding: 0 1rem;
	}
`;

export const HeaderStart = styled.div`
	display: flex;
	align-items: center;

	/* REVIEW: amongst the direct children, hide the first child which is the burger menu div */
	& > *:first-child {
		display: none;
	}

	/* REVIEW: this displays the burger icon */
	@media (max-width: 600px) {
		& > *:first-child {
			display: block;
			margin-right: 0.7rem;
		}
	}
`;

export const HeaderEnd = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-left: 1.4rem;
	}
`;
