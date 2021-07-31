import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../shared";

import {
	followUser,
	unfollowUser,
	setIsVisitorFollowing,
} from "../../../redux/user-profile/userProfileAction";

import { Follow, Following } from "../../../assets";

import styled from "styled-components";

const UserProfileButtonsStyle = styled.div``;

const UserProfileButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: -0.4px;
	color: ${(props) => (props.isFollowing ? "var(--text-1)" : "#fff")};
	/* background-color: ${(props) =>
		props.isFollowing
			? "var(--button-default-bg-color)"
			: "var(--button-default-bg-color)"}; */
	color: ${(props) => (props.isFollowing ? "" : "#fff")};
	background-color: ${(props) =>
		props.isFollowing ? "transparent" : "var(--button-default-bg-color)"};
	width: 100%;
	padding: 1.2rem 0;
	border-radius: 0.5rem;
	border: none;
	box-shadow: ${(props) =>
		props.isFollowing && "0 0 0 1.4px var(--separator-2)"};
	outline: none;

	& > svg {
		fill: ${(props) =>
			props.isFollowing ? "var(--icon-default-color)" : "#fff"};
		color: ${(props) =>
			props.isFollowing ? "var(--icon-default-color)" : "#fff"};
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		cursor: pointer;
	}
`;

const UserProfileButtons = () => {
	const dispatch = useDispatch();

	const { userProfile, isVisitorFollowing } = useSelector(
		(state) => state.userProfileReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const profileOwnerID = userProfile.id;
	const visitorID = user ? user.id : 0;

	const afterInitialMount = React.useRef();

	const handleFollowButtonOnClick = async () => {
		dispatch(setIsVisitorFollowing());
	};

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isVisitorFollowing) {
				dispatch(followUser(profileOwnerID, visitorID));
			} else {
				dispatch(unfollowUser(profileOwnerID, visitorID));
			}
		}

		afterInitialMount.current = true;
	}, [isVisitorFollowing]);

	return (
		<UserProfileButtonsStyle>
			<UserProfileButtonStyle
				isFollowing={isVisitorFollowing}
				onClick={handleFollowButtonOnClick}
			>
				{isVisitorFollowing ? "Following" : "Follow"}

				{isVisitorFollowing ? <Following /> : <Follow />}
			</UserProfileButtonStyle>
		</UserProfileButtonsStyle>
	);
};

export default UserProfileButtons;
