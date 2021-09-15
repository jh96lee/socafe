import * as React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import { EditProfileForm } from "../../views/edit-profile-form";
import { ChangePasswordForm } from "../../views/change-password-form";
import { UserFollowTopicsForm } from "../../views/user-follow-topics-form";
import { IconElement } from "../../views/shared";

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

	& > a > svg {
		fill: var(--char-default);
		width: 2.2rem;
		height: 2.2rem;
	}

	& > .active div {
		background-color: var(--icon-active-link-bg-color);
	}

	& > .active,
	& > .active svg {
		font-weight: 600;
		fill: var(--icon-active-link-color);
		color: var(--icon-active-link-color);
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
					<IconElement
						iconRole="presentation"
						iconElementStyleObject={iconElementStyleObject}
					>
						<EditFilled />
					</IconElement>

					<p>Edit Profile</p>
				</NavLink>

				<NavLink to="/edit/profile/password">
					<IconElement
						iconRole="presentation"
						iconElementStyleObject={iconElementStyleObject}
					>
						<PasswordFilled />
					</IconElement>

					<p>Change Password</p>
				</NavLink>

				<NavLink to="/edit/profile/topics">
					<IconElement
						iconRole="presentation"
						iconElementStyleObject={iconElementStyleObject}
					>
						<StarFilled />
					</IconElement>

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
