import * as React from "react";

import { HomeFeed } from "../../views/home-feed";

import styled from "styled-components";

const HomePageStyle = styled.div``;

const HomePage = () => {
	return (
		<HomePageStyle>
			<HomeFeed />
		</HomePageStyle>
	);
};

export default HomePage;
