import * as React from "react";
import { useParams } from "react-router-dom";

import {
	UserProfile,
	UserProfilePosts,
	UserProfileTabs,
} from "../../views/user-profile";

import { UserProfilePageStyle } from "./UserProfilePageStyle";

import { Posts, HeartEmpty, BookmarkEmpty, Tag } from "../../assets";

const UserProfilePage = () => {
	const { username } = useParams();

	const userProfileTabsArray = React.useMemo(() => {
		return [
			{
				postsEndpoint: `/profile/posts/${username}`,
				tabIcon: <Posts />,
				tabLabel: "Posts",
			},
			{
				postsEndpoint: `/profile/posts/${username}`,
				tabIcon: <HeartEmpty />,
				tabLabel: "Likes",
			},
			{
				postsEndpoint: `/profile/bookmarks/${username}`,
				tabIcon: <BookmarkEmpty />,
				tabLabel: "Bookmarks",
			},
			{
				postsEndpoint: `/profile/tagged/${username}`,
				tabIcon: <Tag />,
				tabLabel: "Tagged",
			},
		];
	}, [username]);

	const [activeTabIndex, setActiveTabIndex] = React.useState(0);
	const [profilePostsEndpoint, setProfilePostsEndpoint] = React.useState(
		userProfileTabsArray[0].postsEndpoint
	);

	const handleTabOnClick = (e, idx, apiEndpoint) => {
		setActiveTabIndex(idx);

		setProfilePostsEndpoint(apiEndpoint);
	};

	return (
		<UserProfilePageStyle>
			<UserProfile />

			<UserProfileTabs
				activeTabIndex={activeTabIndex}
				userProfileTabsArray={userProfileTabsArray}
				handleTabOnClick={handleTabOnClick}
			/>
			{/* <div /> */}

			<UserProfilePosts profilePostsEndpoint={profilePostsEndpoint} />
		</UserProfilePageStyle>
	);
};

export default UserProfilePage;
