import * as React from "react";
import { useDispatch } from "react-redux";

import { setSelectedExploreTopicID } from "../../../redux/explore/exploreAction";

import styled from "styled-components";

const ExploreTopicStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	width: fit-content;
	padding: 1rem 1.2rem;
	border-radius: 2rem;
	background-color: var(--input-default-bg-color);
	box-shadow: 0 0 0 1px var(--input-default-separator-color);

	& > img {
		width: 4.5rem;
		height: 4.5rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > h5 {
		color: var(--char-default);
		font-size: 1.36rem;
		font-weight: 400;
	}

	&:hover {
		cursor: pointer;
	}
`;

const ExploreTopic = ({ topic }) => {
	const dispatch = useDispatch();

	const handleExploreTopicOnClick = (e) => {
		dispatch(setSelectedExploreTopicID(topic.id));
	};

	return (
		<ExploreTopicStyle onClick={handleExploreTopicOnClick}>
			<h5>{topic.title}</h5>
		</ExploreTopicStyle>
	);
};

export default ExploreTopic;
