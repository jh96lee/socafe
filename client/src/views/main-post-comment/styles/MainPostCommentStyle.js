import styled from "styled-components";

export const MainPostCommentStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1rem;

	& a {
		color: var(--text-1);
		font-size: 1.4rem;
		font-weight: 500;
	}

	&:hover #main-post-comment-more-dropdown-trigger {
		display: flex;
	}
`;
