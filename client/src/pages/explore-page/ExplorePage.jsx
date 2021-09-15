import * as React from "react";

import { ExplorePosts } from "../../views/explore-posts";
import { ExploreTopics } from "../../views/explore-topics";

import { PageStyle } from "../../styles";

import styled from "styled-components";

const ExplorePageStyle = styled(PageStyle)`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	& > * {
		width: 85%;
		margin: auto;
	}

	/* FIX */
	& button {
		position: relative;
		font-size: 1.45rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--char-default);
		background-color: transparent;
		border: 2px solid var(--separator-2);
		width: 25rem;
		margin-top: 5rem;
	}
`;

const ExplorePage = () => {
	return (
		<ExplorePageStyle>
			<ExploreTopics />

			<ExplorePosts />
		</ExplorePageStyle>
	);
};

export default ExplorePage;
