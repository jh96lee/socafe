import styled from "styled-components";

export const PostPreviewNumericDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const PostPreviewNumericDataAndIconStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > svg {
		width: 2.2rem;
		height: 2.2rem;
		fill: var(--icon-1);
	}
`;
