import * as React from "react";

import PostImagesDirectionIconElementStyle from "../styles/PostImagesDirectionIconElementStyle";

const PostImagesDirectionIconElement = ({
	postImagesArray,
	direction,
	icon,
	currentImageIndex,
	setCurrentImageIndex,
}) => {
	const handleOnClick = (e) => {
		const direction = e.currentTarget.dataset.direction;

		if (direction === "right") {
			setCurrentImageIndex((prevState) => prevState + 1);
		} else if (direction === "left") {
			setCurrentImageIndex((prevState) => prevState - 1);
		}
	};

	return (
		<React.Fragment>
			{postImagesArray.length === 0 ? null : direction === "left" &&
			  currentImageIndex === 0 ? null : direction === "right" &&
			  currentImageIndex === postImagesArray.length - 1 ? null : (
				<PostImagesDirectionIconElementStyle
					data-direction={direction}
					onClick={handleOnClick}
				>
					{icon}
				</PostImagesDirectionIconElementStyle>
			)}
		</React.Fragment>
	);
};

export default PostImagesDirectionIconElement;
