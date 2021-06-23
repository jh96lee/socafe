import * as React from "react";
import { useParams } from "react-router";

import { UserProfileData, UserProfilePosts, UserProfileTabs } from "../index";

import { UserProfileStyle } from "../styles/UserProfileStyle";

import { Posts, HeartEmpty, BookmarkEmpty, Tag } from "../../../assets";

const UserProfile = () => {
	const [currentProfileIndex, setCurrentProfileIndex] = React.useState(0);

	const { userID } = useParams();

	const handleTabsOnClick = React.useCallback((idx) => {
		setCurrentProfileIndex(idx);
	}, []);

	const userProfileContentType = React.useMemo(() => {
		return {
			0: {
				icon: <Posts />,
				label: "Posts",
				content: <UserProfilePosts userID={userID} />,
			},
			1: {
				icon: <HeartEmpty />,
				label: "Liked",
				content: <h1>Liked posts</h1>,
			},
			2: {
				icon: <BookmarkEmpty />,
				label: "Bookmarked",
				content: <h1>Bookmarded posts</h1>,
			},
			3: {
				icon: <Tag />,
				label: "Tagged",
				content: <h1>Tagged posts</h1>,
			},
		};
	}, [userID]);

	const userProfileTabs = Object.values(userProfileContentType);

	return (
		<UserProfileStyle>
			<UserProfileData />

			<UserProfileTabs
				userProfileTabs={userProfileTabs}
				currentProfileIndex={currentProfileIndex}
				handleTabsOnClick={handleTabsOnClick}
			/>

			<UserProfilePosts userID={userID} />
		</UserProfileStyle>
	);
};

export default UserProfile;
