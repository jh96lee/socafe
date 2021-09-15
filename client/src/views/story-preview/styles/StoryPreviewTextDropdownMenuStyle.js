import styled from "styled-components";

export const StoryPreviewTextDropdownMenuStyle = styled.div`
	position: absolute;
	top: calc(100% + 10px);
	left: 0;
	width: 24rem;
	background-color: var(--bg-2);
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: 0 0 0 1.6px var(--divider-default);

	& > *:not(:last-child) {
		border-bottom: 1px solid var(--divider-default);
	}

	& > *:first-child {
		padding-bottom: 1.2rem;
	}

	& > *:nth-child(2) {
		padding: 1.2rem 0;
	}

	& > *:last-child {
		padding-top: 1.2rem;
	}
`;
