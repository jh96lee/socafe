import styled from "styled-components";

const PostStyle = styled.article`
	position: relative;
	display: grid;
	grid-template-columns: 53rem auto;
	grid-auto-rows: 50rem auto;
	gap: 1.2rem;
	width: 100rem;
	height: fit-content;
	margin: 4rem auto;
	padding: 1.5rem;
	background: var(--bg-1);
	box-shadow: 0 0 2px 1.8px var(--separator-1);
	border-radius: 1rem;
`;

export default PostStyle;
