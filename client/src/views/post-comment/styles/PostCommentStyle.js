import styled from "styled-components";

export const PostCommentStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1rem;

	background-color: ${(props) =>
		props.isInstigatingComment
			? "var(--bg-yellow-1)"
			: props.isReceivingComment
			? "var(--bg-blue-1)"
			: "transparent"};
	padding: ${(props) =>
		props.isInstigatingComment || props.isReceivingComment
			? "1.8rem 1.5rem"
			: "1.3rem 1.5rem"};
	border-radius: 1rem;
	box-shadow: 0 0 0 1.4px
		${(props) =>
			props.isInstigatingComment
				? "var(--divider-yellow-1)"
				: props.isReceivingComment
				? "var(--divider-blue-1)"
				: "transparent"};

	&:hover #post-comment-more-dropdown-trigger {
		display: flex;
	}
`;
