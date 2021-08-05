import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loader } from "../../shared";
import EditProfileFormChangeAvatar from "./EditProfileFormChangeAvatar";

import { fetchUserProfileToEdit } from "../../../redux/edit-profile/editProfileAction";

const EditProfileFormStyle = styled.form``;

const EditProfileForm = () => {
	const dispatch = useDispatch();

	const {
		profileToEdit,
		fullName,
		username,
		email,
		bioNodesArray,
		isProfileToEditLoaded,
		isProfileToEditUpdaing,
	} = useSelector((state) => state.editProfileReducer);

	React.useEffect(() => {
		dispatch(fetchUserProfileToEdit());
	}, []);

	return (
		<EditProfileFormStyle>
			{isProfileToEditLoaded ? <EditProfileFormChangeAvatar /> : <Loader />}
		</EditProfileFormStyle>
	);
};

export default EditProfileForm;
