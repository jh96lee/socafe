import styled from "styled-components";

export const HorizontallyDraggableSectionStyle = styled.div`
	position: relative;
	z-index: 5;
	display: flex;
	align-items: center;
	gap: ${(props) => props.draggableSectionGap || "1rem"};
	background-color: ${(props) =>
		props.draggableSectionBGColor || "transparent"};
	width: ${(props) => props.draggableSectionWidth || "100%"};
	height: ${(props) => props.draggableSectionHeight || "fit-content"};
	min-height: ${(props) => props.draggableSectionMinHeight};
	margin: ${(props) => props.draggableSectionMargin};
	padding: ${(props) => props.draggableSectionPadding || "1rem"};
	border-radius: 1rem;
	box-shadow: ${(props) => props.draggableSectionBoxShadow};
	overflow: scroll;
	cursor: ${(props) => props.isMouseDown && "grab"};

	&:empty {
		display: none;
	}
`;
