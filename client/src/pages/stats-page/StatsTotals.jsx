import axios from "axios";
import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../../views/shared";

import { fetchToken } from "../../utils/cookie/fetchToken";

const StatsTotalsStyle = styled.div``;

const StatsTotalStyle = styled.div``;

const StatsTotals = () => {
	const [statsTotalsArray, setStatsTotalsArray] = React.useState([]);
	const [isStatsTotalsArrayLoaded, setIsStatsTotalsArrayLoaded] =
		React.useState(false);

	const fetchStatsTotals = async () => {
		setIsStatsTotalsArrayLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/user/stats/totals",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		// TODO: remove
		console.log(data);

		if (!error) {
			setStatsTotalsArray(data);
		}

		setIsStatsTotalsArrayLoaded(true);
	};

	React.useEffect(() => {
		fetchStatsTotals();
	}, []);

	return <StatsTotalsStyle></StatsTotalsStyle>;
};

export default StatsTotals;
