import styled from "styled-components";

const PostStyle = styled.article`
	position: relative;
	display: grid;
	grid-template-columns: 63% auto;
	grid-auto-rows: 55rem;
	gap: 1rem;
	width: 95rem;
	height: fit-content;
	margin: 6rem auto 3rem auto;
	padding: 2rem;
	background: ${(props) => (props.theme.isDarkMode ? "#121212" : "#fdfdfd")};
	box-shadow: 0 0 2px 1.8px var(--primary-separator-color);
	border-radius: 1rem;
`;

export default PostStyle;
