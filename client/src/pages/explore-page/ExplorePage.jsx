import * as React from "react";
import { useDispatch } from "react-redux";

import { ExplorePosts } from "../../views/explore-posts";
import { ExploreTopics } from "../../views/explore-topics";

import { resetExplore } from "../../redux/explore/exploreAction";

import { ExplorePageStyle } from "./ExplorePageStyle";

const ExplorePage = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetExplore());
		};
	}, []);

	return (
		<ExplorePageStyle>
			<ExploreTopics />

			<ExplorePosts />
		</ExplorePageStyle>
	);
};

export default ExplorePage;
