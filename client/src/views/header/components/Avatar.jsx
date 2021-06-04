import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, IconElement } from "../../shared";

import { logoutUser } from "../../../redux/login/loginAction";

import { useDropdown } from "../../../hooks/useDropdown";

import { AvatarStyle, AvatarimageStyle } from "../styles/AvatarStyle";

import { User, Register, Login, Logout } from "../../../assets";

const Avatar = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"avatar-dropdown-trigger",
		"avatar-dropdown-menu"
	);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const history = useHistory();

	const userDropdownElementArray = user
		? [
				{
					content: {
						label: "Profile",
						icon: <User />,
					},
					type: "link",
					onClickEventHandler: () => {
						history.push("/profile/:userID");
					},
				},
				{
					content: {
						label: "Logout",
						icon: <Logout />,
					},
					type: "link",
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
					type: "link",
					onClickEventHandler: () => {
						history.push("/login");
					},
				},
				{
					content: {
						label: "Register",
						icon: <Register />,
					},
					type: "link",
					onClickEventHandler: () => {
						history.push("/register");
					},
				},
		  ];

	return (
		<AvatarStyle id="avatar-dropdown-trigger">
			{user ? (
				<AvatarimageStyle src={user.avatar_url} alt="Profile image" />
			) : (
				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						elementHoverBackgroundColor:
							"var(--secondary-hover-clickable-background-color)",
					}}
				>
					<User />
				</IconElement>
			)}

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="avatar-dropdown-menu"
					dropdownElementKey="avatar-dropdown-element"
					dropdownElementArray={userDropdownElementArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 10px)",
						menuRight: "0",
					}}
				/>
			)}
		</AvatarStyle>
	);
};

export default Avatar;
