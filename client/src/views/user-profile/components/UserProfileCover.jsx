import React from "react";
import { useParams } from "react-router-dom";

import {
	UserProfileCoverStyle,
	UserProfileCoverDotStyle,
} from "../styles/UserProfileCoverStyle";

const UserProfileCover = () => {
	const minShapeSize = 20;
	const maxShapeSize = 40;
	const numberOfShapes = 3;

	const { username } = useParams();

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

	const topLeftShapes = React.useMemo(() => {
		return shapeRandomizer(
			0,
			33,
			0,
			33,
			minShapeSize,
			maxShapeSize,
			numberOfShapes
		);
	}, [username]);

	const topRightShapes = React.useMemo(() => {
		return shapeRandomizer(
			66,
			99,
			0,
			33,
			minShapeSize,
			maxShapeSize,
			numberOfShapes
		);
	}, [username]);

	const bottomLeftShapes = React.useMemo(() => {
		return shapeRandomizer(
			0,
			33,
			66,
			99,
			minShapeSize,
			maxShapeSize,
			numberOfShapes
		);
	}, [username]);

	const bottomRightShapes = React.useMemo(() => {
		return shapeRandomizer(
			66,
			99,
			66,
			99,
			minShapeSize,
			maxShapeSize,
			numberOfShapes
		);
	}, [username]);

	const centerShapes = React.useMemo(() => {
		return shapeRandomizer(
			33,
			66,
			33,
			66,
			minShapeSize,
			maxShapeSize,
			numberOfShapes
		);
	}, [username]);

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
