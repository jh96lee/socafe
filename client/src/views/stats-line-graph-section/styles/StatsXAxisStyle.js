import styled from "styled-components";

export const StatsXAxisStyle = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	position: relative;
	display: flex;
	align-items: flex-end;
	height: 100%;
`;

export const XAxisStyle = styled.p`
	position: absolute;
	left: ${(props) => `${props.xAxisLeft}%`};
	transform: translateX(-50%);
	color: var(--graph-char-default);
	font-weight: 500;
	width: fit-content;
`;
