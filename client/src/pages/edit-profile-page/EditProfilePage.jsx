import * as React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import { EditProfileForm } from "../../views/edit-profile-form";
import { ChangePasswordForm } from "../../views/change-password-form";
import { UserFollowTopicsForm } from "../../views/user-follow-topics-form";
import { Icon } from "../../views/shared";

import { EditProfilePageStyle } from "./EditProfilePageStyle";

import { StarFilled, EditFilled, PasswordFilled } from "../../assets";

import styled from "styled-components";

const EditProfileTabsStyle = styled.div`
	position: sticky;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	height: fit-content;

	& > a {
		display: flex;
		align-items: center;
		padding: 0.7rem;
		gap: 1rem;
		color: var(--char-default);
		font-size: 1.4rem;
	}

	@media (max-width: 1300px) {
		flex-direction: row;

		& p {
			display: none;
		}
	}
`;

const EditProfilePage = () => {
	const iconElementStyleObject = {
		elementPadding: "1rem",
		elementBackgroundColor: "none",
		elementHoverBackgroundColor: "none",
		iconSize: "2rem",
	};

	return (
		<EditProfilePageStyle>
			<EditProfileTabsStyle>
				<NavLink exact to="/edit/profile">
					<Icon
						iconRole="presentation"
						iconType="presentation"
						// iconElementStyleObject={iconElementStyleObject}
					>
						<EditFilled />
					</Icon>

					<p>Edit Profile</p>
				</NavLink>

				<NavLink to="/edit/profile/password">
					<Icon
						iconRole="presentation"
						iconElementStyleObject={iconElementStyleObject}
					>
						<PasswordFilled />
					</Icon>

					<p>Change Password</p>
				</NavLink>

				<NavLink to="/edit/profile/topics">
					<Icon
						iconRole="presentation"
						iconElementStyleObject={iconElementStyleObject}
					>
						<StarFilled />
					</Icon>

					<p>Following Topics</p>
				</NavLink>
			</EditProfileTabsStyle>

			<Switch>
				<Route exact path="/edit/profile">
					<EditProfileForm />
				</Route>

				<Route exact path="/edit/profile/password">
					<ChangePasswordForm />
				</Route>

				<Route exact path="/edit/profile/topics">
					<UserFollowTopicsForm />
				</Route>
			</Switch>
		</EditProfilePageStyle>
	);
};

export default EditProfilePage;
