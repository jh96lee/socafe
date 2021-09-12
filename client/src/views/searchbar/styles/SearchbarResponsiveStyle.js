import styled from "styled-components";

export const SearchbarResponsiveStyle = styled.div`
	& > *:first-child {
		display: none;
	}

	@media (max-width: 700px) {
		& > *:first-child {
			display: flex;
		}
	}
`;
