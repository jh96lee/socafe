import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, IconElement, Avatar } from "../../shared";

import { logoutUser } from "../../../redux/login/loginAction";

import { useDropdown } from "../../../hooks";

import { DropdownRelativeStyle } from "../../../styles";

import {
	Account,
	UserFilled,
	Register,
	Login,
	Logout,
	Edit,
	NotificationOutline,
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
						onClickEventHandler: () => {
							history.push(`/profile/${user.id}`);
						},
					},
					{
						content: {
							label: "Edit Profile",
							icon: <Edit />,
						},
						onClickEventHandler: () => {
							history.push(`/profile/edit/${user.id}`);
						},
					},
					{
						content: {
							label: "Notifications",
							icon: <NotificationOutline />,
						},
						onClickEventHandler: () => {
							history.push(`/notification/${user.id}`);
						},
					},
					{
						content: {
							label: "Stats",
							icon: <Stats />,
						},
						onClickEventHandler: () => {
							history.push(`/stats/${user.id}`);
						},
					},
					{
						content: {
							label: "Logout",
							icon: <Logout />,
						},
						onClickEventHandler: () => {
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
						onClickEventHandler: () => {
							history.push("/login");
						},
					},
					{
						content: {
							label: "Register",
							icon: <Register />,
						},
						onClickEventHandler: () => {
							history.push("/register");
						},
					},
			  ];
	}, [user]);

	return (
		<DropdownRelativeStyle id="header-avatar-dropdown-trigger">
			{user ? (
				<Avatar avatarURL={user.avatar_url} avatarSize="4rem" />
			) : (
				<IconElement iconRole="button">
					<UserFilled />
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
		</DropdownRelativeStyle>
	);
};

export default HeaderAvatar;
