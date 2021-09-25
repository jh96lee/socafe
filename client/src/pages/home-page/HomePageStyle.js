import { NavigationRenderedPageStyle } from "../../styles";

import styled from "styled-components";

export const HomePageStyle = styled(NavigationRenderedPageStyle)`
	display: flex;

	& > *:first-child {
		width: 50%;
		min-width: 50rem;
		margin: 0 auto;
	}

	& > *:last-child {
		width: 36.5rem;
	}

	@media (max-width: 1350px) {
		& > *:first-child {
			width: 60rem;
			min-width: 0;
		}
	}

	@media (max-width: 1050px) {
		& > *:last-child {
			display: none;
		}
	}

	@media (max-width: 700px) {
		& > *:first-child {
			width: 95%;
		}
	}
`;

export const HomeFeedMainsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 3rem 0;
`;

export const HomeFeedSubSectionsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-top: 3rem;
	padding-right: 1.5rem;
`;
