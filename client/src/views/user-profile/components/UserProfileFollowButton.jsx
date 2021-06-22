import * as React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
	incrementTotalFollowers,
	decrementTotalFollowers,
	incrementTotalFollowing,
	decrementTotalFollowing,
} from "../../../redux/user-profile/userProfileAction";

import { fetchToken } from "../../../utils/cookie";

import { UserProfileFollowButtonStyle } from "../styles/UserProfileFollowButtonStyle";

import { Follow, Following } from "../../../assets";

const UserProfileFollowButton = ({
	leaderID,
	// TODO: use visitorID to either disable or enable the follow button
	visitorID,
	isUserFollowing,
	profileOwnerVisited,
}) => {
	// TODO: fetch data and set that to be the initial value
	const [isFollowing, setIsFollowing] = React.useState(isUserFollowing);

	const dispatch = useDispatch();

	const handleFollowButtonOnClick = () => {
		setIsFollowing((prevState) => !prevState);
	};

	const token = fetchToken();

	const follow = React.useCallback(async () => {
		const { data } = await axios({
			method: "POST",
			url: `http://localhost:8080/follow/${leaderID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { success } = data;

		if (success) {
			dispatch(incrementTotalFollowers());

			if (profileOwnerVisited) {
				dispatch(incrementTotalFollowing());
			}

			setIsFollowing(true);
		}
	}, []);

	const unfollow = React.useCallback(async () => {
		const { data } = await axios({
			method: "DELETE",
			url: `http://localhost:8080/unfollow/${leaderID}`,
			data: {
				leaderID,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { success } = data;

		if (success) {
			dispatch(decrementTotalFollowers());

			if (profileOwnerVisited) {
				dispatch(decrementTotalFollowing());
			}

			setIsFollowing(false);
		}
	}, []);

	const isAfterInitialMount = React.useRef();

	React.useEffect(() => {
		if (isAfterInitialMount.current) {
			if (isFollowing) {
				follow();
			} else {
				unfollow();
			}
		}

		isAfterInitialMount.current = true;
	}, [isFollowing]);

	return (
		<UserProfileFollowButtonStyle
			isFollowing={isFollowing}
			onClick={handleFollowButtonOnClick}
		>
			{isFollowing ? (
				<React.Fragment>
					<Following /> <p>Following</p>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Follow /> <p>Follow</p>
				</React.Fragment>
			)}
		</UserProfileFollowButtonStyle>
	);
};

export default UserProfileFollowButton;
