import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { DropdownMenu, DropdownElement, IconElement } from "../../shared";

import { DropdownStyle } from "../../../styles";
import AvatarStyle from "../styles/AvatarStyle";

import { User, Register, Login, Logout } from "../../../assets";

const Avatar = () => {
	const { user } = useSelector((state) => state.userReducer);

	const history = useHistory();

	const userDropdownDataArray = user
		? [
				{
					event: () => {
						history.push("/profile/:userID");
					},
					label: "Profile",
					icon: <User />,
				},
		  ]
		: [
				{
					event: () => {
						history.push("/login");
					},
					label: "Login",
					icon: <Login />,
				},
				{
					event: () => {
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
					<img
						src="https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1619825703/Default_Profile_Image_jske9r.png"
						alt="Profile image"
					/>
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
				{userDropdownDataArray.map((data, idx) => {
					return (
						<DropdownElement
							key={`avatar-dropdown-element__${idx}`}
							dropdownElementEvent={data.event}
							dropdownElementLabel={data.label}
							dropdownElementIcon={data.icon}
						/>
					);
				})}
			</DropdownMenu>
		</DropdownStyle>
	);
};

export default Avatar;
