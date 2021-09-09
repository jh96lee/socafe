import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import { Loader } from "../../views/shared";

import { fetchToken } from "../../utils/cookie/fetchToken";

import {
	Following,
	CommentOutline,
	HeartEmpty,
	ChartUpFilled,
	ChartDownFilled,
} from "../../assets";

const StatsDailyGainsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 3rem;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: #d2dee4 0px 0px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

	width: 24% !important;
	height: fit-content;

	& > h2 {
		color: var(--text-1);
	}
`;

const StatsDailyStatsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
`;

const StatsDailyStatStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& h4 {
		font-weight: 500;
		letter-spacing: -0.9px;
	}
`;

// FIX
const StatsDailyIconElementStyle = styled.div`
	background-color: aliceblue;
	width: fit-content;
	height: fit-content;
	padding: 0.8rem;
	border: 1px solid #000;
	border-radius: 50%;

	& > svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

const StatsDailyStatNumericalValuesStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;

	& > h4 {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	& > p {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	& svg {
		width: 1.8rem;
		height: 1.8rem;
	}
`;

const StatsDailyGains = () => {
	const [dailyStats, setDailyStats] = React.useState([]);
	const [isDailyStatsLoaded, setIsDailyStatsLoaded] = React.useState(false);

	const fetchDailyGains = async () => {
		setIsDailyStatsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/user/stats/daily",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setDailyStats(sortArray(data));
		}

		setIsDailyStatsLoaded(true);
	};

	React.useEffect(() => {
		fetchDailyGains();
	}, []);

	return (
		<StatsDailyGainsStyle>
			<h2>Daily Analytics</h2>

			{isDailyStatsLoaded ? (
				<StatsDailyStatsStyle>
					{dailyStats.map((stat, idx) => {
						return (
							<StatsDailyStatStyle key={`${stat.category}__${idx}`}>
								<StatsDailyIconElementStyle>
									{stat.category === "followers" ? (
										<Following />
									) : stat.category === "likes" ? (
										<HeartEmpty />
									) : (
										<CommentOutline />
									)}
								</StatsDailyIconElementStyle>

								<h4>{capitalizeFirstLetter(stat.category)}</h4>

								<StatsDailyStatNumericalValuesStyle>
									<h4>
										{stat.percentage >= 0 ? (
											<ChartUpFilled />
										) : (
											<ChartDownFilled />
										)}

										{stat.daily_gained >= 0 ? "+" : "-"}
										{stat.daily_gained}

										{/* {stat.percentage >= 0 ? (
											<ChartUpFilled />
										) : (
											<ChartDownFilled />
										)} */}
									</h4>

									<p>
										{stat.percentage >= 0 ? "+" : "-"}
										{stat.percentage}%
									</p>
								</StatsDailyStatNumericalValuesStyle>
							</StatsDailyStatStyle>
						);
					})}
				</StatsDailyStatsStyle>
			) : (
				<Loader />
			)}
		</StatsDailyGainsStyle>
	);
};

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const sortArray = (array) => {
	const sortedArray = [];
	let filteredArray = [...array];

	do {
		const percentagesArray = filteredArray.map((stat) => stat.percentage);

		const max = Math.max(...percentagesArray);

		const maxNumIndex = percentagesArray.indexOf(max);

		sortedArray.push(filteredArray[maxNumIndex]);

		filteredArray = filteredArray.filter((element, idx) => {
			return idx !== maxNumIndex;
		});
	} while (sortedArray.length !== array.length);

	return sortedArray;
};

export default StatsDailyGains;
