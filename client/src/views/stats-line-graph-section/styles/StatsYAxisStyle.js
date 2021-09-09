import styled from "styled-components";

export const StatsYAxisStyle = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

export const YAxisStyle = styled.p`
	position: absolute;
	bottom: ${(props) => `${props.yAxisBottom}%`};
	transform: translateY(50%);
	color: var(--graph-char-default);
	font-weight: 500;
`;
