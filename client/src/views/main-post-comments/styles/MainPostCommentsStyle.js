import styled from "styled-components";

export const MainPostCommentsStyle = styled.div`
	position: sticky;
	top: 0;
	right: 0;
	z-index: 10;
	display: ${(props) => (props.isPostCommentsOpen ? "grid" : "none")};
	grid-auto-rows: min-content 1fr min-content;
	background-color: var(--bg-1);
	box-shadow: -1.6px 0 0 0 var(--input-default-separator-color);
`;
