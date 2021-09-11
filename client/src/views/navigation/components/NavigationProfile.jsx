import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavigationProfileStyle } from "../styles/NavigationProfileStyle";

const NavigationProfile = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<NavigationProfileStyle>
			<img src={user.avatar_url} alt="profile" />

			<Link to={`/user/${user.username}`}>{user.full_name}</Link>
		</NavigationProfileStyle>
	);
};

export default NavigationProfile;
