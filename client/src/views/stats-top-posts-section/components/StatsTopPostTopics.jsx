import * as React from "react";

import { StatsTopPostTopicsStyle } from "../styles/StatsTopPostTopicsStyle";

const StatsTopPostTopics = ({ postTopics }) => {
	return (
		<StatsTopPostTopicsStyle>
			{postTopics.map((topic) => (
				<p key={`post-topic__${topic.id}`}>{topic.title}</p>
			))}
		</StatsTopPostTopicsStyle>
	);
};

export default StatsTopPostTopics;
