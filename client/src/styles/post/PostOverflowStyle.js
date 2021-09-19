import styled from "styled-components";

const PostOverflowStyle = styled.div`
	display: flex;
	flex-direction: column;
	overflow: scroll;
	padding: 2rem;

	& > *:first-child {
		margin-bottom: 1rem;
	}

	& > *:last-child {
		margin-top: 1rem;
	}
`;

export default PostOverflowStyle;
