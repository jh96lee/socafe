import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import axios from "axios";

import {
	uploadImageAndSetArray,
	setUploadImageMessage,
} from "../../../redux/upload-image/uploadImageAction";

import { Image, Remove } from "../../../assets";

const AddContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h2 {
		color: var(--primary-text-color);
	}
`;

const MessageStyle = styled.p`
	color: ${(props) => (props.success ? "#8cff90" : "#fd8097")};
	padding: 1.2rem 1.5rem;
	background-color: ${(props) => (props.success ? "#4caf503b" : "#ff000033")};
	grid-column: 1 / 3;
	border-radius: 0.5rem;
	width: fit-content;
`;

const UploadedImagesPreviewStyle = styled.div`
	min-width: 100%;
	max-width: 100%;
	background-color: #6495ed;
	border-radius: 0.5rem;
	padding: 1.5rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 22rem;
	gap: 1rem;
`;

const UploadedImageStyle = styled.div`
	position: relative;
	width: 100%;

	& > div {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		background-color: #e82c6c;
		border-radius: 50%;
	}

	& > div svg {
		fill: #fff;
		width: 1.2rem;
		height: 1.2rem;
	}

	& img {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		object-fit: cover;
	}
`;

const UploadImageStyle = styled.div`
	position: relative;
	border-radius: 0.5rem;
	/* background-color: #212629; */
	background-color: #ff9800;

	& input {
		position: relative;
		z-index: 50;
		opacity: 0;
		width: 100%;
		height: 100%;
	}

	&:hover {
		cursor: pointer;
		background-color: #000;
	}
`;

const UploadImageCTAStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	transform: translate(-50%, -50%);
	z-index: 1;

	& svg {
		width: 3.5rem;
		height: 3.5rem;
		fill: #f5f5f5;
	}

	& p {
		font-size: 1.5rem;
		color: #f5f5f5;
	}
`;

const UploadImages = ({ contentType }) => {
	const [isImageUploaded, setIsImageUploaded] = React.useState(null);
	const [imagesArray, setImagesArray] = React.useState([]);
	const [message, setMessage] = React.useState(null);

	const dispatch = useDispatch();
	const { isImageUploading, isImageDeleting, uploadImageMessage } = useSelector(
		(state) => state.uploadImageReducer
	);

	const removeIconDivRef = React.useRef();

	const handleRemoveIconOnClick = async (e) => {
		const filteredImagesArray = imagesArray.filter((image) => {
			return image.id !== removeIconDivRef.current.id;
		});

		setImagesArray(filteredImagesArray);

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/delete/image",
			data: {
				id: removeIconDivRef.current.id,
			},
		});

		setMessage(data);
	};

	const handleFileInputOnChange = async (e) => {
		// REVIEW: files property returns an object with the keys being the indexes
		const filesObject = e.target.files;

		const filesArray = Object.values(filesObject);

		filesArray.forEach(async (file) => {
			if (imagesArray.length >= 5) {
				dispatch(
					setUploadImageMessage({
						error: "You can upload up to 5 images per post",
					})
				);
			} else {
				if (file.type === "image/png" || file.type === "image/jpeg") {
					dispatch(uploadImageAndSetArray("post", file));
				} else {
					dispatch(
						setUploadImageMessage({ error: "Unsupported image format" })
					);
				}
			}
		});
	};

	return (
		<AddContentStyle>
			<h2>Upload Photos</h2>

			{uploadImageMessage ? (
				<MessageStyle
					error={uploadImageMessage.error}
					success={uploadImageMessage.success}
				>
					{uploadImageMessage.error || uploadImageMessage.success}
				</MessageStyle>
			) : null}

			<UploadedImagesPreviewStyle>
				{imagesArray.map((image) => {
					return (
						<UploadedImageStyle key={image.id}>
							<div
								id={image.id}
								ref={removeIconDivRef}
								onClick={handleRemoveIconOnClick}
							>
								<Remove />
							</div>

							<img src={image.url} />
						</UploadedImageStyle>
					);
				})}

				<UploadImageStyle>
					<input type="file" onChange={handleFileInputOnChange} />

					<UploadImageCTAStyle>
						<Image />

						<p>Add Photo</p>
					</UploadImageCTAStyle>
				</UploadImageStyle>
			</UploadedImagesPreviewStyle>
		</AddContentStyle>
	);
};

export default UploadImages;
