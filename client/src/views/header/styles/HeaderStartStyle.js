import styled from "styled-components";

export const HeaderStartStyle = styled.div`
	#header_hamburger-icon {
		display: none;
	}

	@media (max-width: 700px) {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		#header_hamburger-icon {
			display: block;
		}
	}
`;
