import styled from "styled-components";

export const HeaderStartStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;

	& > *:first-child {
		display: none;
	}

	@media (max-width: 1350px) {
		& > *:first-child {
			display: block;
		}
	}
`;
