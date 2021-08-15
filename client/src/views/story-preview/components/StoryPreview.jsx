import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import StoryText from "./StoryText";

const StoryPreviewStyle = styled.div`
	position: relative;
	display: block;
	margin: 3.5rem auto;
	width: 50rem;
	height: 65rem;
	border: 2px solid var(--separator-2);
	border-radius: 1rem;
	overflow: hidden;
	margin: auto;
	background: ${(props) => props.storyBackground};

	/* & #draggable {
		position: absolute;
		color: var(--text-1);
		font-size: 2rem;
		width: fit-content;
		height: fit-content;
		padding: 1rem;
		border-radius: 1rem;
		cursor: move;
		border: 2px solid #fff;
	} */

	& img {
		position: absolute;
		width: fit-content;
		height: fit-content;
		cursor: move;
	}
`;

const StoryPreview = () => {
	const { selectedStoryBackground } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	const { storyTextsArray } = useSelector((state) => state.storyTextsReducer);

	const containerRef = React.useRef();
	const draggableElementRef = React.useRef();

	let draggableClickedX;
	let draggableClickedY;

	const mouseMoveEventHandler = (e) => {
		draggableElementRef.current.style.left = `${
			e.clientX - containerRef.current.offsetLeft - draggableClickedX
		}px`;

		draggableElementRef.current.style.top = `${
			e.clientY - containerRef.current.offsetTop - draggableClickedY
		}px`;
	};

	const handleDraggableOnMouseDown = (e) => {
		// REVIEW: fixed
		draggableElementRef.current =
			e.target.id === "contenteditable" ? e.target.parentNode : e.target;

		// REVIEW: fixed
		draggableElementRef.current.style.boxShadow = "0 0 0 1.6px purple";

		const { x, y } = draggableElementRef.current.getBoundingClientRect();

		draggableClickedX = e.clientX - x;
		draggableClickedY = e.clientY - y;

		containerRef.current.addEventListener("mousemove", mouseMoveEventHandler);
	};

	const handleContainerOnMouseUp = (e) => {
		draggableElementRef.current.style.boxShadow = "none";

		containerRef.current.removeEventListener(
			"mousemove",
			mouseMoveEventHandler
		);
	};

	React.useEffect(() => {
		const { width: containerWidth, height: containerHeight } =
			containerRef.current.getBoundingClientRect();

		const { width: draggableWidth, height: draggableHeight } =
			draggableElementRef.current.getBoundingClientRect();

		draggableElementRef.current.style.top = `${
			((containerHeight / 2 - draggableHeight / 2) / containerHeight) * 100
		}%`;

		draggableElementRef.current.style.left = `${
			((containerWidth / 2 - draggableWidth / 2) / containerWidth) * 100
		}%`;
	}, [storyTextsArray]);

	return (
		<StoryPreviewStyle
			ref={containerRef}
			onMouseUp={handleContainerOnMouseUp}
			storyBackground={selectedStoryBackground.background}
		>
			{storyTextsArray.map((number) => {
				return (
					<StoryText
						key={`story-text__${number}`}
						number={number}
						draggableElementRef={draggableElementRef}
						handleDraggableOnMouseDown={handleDraggableOnMouseDown}
					/>
				);
			})}
		</StoryPreviewStyle>
	);
};

export default StoryPreview;
