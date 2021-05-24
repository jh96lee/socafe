import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, DropdownElement, IconElement } from "../../shared";

import { logoutUser } from "../../../redux/login/loginAction";

import { DropdownStyle } from "../../../styles";
import AvatarStyle from "../styles/AvatarStyle";

import { User, Register, Login, Logout } from "../../../assets";

const Avatar = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const history = useHistory();

	const userDropdownDataArray = user
		? [
				{
					onClickEvent: () => {
						history.push("/profile/:userID");
					},
					label: "Profile",
					icon: <User />,
				},
				{
					onClickEvent: () => {
						dispatch(logoutUser());
					},
					label: "Logout",
					icon: <Logout />,
				},
		  ]
		: [
				{
					onClickEvent: () => {
						history.push("/login");
					},
					label: "Login",
					icon: <Login />,
				},
				{
					onClickEvent: () => {
						history.push("/register");
					},
					label: "Register",
					icon: <Register />,
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
				dataArray={userDropdownDataArray}
				customDropdownId="user-dropdown"
				menuTop="140%"
				menuRight="0"
			>
				{userDropdownDataArray.map((element, idx) => {
					return (
						<DropdownElement
							key={`avatar-dropdown-element__${idx}`}
							dropdownElementContent={{
								icon: element.icon,
								label: element.label,
							}}
							dropdownElementComponentType="link"
							dropdownElementOnClickEventHandler={element.onClickEvent}
						/>
					);
				})}
			</DropdownMenu>
		</DropdownStyle>
	);
};

export default Avatar;
