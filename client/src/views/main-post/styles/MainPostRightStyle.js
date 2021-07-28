import styled from "styled-components";

export const MainPostRightBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.7rem 4rem;
	overflow: scroll;

	& > *:first-child {
		margin-bottom: 0.7rem;
	}

	& > *:last-child {
		margin-top: 3rem;
	}

	& > *:empty {
		display: none;
	}
`;
