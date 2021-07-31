import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {
	UserProfile,
	UserProfilePosts,
	UserProfileTabs,
} from "../../views/user-profile";

import { PageStyle } from "../../styles";

import { Posts, HeartEmpty, BookmarkEmpty, Tag } from "../../assets";

const UserProfilePageStyle = styled(PageStyle)`
	display: grid;
	grid-template-columns: 35rem 1fr;
	grid-auto-rows: min-content 1fr;
	gap: 1.8rem 2.5rem;
	width: 90%;
	min-width: 90%;
	margin: 3rem auto;

	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}

	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}

	& > *:nth-child(3) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;

		& > * {
			grid-column: 1 / 2 !important;
		}

		& > *:nth-child(1) {
			grid-row: 1 / 2;
		}

		& > *:nth-child(2) {
			grid-row: 2 / 3;
		}

		& > *:nth-child(3) {
			grid-row: 3 / 4;
		}
	}
`;

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
