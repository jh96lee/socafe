import styled from "styled-components";

export const StoryPreviewTextDropdownStylesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	& > svg {
		fill: grey;
		width: 1.7rem;
		height: 1.7rem;
	}

	& .active {
		fill: var(--char-default);
	}

	& > svg:hover {
		cursor: pointer;
	}
`;
