import * as React from "react";
import styled from "styled-components";

import { EditProfileForm } from "../../views/edit-profile-form";

const EditProfilePageStyle = styled.div``;

const EditProfilePage = () => {
	return (
		<EditProfilePageStyle>
			<EditProfileForm />
		</EditProfilePageStyle>
	);
};

export default EditProfilePage;
