import * as React from "react";

import StatsTopPostImage from "./StatsTopPostImage";
import StatsTopPostTopics from "./StatsTopPostTopics";
import StatsTopPostEngagments from "./StatsTopPostEngagments";

import { convertDate } from "../../../utils";

const StatsTopPosts = ({ topPostsArray }) => {
	return (
		<React.Fragment>
			{topPostsArray.map(
				(
					{
						created_at,
						post_images,
						post_topics,
						post_total_views,
						post_total_likes,
						post_total_comments,
					},
					idx
				) => {
					return (
						<React.Fragment>
							<p>#{idx + 1}</p>

							<StatsTopPostImage postImages={post_images} />

							<p>{convertDate(created_at)}</p>

							<StatsTopPostTopics postTopics={post_topics} />

							<StatsTopPostEngagments
								postTotalViews={post_total_views}
								postTotalLikes={post_total_likes}
								postTotalComments={post_total_comments}
							/>
						</React.Fragment>
					);
				}
			)}
		</React.Fragment>
	);
};

export default StatsTopPosts;
