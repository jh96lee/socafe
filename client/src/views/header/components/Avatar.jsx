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
				<DropdownElement
					dropdownElementEvent={() => {
						history.push(`/profile/${user.id}`);
					}}
					dropdownElementLabel="Profile"
					dropdownElementIcon={<User />}
				/>,
		  ]
		: [
				<DropdownElement
					dropdownElementEvent={() => {
						history.push("/login");
					}}
					dropdownElementLabel="Login"
					dropdownElementIcon={<Login />}
				/>,
				,
				<DropdownElement
					dropdownElementEvent={() => {
						history.push("/register");
					}}
					dropdownElementLabel="Register"
					dropdownElementIcon={<Register />}
				/>,
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
			/>
		</DropdownStyle>
	);
};

export default Avatar;
