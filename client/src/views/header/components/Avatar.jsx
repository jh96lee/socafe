import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { DropdownMenu, IconElement } from "../../shared";

import { DropdownStyle } from "../../../styles";
import AvatarStyle from "../styles/AvatarStyle";

import { ReactComponent as User } from "../../../assets/user.svg";

const Avatar = () => {
	const { user } = useSelector((state) => state.userReducer);

	const userDropdownDataArray = user
		? [
				<Link to="/profile/:userID">Profile</Link>,
				<Link to="/settings/:userID">Settings</Link>,
				<p>Logout</p>,
		  ]
		: [
				<Link to="/user/login">Login</Link>,
				<Link to="/user/register">Register</Link>,
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
					iconRole="presentation"
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
				menuPosition="right"
			/>
		</DropdownStyle>
	);
};

export default Avatar;
