import styled from "styled-components";

export const HeaderMiddleStyle = styled.div`
	/* REVIEW: search icon */
	& > *:first-child {
		display: none;
	}

	@media (max-width: 750px) {
		& > *:first-child {
			display: flex;
		}
	}
`;
