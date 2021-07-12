import styled from "styled-components";

export const SearchbarResponsiveStyle = styled.div`
	#searchbar__search-icon {
		display: none;
	}

	@media (max-width: 700px) {
		#searchbar__search-icon {
			display: block;
		}
	}
`;
