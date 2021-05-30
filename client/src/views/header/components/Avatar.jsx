import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, IconElement } from "../../shared";

import { logoutUser } from "../../../redux/login/loginAction";

import { DropdownStyle } from "../../../styles";
import AvatarStyle from "../styles/AvatarStyle";

import { User, Register, Login, Logout } from "../../../assets";

const Avatar = () => {
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
		<DropdownStyle id="user-dropdown-trigger">
			{user ? (
				<AvatarStyle>
					<img src={user.avatar_url} alt="Profile image" />
				</AvatarStyle>
			) : (
				<IconElement
					iconUsage="button"
					iconSize="2.3rem"
					iconBreakingPoint="600px"
					iconResponsiveSize="2rem"
				>
					<User />
				</IconElement>
			)}

			<DropdownMenu
				triggerID="user-dropdown-trigger"
				dropdownElementArray={userDropdownElementArray}
				dropdownElementKey="user-dropdown"
				menuTop="calc(100% + 10px)"
				menuRight="0"
			/>
		</DropdownStyle>
	);
};

export default Avatar;
