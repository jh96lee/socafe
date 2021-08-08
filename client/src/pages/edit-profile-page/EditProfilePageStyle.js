import styled from "styled-components";

import { PageStyle } from "../../styles";

export const EditProfilePageStyle = styled(PageStyle)`
	position: relative;
	display: flex;
	justify-content: center;
	gap: 5rem;

	& > *:first-child {
		margin: 3rem 0;
	}

	& > *:last-child {
		margin: 3rem 0;
	}

	@media (max-width: 1300px) {
		flex-direction: column;
		gap: 1rem;

		& > *:first-child {
			margin: 3rem auto 1.2rem auto;
		}

		& > *:last-child {
			margin: 0rem auto 3rem auto;
		}
	}
`;
