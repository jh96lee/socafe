import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HorizontallyDraggableSection } from "../../shared";
import ExploreTopic from "./ExploreTopic";

import { fetchExploreTopics } from "../../../redux/explore/exploreAction";

const ExploreTopics = () => {
	const dispatch = useDispatch();

	const { exploreTopics } = useSelector((state) => state.exploreReducer);

	React.useEffect(() => {
		dispatch(fetchExploreTopics());
	}, []);

	return (
		<HorizontallyDraggableSection>
			{exploreTopics.map((topic) => {
				return <ExploreTopic topic={topic} />;
			})}
		</HorizontallyDraggableSection>
	);
};

export default ExploreTopics;
