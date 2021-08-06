import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Loader } from "../../shared";

import { useUploadOrDeleteImage } from "../../../hooks";

import { updateProfileAvatar } from "../../../redux/edit-profile/editProfileAction";

import {
	EditProfileFormChangeAvatarStyle,
	EditProfileFormChangeAvatarButtonStyle,
} from "../styles/EditProfileFormChangeAvatarStyle";

const EditProfileFormChangeAvatar = () => {
	const dispatch = useDispatch();

	const { initialProfile, updatedAvatarURL, isProfileUpdating } = useSelector(
		(state) => state.editProfileReducer
	);

	const { uploadedImage, uploadImageLogic, isImageUploading } =
		useUploadOrDeleteImage();

	const handleFileInputOnChange = (e) => {
		uploadImageLogic(e);
	};

	React.useEffect(() => {
		if (uploadedImage === null) {
			return;
		}

		dispatch(updateProfileAvatar(uploadedImage));
	}, [dispatch, uploadedImage]);

	return (
		<EditProfileFormChangeAvatarStyle>
			<Avatar
				avatarURL={
					updatedAvatarURL ? updatedAvatarURL : initialProfile.avatar_url
				}
				avatarSize="12rem"
				isAvatarBubblePresent={true}
			/>

			<EditProfileFormChangeAvatarButtonStyle>
				<input type="file" onChange={handleFileInputOnChange} />

				<button>
					{isProfileUpdating || isImageUploading ? (
						<Loader
							isLoaderAbsolute={true}
							loaderSize="2.8rem"
							loaderBorderSize="0.4rem"
						/>
					) : (
						"Change"
					)}
				</button>
			</EditProfileFormChangeAvatarButtonStyle>
		</EditProfileFormChangeAvatarStyle>
	);
};

export default EditProfileFormChangeAvatar;
