import styled from "styled-components";

export const PostNumbersMetaDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	& > div > svg {
		width: 2.7rem;
		height: 2.7rem;
		fill: var(--primary-icon-color);
	}

	& > div > #post-preview-heart {
		fill: #f73a3a;
	}
`;
