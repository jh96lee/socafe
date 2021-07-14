import * as React from "react";

import { PostTopicsStyle, PostTopicStyle } from "../styles/PostTopicsStyle.js";

const PostTopics = ({ postTopicsArray }) => {
	return (
		<PostTopicsStyle>
			{postTopicsArray.map((topic, idx) => {
				return (
					<PostTopicStyle key={`post-category__${idx}`}>
						{topic.title}
					</PostTopicStyle>
				);
			})}
		</PostTopicsStyle>
	);
};

export default PostTopics;
