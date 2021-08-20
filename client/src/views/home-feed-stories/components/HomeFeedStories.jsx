import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import HomeFeedStory from "./HomeFeedStory";
import { Loader } from "../../shared";

import { fetchHomeFeedStories } from "../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

const HomeFeedStoriesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.8rem;
`;

const HomeFeedStories = () => {
	const dispatch = useDispatch();

	const { homeFeedStories, isHomeFeedStoriesLoaded } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	React.useEffect(() => {
		dispatch(fetchHomeFeedStories());
	}, []);

	return (
		<HomeFeedStoriesStyle>
			{isHomeFeedStoriesLoaded ? (
				<React.Fragment>
					{homeFeedStories.map(({ storyOwner, storyIDsArray }) => {
						return (
							<HomeFeedStory
								key={`home-feed-story__${storyOwner.username}`}
								storyOwner={storyOwner}
								storyIDsArray={storyIDsArray}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedStoriesStyle>
	);
};

export default HomeFeedStories;
