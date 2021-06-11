import styled from "styled-components";

const PostStyle = styled.article`
	position: relative;
	display: grid;
	grid-template-columns: 55rem auto;
	grid-auto-rows: 50rem auto;
	gap: 1.5rem;
	width: 100rem;
	height: fit-content;
	margin: auto;
	padding: 2.2rem;
	background: var(--bg-1);
	border: 1px solid var(--separator-1);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};
	border-radius: 2rem;
`;

export default PostStyle;
