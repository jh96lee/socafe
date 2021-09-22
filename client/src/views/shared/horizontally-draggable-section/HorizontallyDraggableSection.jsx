import * as React from "react";

import { HorizontallyDraggableSectionStyle } from "./HorizontallyDraggableSectionStyle";

const HorizontallyDraggableSection = ({
	children,
	draggableSectionStyleObject,
}) => {
	const [isMouseDown, setIsMouseDown] = React.useState(false);
	const [startX, setStartX] = React.useState(null);
	const [scrollLeft, setScrollLeft] = React.useState(0);

	const sectionRef = React.useRef();

	const handleSectionOnMouseDown = (e) => {
		setIsMouseDown(true);

		setStartX(e.pageX - sectionRef.current.offsetLeft);

		setScrollLeft(sectionRef.current.scrollLeft);
	};

	const handleSectionOnMouseMove = (e) => {
		e.preventDefault();

		if (isMouseDown) {
			const currentMouseXPosition = e.pageX - sectionRef.current.offsetLeft;

			sectionRef.current.scrollLeft =
				scrollLeft + startX - currentMouseXPosition;
		}
	};

	const handleSectionOnMouseUp = () => {
		setIsMouseDown(false);
	};

	const handleSectionOnMouseLeave = () => {
		setIsMouseDown(false);
	};

	return (
		<HorizontallyDraggableSectionStyle
			isDragging={isMouseDown}
			onMouseDown={handleSectionOnMouseDown}
			onMouseMove={handleSectionOnMouseMove}
			onMouseUp={handleSectionOnMouseUp}
			onMouseLeave={handleSectionOnMouseLeave}
			ref={sectionRef}
			{...draggableSectionStyleObject}
		>
			{children}
		</HorizontallyDraggableSectionStyle>
	);
};

export default HorizontallyDraggableSection;
