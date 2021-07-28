import React from "react";
import styled from "styled-components";

const UserProfileCoverStyle = styled.div`
	position: relative;
	z-index: 5;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#b0c4de0f" : "#fffaf0"};
	height: 100%;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;

	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
`;

const UserProfileCoverDotStyle = styled.div`
	position: absolute;
	top: ${(props) => `${props.shapeTop}%`};
	left: ${(props) => `${props.shapeLeft}%`};
	z-index: 10;
	width: ${(props) => `${props.shapeSize}px`};
	height: ${(props) => `${props.shapeSize}px`};
	border-radius: 50%;
	background-color: ${(props) => props.shapeBackgroundColor};
	box-shadow: 0 0 0px 1px ${(props) => props.shapeBackgroundColor};
`;

const UserProfileCover = () => {
	const minShapeSize = 20;
	const maxShapeSize = 40;
	const numberOfShapes = 3;

	const shapeRandomizer = (
		minX,
		maxX,
		minY,
		maxY,
		minSize,
		maxSize,
		length
	) => {
		const shapesArray = [];

		const colorsArray = [
			"var(--beige-1)",
			"var(--blue-1)",
			"var(--blue-2)",
			"var(--brown-1)",
			"var(--red-1)",
		];

		for (let i = 0; i < length; i++) {
			const colorIndex = Math.floor(Math.random() * 5);

			const shape = {
				shapeLeft: Math.floor(Math.random() * (maxX - minX) + minX),
				shapeTop: Math.floor(Math.random() * (maxY - minY) + minY),
				shapeSize: Math.floor(Math.random() * (maxSize - minSize) + minSize),
				shapeBackgroundColor: colorsArray[colorIndex],
			};

			shapesArray.push(shape);
		}

		return shapesArray;
	};

	const topLeftShapes = shapeRandomizer(
		0,
		33,
		0,
		33,
		minShapeSize,
		maxShapeSize,
		numberOfShapes
	);
	const topRightShapes = shapeRandomizer(
		66,
		99,
		0,
		33,
		minShapeSize,
		maxShapeSize,
		numberOfShapes
	);
	const bottomLeftShapes = shapeRandomizer(
		0,
		33,
		66,
		99,
		minShapeSize,
		maxShapeSize,
		numberOfShapes
	);
	const bottomRightShapes = shapeRandomizer(
		66,
		99,
		66,
		99,
		minShapeSize,
		maxShapeSize,
		numberOfShapes
	);
	const centerShapes = shapeRandomizer(
		33,
		66,
		33,
		66,
		minShapeSize,
		maxShapeSize,
		numberOfShapes
	);

	return (
		<UserProfileCoverStyle>
			{topLeftShapes.map((shape, idx) => {
				return (
					<UserProfileCoverDotStyle
						key={`top-left-shapes__${idx}`}
						shapeLeft={shape.shapeLeft}
						shapeTop={shape.shapeTop}
						shapeBackgroundColor={shape.shapeBackgroundColor}
						shapeSize={shape.shapeSize}
					/>
				);
			})}

			{topRightShapes.map((shape, idx) => {
				return (
					<UserProfileCoverDotStyle
						key={`top-left-shapes__${idx}`}
						shapeLeft={shape.shapeLeft}
						shapeTop={shape.shapeTop}
						shapeBackgroundColor={shape.shapeBackgroundColor}
						shapeSize={shape.shapeSize}
					/>
				);
			})}

			{bottomLeftShapes.map((shape, idx) => {
				return (
					<UserProfileCoverDotStyle
						key={`top-left-shapes__${idx}`}
						shapeLeft={shape.shapeLeft}
						shapeTop={shape.shapeTop}
						shapeBackgroundColor={shape.shapeBackgroundColor}
						shapeSize={shape.shapeSize}
					/>
				);
			})}

			{bottomRightShapes.map((shape, idx) => {
				return (
					<UserProfileCoverDotStyle
						key={`top-left-shapes__${idx}`}
						shapeLeft={shape.shapeLeft}
						shapeTop={shape.shapeTop}
						shapeBackgroundColor={shape.shapeBackgroundColor}
						shapeSize={shape.shapeSize}
					/>
				);
			})}

			{centerShapes.map((shape, idx) => {
				return (
					<UserProfileCoverDotStyle
						key={`top-left-shapes__${idx}`}
						shapeLeft={shape.shapeLeft}
						shapeTop={shape.shapeTop}
						shapeBackgroundColor={shape.shapeBackgroundColor}
						shapeSize={shape.shapeSize}
					/>
				);
			})}
		</UserProfileCoverStyle>
	);
};

export default UserProfileCover;
