import styled from "styled-components";

export const PostCommentStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1rem;

	background-color: ${(props) =>
		props.isInstigatingComment
			? "var(--active-yellow)"
			: props.isReceivingComment
			? "var(--active-blue)"
			: "transparent"};
	padding: 1.35rem;
	border-radius: 1rem;

	& a {
		color: var(--char-default);
		font-size: 1.4rem;
		font-weight: 500;
	}

	&:hover #main-post-comment-more-dropdown-trigger {
		display: flex;
	}
`;
