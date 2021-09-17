import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../views/shared";
import { UserProfileOwner } from "../../views/user-profile-owner";
import { UserProfileTabs } from "../../views/user-profile-tabs";
import { UserProfilePosts } from "../../views/user-profile-posts";

import { fetchProfileOwner } from "../../redux/user-profile/user-profile-owner/userProfileOwnerAction";
import { fetchUserProfilePosts } from "../../redux/user-profile/user-profile-posts/userProfilePostsAction";

import { UserProfilePageStyle } from "./UserProfilePageStyle";

import { Posts, LikeOutline, BookmarkEmpty, Tag } from "../../assets";

const UserProfilePage = () => {
	const [currentProfileTabIndex, setCurrentProfileTabIndex] = React.useState(0);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);
	const visitorID = user ? user.id : 0;

	const { profileOwner, profileOwnerErrorMessage } = useSelector(
		(state) => state.userProfileOwnerReducer
	);

	const ownerUsername = useParams().username;

	const userProfileTabsArray = React.useMemo(() => {
		return [
			{
				profilePostsType: "posts",
				tabIcon: <Posts />,
				tabLabel: "Posts",
			},
			{
				profilePostsType: "likes",
				tabIcon: <LikeOutline />,
				tabLabel: "Likes",
			},
			{
				profilePostsType: "bookmarks",
				tabIcon: <BookmarkEmpty />,
				tabLabel: "Bookmarks",
			},
			{
				profilePostsType: "tagged",
				tabIcon: <Tag />,
				tabLabel: "Tagged",
			},
		];
	}, []);

	React.useEffect(() => {
		dispatch(fetchProfileOwner(ownerUsername, visitorID));
	}, [ownerUsername]);

	React.useEffect(() => {
		dispatch(
			fetchUserProfilePosts(
				`/profile/posts/${userProfileTabsArray[currentProfileTabIndex].profilePostsType}/${ownerUsername}/${visitorID}`
			)
		);
	}, [ownerUsername, currentProfileTabIndex]);

	return profileOwnerErrorMessage ? (
		<h1 style={{ color: "var(--char-default)" }}>User not found</h1>
	) : (
		<UserProfilePageStyle>
			<UserProfileOwner />

			<UserProfileTabs
				currentProfileTabIndex={currentProfileTabIndex}
				setCurrentProfileTabIndex={setCurrentProfileTabIndex}
				userProfileTabsArray={userProfileTabsArray}
			/>

			<UserProfilePosts />
		</UserProfilePageStyle>
	);
};

export default UserProfilePage;
