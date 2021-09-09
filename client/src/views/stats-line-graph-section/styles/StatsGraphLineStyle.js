import styled from "styled-components";

export const StatsGraphLineStyle = styled.div`
	position: absolute;
	bottom: ${(props) => `${props.lineBottom}%`};
	background-color: var(--graph-border-default);
	width: 100%;
	height: 1px;
`;
