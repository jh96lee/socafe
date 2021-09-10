import * as React from "react";
import { useHistory } from "react-router-dom";

import { HomeFeedPosts } from "../../views/home-feed-posts";
import { HomeFeedStoryUsers } from "../../views/home-feed-story-users";
import { HomeFeedNotifications } from "../../views/home-feed-notifications";
import { HomeFeedUserSuggestions } from "../../views/home-feed-user-suggestions";

// import Notification from "../notifications-page/Notification";

import { usePagination } from "../../hooks";

import { fetchToken } from "../../utils/cookie/fetchToken";

import { PageStyle } from "../../styles";

import styled from "styled-components";

const HomePageStyle = styled(PageStyle)`
	position: relative;
	background-color: var(--bg-default);
	display: flex;
	gap: 2rem;

	& > *:first-child {
		width: 58rem;
		margin: auto;
	}

	& > *:last-child {
		width: 33rem;
		background-color: blue;
	}
`;

const HomePageLeftStyle = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 58rem;
	margin: auto;
	padding: 3rem 0;
`;

const HomePageRightStyle = styled.div`
	grid-column: 3 / 4;
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 3rem 1.5rem;
`;

const HomePage = () => {
	return (
		<HomePageStyle>
			<HomePageLeftStyle>
				<HomeFeedStoryUsers />

				<HomeFeedPosts />
			</HomePageLeftStyle>

			<HomePageRightStyle>
				<HomeFeedNotifications />

				<HomeFeedUserSuggestions />
			</HomePageRightStyle>
		</HomePageStyle>
	);
};

export default HomePage;
