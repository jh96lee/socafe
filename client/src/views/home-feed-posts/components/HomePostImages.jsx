import * as React from "react";

import {
	HomePostImagesStyle,
	HomePostImageStyle,
} from "../styles/HomePostImagesStyle";

const HomePostImages = ({ postImagesArray, onClick }) => {
	const numberOfImages = postImagesArray.length;
	const isFirstImageWide = postImagesArray[0].width > postImagesArray[0].height;

	const homePostImageGrid = (numberOfImages, isFirstImageWide) => {
		if (numberOfImages === 1) {
			return {
				column: "1fr",
				row: "1fr",
				gridColumn: "1 / 2",
				gridRow: "1 / 2",
			};
		} else if (numberOfImages === 2) {
			return {
				column: isFirstImageWide ? "1fr" : "repeat(2, 1fr)",
				row: isFirstImageWide ? "repeat(2, 1fr)" : "1fr",
				gridColumn: isFirstImageWide ? "1 / 3" : "1 / 2",
				gridRow: isFirstImageWide ? "1 / 2" : "1 / 3",
			};
		} else if (numberOfImages === 3) {
			return {
				column: "repeat(2, 1fr)",
				row: "repeat(2, 1fr)",
				gridColumn: isFirstImageWide ? "1 / 3" : "1 / 2",
				gridRow: isFirstImageWide ? "1 / 2" : "1 / 3",
			};
		}
	};

	return (
		<HomePostImagesStyle
			numberOfImages={numberOfImages}
			isFirstImageWide={isFirstImageWide}
			onClick={onClick}
			{...homePostImageGrid(numberOfImages, isFirstImageWide)}
		>
			{postImagesArray.map((image, idx) => {
				return (
					<HomePostImageStyle
						key={`home-post-image__${idx}`}
						homePostImageURL={image.url}
					/>
				);
			})}
		</HomePostImagesStyle>
	);
};

export default HomePostImages;
