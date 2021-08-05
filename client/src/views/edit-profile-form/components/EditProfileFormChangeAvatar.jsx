import * as React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useUploadOrDeleteImage } from "../../../hooks";

const EditProfileFormChangeAvatarStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	margin: 4rem;

	& > img {
		width: 8.5rem;
		height: 8.5rem;
		border-radius: 50%;
	}
`;

const EditProfileFormChangeAvatarButtonStyle = styled.div`
	position: relative;
	width: 9rem;
	height: 4.5rem;

	& input {
		position: relative;
		z-index: 50;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	& > button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 30;
		font-size: 1.37rem;
		width: 100%;
		height: 100%;
		padding: 1rem;
		outline: none;
		border: none;
		border-radius: 2rem;
	}
`;

const EditProfileFormChangeAvatar = () => {
	const {
		profileToEdit,
		fullName,
		username,
		email,
		bioNodesArray,
		isProfileToEditLoaded,
		isProfileToEditUpdaing,
	} = useSelector((state) => state.editProfileReducer);

	const {
		uploadedImage,
		deletedImageID,
		imageErrorMessage,
		imageSuccessMessage,
		uploadImageLogic,
		deleteImageLogic,
		isImageUploading,
		isImageDeleting,
		setImageErrorMessage,
		setImageSuccessMessage,
	} = useUploadOrDeleteImage();

	const handleFileInputOnChange = (e) => {
		uploadImageLogic(e);
	};

	const updateAvatar = async () => {
		const { data } = await axios({
			method: "PUT",
			url: "http://localhost:8080/edit/profile/avatar",
			// data: {

			// }
		});
	};

	React.useEffect(() => {
		if (uploadedImage === null) {
			return;
		}

		console.log(uploadedImage);
	}, [uploadedImage]);

	return (
		<EditProfileFormChangeAvatarStyle>
			<img src={profileToEdit.avatar_url} alt="user profile avatar" />

			<EditProfileFormChangeAvatarButtonStyle>
				<input type="file" onChange={handleFileInputOnChange} />

				<button>Change </button>
			</EditProfileFormChangeAvatarButtonStyle>
		</EditProfileFormChangeAvatarStyle>
	);
};

export default EditProfileFormChangeAvatar;
