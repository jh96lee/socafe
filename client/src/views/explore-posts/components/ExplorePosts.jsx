import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../shared";
import ExplorePost from "./ExplorePost";

import {
	fetchedExplorePosts,
	fetchedExtraExplorePosts,
	setExploreNextAPIEndpoint,
} from "../../../redux/explore/exploreAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils";

import styled from "styled-components";

const ExplorePostsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ExplorePostsContainerStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 15vw;
	gap: 3rem 2rem;

	& > *:first-child {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
	}
`;

const ExplorePosts = () => {
	const { explorePosts, exploreNextAPIEndpoint, selectedExploreTopicID } =
		useSelector((state) => state.exploreReducer);

	const explorePostsQueryParams = React.useMemo(() => {
		return selectedExploreTopicID ? `&topic=${selectedExploreTopicID}` : null;
	}, [selectedExploreTopicID]);

	const {
		currentPage,
		setCurrentPage,
		fetchContents,
		isInitialContentsLoaded,
		isExtraContentsLoading,
	} = usePagination(
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

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		const token = fetchToken();

		fetchContents(true, "GET", null, {
			Authorization: `Bearer ${token}`,
		});
	}, [selectedExploreTopicID]);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (explorePosts.length > 0) {
				const token = fetchToken();

				fetchContents(false, "GET", null, {
					Authorization: `Bearer ${token}`,
				});
			}
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<ExplorePostsStyle>
			{isInitialContentsLoaded ? (
				<React.Fragment>
					<ExplorePostsContainerStyle>
						{explorePosts.map((content, idx) => {
							return (
								<ExplorePost
									key={`explore-post__${content.post_id}`}
									post={content}
								/>
							);
						})}
					</ExplorePostsContainerStyle>

					{exploreNextAPIEndpoint === null ||
					explorePosts.length === 0 ? null : (
						<button onClick={handleLoadMoreButtonOnClick}>
							{isExtraContentsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</ExplorePostsStyle>
	);
};

export default ExplorePosts;
