import * as React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { UserProfile } from "../../views/user-profile";
import { PrivateProfileSidebar } from "../../views/private-profile-sidebar";

const PrivateProfilePageStyle = styled.div`
	display: grid;
	grid-template-columns: 30rem auto;
`;

const PrivateProfilePage = () => {
	return (
		<Route>
			<PrivateProfilePageStyle>
				<PrivateProfileSidebar />

				<Route exact path="/profile/:userID">
					<UserProfile />
				</Route>

				<Route exact path="/profile/edit/22">
					<h1>EDIT</h1>
				</Route>

				<Route exact path="/profile/stats/22">
					<h1>STATS</h1>
				</Route>
			</PrivateProfilePageStyle>
		</Route>
	);
};

export default PrivateProfilePage;
