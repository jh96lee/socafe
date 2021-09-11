import * as React from "react";

import { StatsTopPostEngagmentsStyle } from "../styles/StatsTopPostEngagmentsStyle";

import { ViewOutline, HeartEmpty, CommentOutline } from "../../../assets";

const StatsTopPostEngagments = ({
	postTotalViews,
	postTotalLikes,
	postTotalComments,
}) => {
	return (
		<StatsTopPostEngagmentsStyle>
			<p>
				<ViewOutline />

				{postTotalViews}
			</p>

			<p>
				<HeartEmpty />

				{postTotalLikes}
			</p>

			<p>
				<CommentOutline />

				{postTotalComments}
			</p>
		</StatsTopPostEngagmentsStyle>
	);
};

export default StatsTopPostEngagments;
