import * as React from "react";

import { HomeFeedPosts } from "../../views/home-feed-posts";
import { HomeFeedStoryUsers } from "../../views/home-feed-story-users";

import styled from "styled-components";

const HomePageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 3rem auto;
`;

const HomePage = () => {
	return (
		<HomePageStyle>
			<HomeFeedStoryUsers />

			<HomeFeedPosts />
		</HomePageStyle>
	);
};

export default HomePage;
