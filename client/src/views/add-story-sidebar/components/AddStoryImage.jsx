import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { IconElement, Loader } from "../../shared";

import { setUploadedStoryImage } from "../../../redux/add-story/story-image/storyImageAction";

import { useUploadOrDeleteImage } from "../../../hooks";

import { Image, CheckmarkCircleFilled } from "../../../assets";

const AddStoryImageStyle = styled.div`
	position: relative;
	width: 100%;
	height: fit-content;

	& > input {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	&:hover > *:last-child {
		background-color: var(--secondary-element-hover-bg-color);
	}
`;

const AddStoryContentStyle = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.2rem;
	padding: 1rem;
	border-radius: 1rem;

	& > svg {
		fill: var(--icon-success-color);
		width: 2.2rem;
		height: 2.2rem;
		cursor: pointer;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;

const AddStoryContentCTAStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	& > h5 {
		color: var(--text-1);
	}
`;

const AddStoryImage = () => {
	const dispatch = useDispatch();

	const { uploadedStoryImage } = useSelector(
		(state) => state.storyImageReducer
	);

	const {
		uploadedImage,
		uploadImageLogic,
		deleteImageLogic,
		isImageDeleting,
		isImageUploading,
	} = useUploadOrDeleteImage();

	const handleAddStoryImageOnClick = (e) => {
		if (uploadedStoryImage) {
			e.preventDefault();

			deleteImageLogic(uploadedStoryImage.id);

			dispatch(setUploadedStoryImage(null));
		}
	};

	React.useEffect(() => {
		if (!uploadedImage) {
			return;
		}

		dispatch(setUploadedStoryImage(uploadedImage));
	}, [dispatch, uploadedImage]);

	return (
		<AddStoryImageStyle>
			<input
				type="file"
				onChange={uploadImageLogic}
				onClick={handleAddStoryImageOnClick}
			/>

			<AddStoryContentStyle>
				<AddStoryContentCTAStyle>
					<IconElement iconElementStyleObject={{ elementWidth: "fit-content" }}>
						<Image />
					</IconElement>

					<h5>Add Image</h5>
				</AddStoryContentCTAStyle>

				{isImageDeleting || isImageUploading ? (
					<Loader
						loaderSize="2.5rem"
						loaderBorderSize="0.5rem"
						loaderStyleObject={{ loaderMargin: "0 0 0 auto" }}
					/>
				) : uploadedStoryImage ? (
					<CheckmarkCircleFilled />
				) : null}
			</AddStoryContentStyle>
		</AddStoryImageStyle>
	);
};

export default AddStoryImage;
