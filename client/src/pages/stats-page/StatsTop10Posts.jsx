import * as React from "react";
import axios from "axios";

import StatsTop10PostsHeader from "./StatsTop10PostsHeader";
import StatsTop10PostsTable from "./StatsTop10PostsTable";
import { Loader } from "../../views/shared";

import { fetchToken } from "../../utils/cookie/fetchToken";

import styled from "styled-components";

const StatsTop10PostsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 70% !important;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: #d2dee4 0px 0px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const StatsTop10Posts = () => {
	const [top10Posts, setTop10Posts] = React.useState([]);
	const [isTop10PostsLoaded, setIsTop10PostsLoaded] = React.useState(false);
	const [mostBy, setMostBy] = React.useState("views");

	const fetchTop10Posts = async () => {
		setIsTop10PostsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/user/stats/top/${mostBy}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setTop10Posts(data);
		}

		setIsTop10PostsLoaded(true);
	};

	React.useEffect(() => {
		fetchTop10Posts();
	}, [mostBy]);

	return (
		<StatsTop10PostsStyle>
			{isTop10PostsLoaded ? (
				<React.Fragment>
					<StatsTop10PostsHeader mostBy={mostBy} setMostBy={setMostBy} />
					<StatsTop10PostsTable posts={top10Posts} />{" "}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</StatsTop10PostsStyle>
	);
};

export default StatsTop10Posts;
