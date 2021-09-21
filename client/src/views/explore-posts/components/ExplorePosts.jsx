import * as React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Loader, Button } from "../../shared";
import ExplorePost from "./ExplorePost";

import {
	fetchExplorePosts,
	fetchExtraExplorePosts,
	setExplorePostsPage,
	setSelectedTopicIDsArray,
} from "../../../redux/explore/exploreAction";

import { fetchTopicIDsFromQueryString } from "../../../utils";

import {
	ExplorePostsStyle,
	ExplorePostsSectionStyle,
} from "../styles/ExplorePostsStyle";

const ExplorePosts = () => {
	const dispatch = useDispatch();

	const { search } = useLocation();

	const {
		currentExplorePostsPage,
		explorePosts,
		isExplorePostsLoaded,
		isExtraExplorePostsLoading,
		explorePostsNextAPIEndpoint,
	} = useSelector((state) => state.exploreReducer);

	React.useEffect(() => {
		dispatch(setExplorePostsPage(true));

		const topicIDsArray = fetchTopicIDsFromQueryString(search);

		if (topicIDsArray) {
			dispatch(setSelectedTopicIDsArray(topicIDsArray));
		}

		const customQueryString =
			topicIDsArray.length !== 0 ? `topics=${topicIDsArray.join(",")}` : "";

		dispatch(fetchExplorePosts(5, customQueryString));
	}, [search]);

	React.useEffect(() => {
		if (currentExplorePostsPage > 1) {
			dispatch(fetchExtraExplorePosts(explorePostsNextAPIEndpoint));
		}
	}, [currentExplorePostsPage]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setExplorePostsPage());
	};

	return (
		<ExplorePostsStyle>
			{isExplorePostsLoaded ? (
				<React.Fragment>
					<ExplorePostsSectionStyle>
						{explorePosts.map((content, idx) => {
							return (
								<ExplorePost
									key={`explore-post__${content.post_id}`}
									post={content}
								/>
							);
						})}
					</ExplorePostsSectionStyle>

					{explorePostsNextAPIEndpoint === null ||
					explorePosts.length === 0 ? null : (
						<Button
							buttonType="contrast"
							buttonStyleObject={{
								buttonPadding: "1.3rem 2.5rem",
							}}
							onClick={handleLoadMoreButtonOnClick}
						>
							{isExtraExplorePostsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</Button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</ExplorePostsStyle>
	);
};

export default ExplorePosts;
