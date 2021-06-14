import * as React from "react";
import styled from "styled-components";

import { ProfileUser, ProfilePosts } from "../../views/profile";

const ProfilePageStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 4rem 0;
`;

const ProfilePage = () => {
	return (
		<ProfilePageStyle>
			<ProfileUser />

			<ProfilePosts />
		</ProfilePageStyle>
	);
};

export default ProfilePage;
