import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, Icon, Avatar } from "../../shared";

import { logoutUser } from "../../../redux/user-login/userLoginAction";

import { useDropdown } from "../../../hooks";

import {
	UserFilled,
	Register,
	Login,
	Logout,
	EditFilled,
	NotificationFilled,
	StatsFilled,
} from "../../../assets";

import styled from "styled-components";

const HeaderAvatarStyle = styled.div`
	position: relative;
`;

const HeaderAvatar = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"header-avatar-dropdown-trigger",
		"header-avatar-dropdown-menu"
	);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const history = useHistory();

	const dropdownElementsArray = React.useMemo(() => {
		return user
			? [
					{
						icon: <UserFilled />,
						text: "Profile",
						onClickEventHandler: () => {
							history.push(`/user/${user.username}`);
						},
					},
					{
						icon: <EditFilled />,
						text: "Edit Profile",
						onClickEventHandler: () => {
							history.push("/edit/profile");
						},
					},
					{
						icon: <NotificationFilled />,
						text: "Notifications",
						onClickEventHandler: () => {
							history.push(`/notifications`);
						},
					},
					{
						icon: <StatsFilled />,
						text: "Stats",
						onClickEventHandler: () => {
							history.push(`/stats`);
						},
					},
					{
						icon: <Logout />,
						text: "Logout",
						onClickEventHandler: () => {
							dispatch(logoutUser());
						},
					},
			  ]
			: [
					{
						icon: <Login />,
						text: "Login",
						onClickEventHandler: () => {
							history.push("/login");
						},
					},
					{
						icon: <Register />,
						text: "Register",
						onClickEventHandler: () => {
							history.push("/register");
						},
					},
			  ];
	}, [user]);

	return (
		<HeaderAvatarStyle id="header-avatar-dropdown-trigger">
			{user ? (
				<Avatar avatarURL={user.avatar_url} avatarSize="3.7rem" />
			) : (
				<Icon iconRole="button" iconDimension="3.95rem">
					<UserFilled />
				</Icon>
			)}

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="header-avatar-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 10px)",
						menuRight: "0",
						menuWidth: "22rem",
					}}
				/>
			)}
		</HeaderAvatarStyle>
	);
};

export default HeaderAvatar;
