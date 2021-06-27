import * as React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { UserProfile } from "../../views/user-profile";
import { PrivateProfileSidebar } from "../../views/private-profile-sidebar";

const PrivateProfilePageStyle = styled.div`
	display: grid;
	grid-template-columns: 28rem auto;
`;

const PrivateProfilePage = () => {
	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	return (
		<Route>
			<PrivateProfilePageStyle>
				<PrivateProfileSidebar userID={userID} />

				<Route exact path="/profile/:userID">
					<UserProfile />
				</Route>

				<Route exact path="/profile/edit/:userID">
					<h1>EDIT</h1>
				</Route>

				<Route exact path="/profile/stats/:userID">
					<h1>STATS</h1>
				</Route>
			</PrivateProfilePageStyle>
		</Route>
	);
};

export default PrivateProfilePage;
