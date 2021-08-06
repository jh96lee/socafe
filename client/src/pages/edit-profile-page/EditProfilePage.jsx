import * as React from "react";

import { EditProfileForm } from "../../views/edit-profile-form";

import { EditProfilePageStyle } from "./EditProfilePageStyle";

const EditProfilePage = () => {
	return (
		<EditProfilePageStyle>
			<EditProfileForm />
		</EditProfilePageStyle>
	);
};

export default EditProfilePage;
