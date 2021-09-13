import styled from "styled-components";

export const HeaderStartStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;

	/* REVIEW: Burger icon */
	& > *:first-child {
		display: none;
	}

	@media (max-width: 1350px) {
		/* REVIEW: Burger icon */
		& > *:first-child {
			display: block;
		}
	}
`;
