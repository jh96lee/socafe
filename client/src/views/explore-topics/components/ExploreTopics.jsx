import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import ExploreTopic from "./ExploreTopic";

import { fetchExploreTopics } from "../../../redux/explore/exploreAction";

import { ExploreTopicsStyle } from "../styles/ExploreTopicsStyle";

const ExploreTopics = () => {
	const dispatch = useDispatch();

	const { exploreTopics } = useSelector((state) => state.exploreReducer);

	React.useEffect(() => {
		dispatch(fetchExploreTopics());
	}, []);

	return (
		<ExploreTopicsStyle>
			{exploreTopics.map((topic) => {
				return <ExploreTopic topic={topic} />;
			})}
		</ExploreTopicsStyle>
	);
};

export default ExploreTopics;
