import * as React from "react";
import { useHistory } from "react-router-dom";

import { HomeFeedPosts } from "../../views/home-feed-posts";
import { HomeFeedStoryUsers } from "../../views/home-feed-story-users";
import { HomeFeedNotifications } from "../../views/home-feed-notifications";

// import Notification from "../notifications-page/Notification";

import { usePagination } from "../../hooks";

import { fetchToken } from "../../utils/cookie/fetchToken";

import { PageStyle } from "../../styles";

import styled from "styled-components";

const HomePageStyle = styled(PageStyle)`
	/* display: flex;
	flex-direction: column;
	gap: 2rem; */

	position: relative;
	background-color: var(--bg-1);
	display: flex;
	gap: 2rem;
	margin: 3rem auto;

	& > *:first-child {
		width: 58rem;
		margin: auto;
	}

	& > *:last-child {
		justify-content: flex-end;
		width: 35rem;
	}
`;

const HomePageLeftStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
`;

const HomePageRightStyle = styled.div`
	display: flex;
	justify-content: flex-end;
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
			</HomePageRightStyle>
		</HomePageStyle>
	);
};

export default HomePage;
