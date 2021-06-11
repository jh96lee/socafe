import * as React from "react";
import styled from "styled-components";

const HomePostImagesStyle = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.column};
	grid-template-rows: ${(props) => props.row};
	gap: 0.8rem;

	& img {
		object-fit: cover;
		border-radius: 1rem;
		cursor: pointer;
	}

	& > *:nth-child(1) {
		grid-column: ${(props) =>
			props.numberOfImages < 3
				? ""
				: props.isFirstImageWide
				? "1 / 3"
				: "1 / 2"};
		grid-row: ${(props) =>
			props.numberOfImages < 3
				? ""
				: props.isFirstImageWide
				? "1 / 2"
				: "1 / 3"};
		width: 100%;
		height: 100%;
	}

	& > *:nth-child(2) {
		width: 100%;
		height: 100%;
	}

	& > *:nth-child(3) {
		width: 100%;
		height: 100%;
	}
`;

const HomePostImages = ({ postImagesArray, onClick }) => {
	const isFirstImageWide = postImagesArray[0].width > postImagesArray[0].height;
	const numberOfImages = postImagesArray.length;

	const column =
		numberOfImages === 1 || (numberOfImages === 2 && isFirstImageWide)
			? "repeat(1, 1fr)"
			: "repeat(2, 1fr)";

	const row =
		numberOfImages === 1 || (numberOfImages === 2 && !isFirstImageWide)
			? "36rem"
			: "repeat(2, 20rem)";

	return (
		<HomePostImagesStyle
			column={column}
			row={row}
			isFirstImageWide={isFirstImageWide}
			numberOfImages={numberOfImages}
			onClick={onClick}
		>
			{postImagesArray.map((image, idx) => {
				return (
					<img
						key={`home-post-image__${idx}`}
						src={image.image_url}
						alt={`images for post`}
					/>
				);
			})}
		</HomePostImagesStyle>
	);
};

export default HomePostImages;
