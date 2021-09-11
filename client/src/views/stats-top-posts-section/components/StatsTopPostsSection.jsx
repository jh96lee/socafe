import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import StatsTopPostsFilter from "./StatsTopPostsFilter";
import StatsTopPosts from "./StatsTopPosts";

import { fetchToken } from "../../../utils/cookie/fetchToken";
import { attachEDToString } from "../utils/attachEDToString";

import { StatsSectionStyle, StatsHeaderStyle } from "../../../styles";
import { StatsTopPostsTableStyle } from "../styles/StatsTopPostsTableStyle";

const StatsTopPostsSection = () => {
	const [topPostsArray, setTopPostsArray] = React.useState([]);
	const [isTopPostsArrayLoaded, setIsTopPostsArrayLoaded] =
		React.useState(false);
	const [topBy, setTopBy] = React.useState("views");

	const fetchTopPosts = async () => {
		setIsTopPostsArrayLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/stats/top/${topBy}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setTopPostsArray(data);
		}

		setIsTopPostsArrayLoaded(true);
	};

	React.useEffect(() => {
		fetchTopPosts();
	}, [topBy]);

	return (
		<StatsSectionStyle>
			<StatsHeaderStyle>
				<h2>Most {attachEDToString(topBy)} posts</h2>

				<StatsTopPostsFilter topBy={topBy} setTopBy={setTopBy} />
			</StatsHeaderStyle>

			{isTopPostsArrayLoaded ? (
				<StatsTopPostsTableStyle>
					<span>RANK</span>

					<span>IMAGE</span>

					<span>UPLOAD DATE</span>

					<span>TOPICS</span>

					<span>ENGAGEMENT</span>

					<StatsTopPosts topPostsArray={topPostsArray} />
				</StatsTopPostsTableStyle>
			) : (
				<Loader />
			)}
		</StatsSectionStyle>
	);
};

export default StatsTopPostsSection;
