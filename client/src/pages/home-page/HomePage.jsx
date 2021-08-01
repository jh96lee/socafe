import * as React from "react";

import { HomeFeedPosts } from "../../views/home-feed-posts";

import styled from "styled-components";

const HomePageStyle = styled.div``;

const HomePage = () => {
	return (
		<HomePageStyle>
			<HomeFeedPosts />
		</HomePageStyle>
	);
};

export default HomePage;
