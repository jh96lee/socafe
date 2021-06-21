import * as React from "react";
import axios from "axios";

import { Button } from "../../shared";

import { fetchToken } from "../../../utils/cookie";

const UserProfileFollowButton = ({
	leaderID,
	// TODO: use visitorID to either disable or enable the follow button
	visitorID,
	isUserFollowing,
	setTotalFollowers,
}) => {
	// TODO: fetch data and set that to be the initial value
	const [isFollowing, setIsFollowing] = React.useState(isUserFollowing);

	const isAfterInitialMount = React.useRef();

	const token = fetchToken();

	const handleFollowButtonOnClick = () => {
		setIsFollowing((prevState) => !prevState);
	};

	const follow = async () => {
		const { data } = await axios({
			method: "POST",
			url: `http://localhost:8080/follow/${leaderID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { success } = data;

		if (success) {
			setTotalFollowers((prevState) => prevState + 1);

			setIsFollowing(true);
		}
	};

	const unfollow = async () => {
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
			setTotalFollowers((prevState) => prevState - 1);

			setIsFollowing(false);
		}
	};

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
		<Button
			onClick={handleFollowButtonOnClick}
			buttonStyleObject={{
				buttonFontSize: "1.4rem",
				buttonBackgroundColor: "transparent",
				buttonColor: "var(--blue-3)",
				buttonHoverBackgroundColor: "#4e78c336",
				buttonBoxShadow: "0 0 0 1.6px var(--blue-3)",
				buttonPadding: "1rem 0",
			}}
		>
			{isFollowing ? "Following" : "Follow"}
		</Button>
	);
};

export default UserProfileFollowButton;
