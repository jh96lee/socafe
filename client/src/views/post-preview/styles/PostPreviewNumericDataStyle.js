import styled from "styled-components";

export const PostPreviewTotalsDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	& svg {
		fill: var(--icon-default-color);
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}
`;

export const PostPreviewTotalsDataAndIconStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > svg {
		width: 2.2rem;
		height: 2.2rem;
		fill: var(--icon-default-color);
	}
`;
