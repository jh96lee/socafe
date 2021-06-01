import styled from "styled-components";

export const PostNumericMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const PostNumericTotalsMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	& > svg {
		width: 2.4rem;
		height: 2.4rem;
		fill: var(--primary-text-color);
	}

	& > h5 {
		color: var(--primary-text-color);
	}
`;
