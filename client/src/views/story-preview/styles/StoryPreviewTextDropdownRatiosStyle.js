import styled from "styled-components";

export const StoryPreviewTextDropdownRatiosStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	& > h5 {
		font-size: 1.6rem;
		font-weight: 600;
		color: grey;
	}

	& .active {
		color: var(--text-1);
	}

	& > h5:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
