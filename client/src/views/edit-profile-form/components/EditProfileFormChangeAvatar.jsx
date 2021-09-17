import * as React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Loader } from "../../shared";

import { useUploadOrDeleteImage } from "../../../hooks";

import { setUser } from "../../../redux/user/userAction";

import { fetchToken, setCookie } from "../../../utils";

import {
	EditProfileFormChangeAvatarStyle,
	EditProfileFormChangeAvatarButtonStyle,
} from "../styles/EditProfileFormChangeAvatarStyle";

const EditProfileFormChangeAvatar = () => {
	const [isAvatarUpdating, setIsAvatarUpdating] = React.useState(false);

	const { user } = useSelector((state) => state.userReducer);

	const dispatch = useDispatch();

	const updateAvatar = async (updatedAvatar) => {
		setIsAvatarUpdating(true);

		const token = fetchToken();

		const { data } = await axios({
			method: "PUT",
			url: "http://localhost:8080/profile/edit/avatar",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				updatedAvatar,
			},
		});

		const { token: updatedToken, success } = data;

		if (success) {
			setCookie("token", updatedToken);

			dispatch(setUser());
		}

		setIsAvatarUpdating(false);
	};

	const { uploadedImage, uploadImageLogic, isImageUploading } =
		useUploadOrDeleteImage();

	const handleFileInputOnChange = (e) => {
		uploadImageLogic(e);
	};

	React.useEffect(() => {
		if (uploadedImage === null) {
			return;
		}

		updateAvatar(uploadedImage);
	}, [dispatch, uploadedImage]);

	return (
		<EditProfileFormChangeAvatarStyle>
			<Avatar
				avatarURL={user.avatar_url}
				avatarSize="12rem"
				isAvatarBubblePresent={true}
			/>

			{/* FIX: UI */}
			<EditProfileFormChangeAvatarButtonStyle>
				<input type="file" onChange={handleFileInputOnChange} />

				<button>
					{isAvatarUpdating || isImageUploading ? (
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
