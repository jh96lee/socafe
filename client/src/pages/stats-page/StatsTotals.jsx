import axios from "axios";
import * as React from "react";
import styled from "styled-components";

import { IconElement, Loader } from "../../views/shared";

import { fetchToken } from "../../utils/cookie/fetchToken";

import { Posts, Following, HeartEmpty, CommentOutline } from "../../assets";

const StatsTotalsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	width: 100%;
`;

const StatsTotalStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: #d2dee4 0px 0px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const StatsTotalconElementStyle = styled.div`
	padding: 1.2rem;
	background-color: antiquewhite;
	border-radius: 50%;

	& > svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

const StatsTotalValuesStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > span {
		font-weight: 500;
	}
`;

const StatsTotals = () => {
	const [statsTotals, setStatsTotals] = React.useState([]);
	const [isStatsTotalsLoaded, setIsStatsTotalsLoaded] = React.useState(false);

	const {
		stats_total_comments,
		stats_total_followers,
		stats_total_likes,
		stats_total_posts,
	} = statsTotals;

	const fetchStatsTotals = async () => {
		setIsStatsTotalsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/user/stats/totals",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setStatsTotals(data);
		}

		setIsStatsTotalsLoaded(true);
	};

	React.useEffect(() => {
		fetchStatsTotals();
	}, []);

	return (
		<StatsTotalsStyle>
			{isStatsTotalsLoaded ? (
				<React.Fragment>
					<StatsTotalStyle>
						<StatsTotalconElementStyle>
							<Following />
						</StatsTotalconElementStyle>

						<StatsTotalValuesStyle>
							<span>Total Followers</span>

							<h1>{stats_total_followers.total_followers}</h1>
						</StatsTotalValuesStyle>
					</StatsTotalStyle>

					<StatsTotalStyle>
						<StatsTotalconElementStyle>
							<Posts />
						</StatsTotalconElementStyle>

						<StatsTotalValuesStyle>
							<span>Total Posts</span>

							<h1>{stats_total_posts.total_posts}</h1>
						</StatsTotalValuesStyle>
					</StatsTotalStyle>

					<StatsTotalStyle>
						<StatsTotalconElementStyle>
							<HeartEmpty />
						</StatsTotalconElementStyle>

						<StatsTotalValuesStyle>
							<span>Total Likes</span>

							<h1>{stats_total_likes.total_likes}</h1>
						</StatsTotalValuesStyle>
					</StatsTotalStyle>

					<StatsTotalStyle>
						<StatsTotalconElementStyle>
							<CommentOutline />
						</StatsTotalconElementStyle>

						<StatsTotalValuesStyle>
							<span>Total Comments</span>

							<h1>{stats_total_comments.total_comments}</h1>
						</StatsTotalValuesStyle>
					</StatsTotalStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</StatsTotalsStyle>
	);
};

export default StatsTotals;
