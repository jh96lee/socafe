import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loader, Button } from "../../shared";
import EditProfileFormChangeAvatar from "./EditProfileFormChangeAvatar";
import EditProfileFormFieldset from "./EditProfileFormFieldset";

import {
	fetchInitialProfile,
	updateProfile,
	resetEditProfile,
} from "../../../redux/edit-profile/editProfileAction";

import { EditProfileFormStyle } from "../styles/EditProfileFormStyle";
import { EditProfileMessageStyle } from "../styles/EditProfileMessageStyle";

import { CheckmarkCircleFilled } from "../../../assets";

const EditProfileForm = () => {
	const dispatch = useDispatch();

	const {
		editedFullName,
		editedUsername,
		editedEmail,
		editedBioNodesArray,
		isProfileUpdating,
		isInitialProfileLoaded,
		editProfileSuccessMessage,
		editProfileErrorMessage,
	} = useSelector((state) => state.editProfileReducer);

	React.useEffect(() => {
		dispatch(fetchInitialProfile());

		return () => {
			dispatch(resetEditProfile());
		};
	}, [dispatch]);

	const handleEditProfileButtonOnClick = (e) => {
		e.preventDefault();

		dispatch(updateProfile());
	};

	return (
		<EditProfileFormStyle>
			{isInitialProfileLoaded ? (
				<React.Fragment>
					<EditProfileFormChangeAvatar />

					<EditProfileFormFieldset />
				</React.Fragment>
			) : (
				<Loader />
			)}

			<Button
				disabled={
					editProfileErrorMessage ||
					(!editedFullName &&
						!editedUsername &&
						!editedEmail &&
						editedBioNodesArray.length === 0)
				}
				success={editProfileSuccessMessage}
				error={editProfileErrorMessage}
				onClick={handleEditProfileButtonOnClick}
				buttonStyleObject={{
					buttonMargin: "2rem 0 1rem 0",
				}}
			>
				{isProfileUpdating ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
				) : editProfileErrorMessage ? (
					"Error"
				) : (
					"Submit"
				)}
			</Button>

			{editProfileSuccessMessage && (
				<EditProfileMessageStyle>
					<CheckmarkCircleFilled />

					<p>Successfully updated!</p>
				</EditProfileMessageStyle>
			)}
		</EditProfileFormStyle>
	);
};

export default EditProfileForm;
