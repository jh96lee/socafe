import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import ExploreTopic from "./ExploreTopic";

import { fetchExploreTopics } from "../../../redux/explore/exploreAction";

import styled from "styled-components";

const ExploreTopicsStyle = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 1.2rem;
	padding: 2.5rem 0;
`;

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
