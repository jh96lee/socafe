import React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import StatsAggregate from "./StatsAggregate";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { StatsAggregatesSectionStyle } from "../styles/StatsAggregatesSectionStyle";

import {
	MultipleUsersColored,
	HeartColored,
	CommentColored,
	PostColored,
} from "../../../assets";

const StatsAggregatesSection = () => {
	const [aggregateStats, setAggregateStats] = React.useState({});
	const [isAggregateStatsLoaded, setIsAggregateStatsLoaded] =
		React.useState(false);

	const {
		stats_total_comments,
		stats_total_followers,
		stats_total_likes,
		stats_total_posts,
	} = aggregateStats;

	const fetchAggregateStats = async () => {
		setIsAggregateStatsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/stats/aggregates",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setAggregateStats(data);
		}

		setIsAggregateStatsLoaded(true);
	};

	React.useEffect(() => {
		fetchAggregateStats();
	}, []);

	return (
		<StatsAggregatesSectionStyle>
			{isAggregateStatsLoaded ? (
				<React.Fragment>
					<StatsAggregate
						aggregateIcon={<MultipleUsersColored />}
						aggregateLabel="Total Followers"
						aggregateStat={stats_total_followers.total_followers}
					/>

					<StatsAggregate
						aggregateIcon={<PostColored />}
						aggregateLabel="Total Posts"
						aggregateStat={stats_total_posts.total_posts}
					/>

					<StatsAggregate
						aggregateIcon={<HeartColored />}
						aggregateLabel="Total Likes"
						aggregateStat={stats_total_likes.total_likes}
					/>

					<StatsAggregate
						aggregateIcon={<CommentColored />}
						aggregateLabel="Total Comments"
						aggregateStat={stats_total_comments.total_comments}
					/>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</StatsAggregatesSectionStyle>
	);
};

export default StatsAggregatesSection;
