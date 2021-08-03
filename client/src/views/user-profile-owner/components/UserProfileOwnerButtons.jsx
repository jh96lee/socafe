import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	followUser,
	unfollowUser,
	setIsVisitorFollowingProfileOwner,
} from "../../../redux/user-profile/user-profile-owner/userProfileOwnerAction";

import {
	UserProfileOwnerButtonsStyle,
	UserProfileOwnerButtonStyle,
} from "../styles/UserProfileOwnerButtonsStyle";

import { Follow, Following } from "../../../assets";

const UserProfileButtons = () => {
	const dispatch = useDispatch();

	const { profileOwner, isVisitorFollowingProfileOwner } = useSelector(
		(state) => state.userProfileOwnerReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const profileOwnerID = profileOwner.id;
	const visitorID = user ? user.id : 0;

	const afterInitialMount = React.useRef();

	const handleFollowButtonOnClick = async () => {
		dispatch(setIsVisitorFollowingProfileOwner());
	};

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isVisitorFollowingProfileOwner) {
				dispatch(followUser(profileOwnerID, visitorID));
			} else {
				dispatch(unfollowUser(profileOwnerID, visitorID));
			}
		}

		afterInitialMount.current = true;
	}, [isVisitorFollowingProfileOwner]);

	return (
		<UserProfileOwnerButtonsStyle>
			<UserProfileOwnerButtonStyle
				isFollowing={isVisitorFollowingProfileOwner}
				onClick={handleFollowButtonOnClick}
			>
				{isVisitorFollowingProfileOwner ? "Following" : "Follow"}

				{isVisitorFollowingProfileOwner ? <Following /> : <Follow />}
			</UserProfileOwnerButtonStyle>
		</UserProfileOwnerButtonsStyle>
	);
};

export default UserProfileButtons;
