import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, IconElement, Avatar } from "../../shared";

import { logoutUser } from "../../../redux/login/loginAction";

import { useDropdown } from "../../../hooks";

import { HeaderAvatarStyle } from "../styles/HeaderAvatarStyle";

import {
	Account,
	User,
	Register,
	Login,
	Logout,
	Edit,
	Notification,
	Stats,
} from "../../../assets";

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
						content: {
							label: "Profile",
							icon: <Account />,
						},
						onClickLogic: () => {
							history.push(`/profile/${user.id}`);
						},
					},
					{
						content: {
							label: "Edit Profile",
							icon: <Edit />,
						},
						onClickLogic: () => {
							history.push(`/profile/edit/${user.id}`);
						},
					},
					{
						content: {
							label: "Notifications",
							icon: <Notification />,
						},
						onClickLogic: () => {
							history.push(`/notification/${user.id}`);
						},
					},
					{
						content: {
							label: "Stats",
							icon: <Stats />,
						},
						onClickLogic: () => {
							history.push(`/stats/${user.id}`);
						},
					},
					{
						content: {
							label: "Logout",
							icon: <Logout />,
						},
						onClickLogic: () => {
							dispatch(logoutUser());
						},
					},
			  ]
			: [
					{
						content: {
							label: "Login",
							icon: <Login />,
						},
						onClickLogic: () => {
							history.push("/login");
						},
					},
					{
						content: {
							label: "Register",
							icon: <Register />,
						},
						onClickLogic: () => {
							history.push("/register");
						},
					},
			  ];
	}, [user]);

	return (
		<HeaderAvatarStyle id="header-avatar-dropdown-trigger">
			{user ? (
				<Avatar avatarURL={user.avatar_url} avatarSize="4rem" />
			) : (
				<IconElement iconRole="button">
					<User />
				</IconElement>
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
