import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ExploreTopicStyle } from "../styles/ExploreTopicStyle";

const ExploreTopic = ({ topic }) => {
	const { id } = topic;

	const { selectedTopicIDsArray } = useSelector(
		(state) => state.exploreReducer
	);

	const [isSelected, setIsSelected] = React.useState(
		selectedTopicIDsArray.includes(id.toString())
	);

	const history = useHistory();

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			const updatedTopicIDsArray = isSelected
				? [...selectedTopicIDsArray, id.toString()]
				: selectedTopicIDsArray.filter((topicID) => topicID !== id.toString());

			if (updatedTopicIDsArray.length === 0) {
				history.push("/explore");
			} else {
				const joinedQueryValues = updatedTopicIDsArray.join(",");

				history.push(`/explore?topics=${joinedQueryValues}`);
			}
		}

		afterInitialMount.current = true;
	}, [isSelected]);

	const handleExploreTopicOnClick = () => {
		setIsSelected((prevState) => !prevState);
	};

	return (
		<ExploreTopicStyle
			onClick={handleExploreTopicOnClick}
			isSelectedTopic={isSelected}
		>
			<p>{topic.title}</p>
		</ExploreTopicStyle>
	);
};

export default ExploreTopic;
