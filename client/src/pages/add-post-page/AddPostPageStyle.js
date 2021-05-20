import styled from "styled-components";
import { PageStyle } from "../../styles";

export const AddContentPageStyle = styled(PageStyle)`
	display: grid;
	grid-template-columns: 36rem auto;
`;

export const AddContentFormStyle = styled.div`
	width: 100%;
	padding: 1.5rem 1.2rem;
	box-shadow: 0px 3px 0px 1.6px var(--primary-separator-color);

	& > * {
		margin-bottom: 3rem;
	}
`;

export const AddContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h3 {
		font-size: 2rem;
		color: var(--primary-text-color);
	}
`;
