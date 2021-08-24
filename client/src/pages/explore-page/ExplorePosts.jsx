import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../views/shared";
import ExplorePost from "./ExplorePost";

import {
	fetchedExplorePosts,
	fetchedExtraExplorePosts,
	setExploreNextAPIEndpoint,
} from "../../redux/explore/exploreAction";

import { usePagination } from "../../hooks";

import { fetchToken } from "../../utils/cookie/fetchToken";

import styled from "styled-components";

const ExplorePostsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 1fr;
	gap: 3rem 2rem;
`;

const ExplorePosts = () => {
	const dispatch = useDispatch();

	const { explorePosts, exploreNextAPIEndpoint, selectedExploreTopicID } =
		useSelector((state) => state.exploreReducer);

	const explorePostsQueryParams = React.useMemo(() => {
		return selectedExploreTopicID ? `&topic=${selectedExploreTopicID}` : null;
	}, [selectedExploreTopicID]);

	const { fetchContents, isInitialContentsLoaded } = usePagination(
		"/post/explore",
		3,
		false,
		true,
		fetchedExplorePosts,
		fetchedExtraExplorePosts,
		setExploreNextAPIEndpoint,
		exploreNextAPIEndpoint,
		explorePostsQueryParams
	);

	React.useEffect(() => {
		const token = fetchToken();

		fetchContents(true, "GET", null, {
			Authorization: `Bearer ${token}`,
		});
	}, [selectedExploreTopicID]);

	return (
		<ExplorePostsStyle>
			{isInitialContentsLoaded ? (
				<React.Fragment>
					{explorePosts.map((content, idx) => {
						return (
							<ExplorePost
								key={`explore-post__${content.post_id}`}
								post={content}
								postIdx={idx}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader isLoaderAbsolute={true} />
			)}
		</ExplorePostsStyle>
	);
};

export default ExplorePosts;
