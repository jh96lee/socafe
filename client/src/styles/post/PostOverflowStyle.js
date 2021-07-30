import styled from "styled-components";

const PostOverflowStyle = styled.div`
	display: flex;
	flex-direction: column;
	overflow: scroll;

	& > *:first-child {
		margin-bottom: 0.7rem;
	}

	/* REVIEW: specific */
	padding: 2rem;
	/* REVIEW: specific */

	/* REVIEW: specific */
	& > *:last-child {
		margin-top: 1rem;
	}
	/* REVIEW: specific */

	/* REVIEW: specific */
	/* & > *:empty {
		display: none;
	} */
	/* REVIEW: specific */
`;

export default PostOverflowStyle;
