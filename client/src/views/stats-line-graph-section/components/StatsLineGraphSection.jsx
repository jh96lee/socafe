import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import StatsLineGraphHeader from "./StatsLineGraphHeader";
import StatsLineGraph from "./StatsLineGraph";

import { fetchToken } from "../../../utils/cookie/fetchToken";
import { getXAxisArray } from "../utils/getXAxisArray";
import { getYAxisArray } from "../utils/getYAxisArray";
import { getCoordinatesArray } from "../utils/getCoordinatesArray";
import { getTopYAxisValue } from "../utils/getTopYAxisValue";

import { StatsLineGraphSectionStyle } from "../styles/StatsLineGraphSectionStyle";

const StatsLineGraphSection = ({ numberOfGraphLines = 5 }) => {
	const [viewsArray, setViewsArray] = React.useState([]);
	const [isViewsArrayLoaded, setIsViewsArrayLoaded] = React.useState([]);
	const [xAxisArray, setXAxisArray] = React.useState([]);
	const [yAxisArray, setYAxisArray] = React.useState([]);
	const [coordinatesArray, setCoordinatesArray] = React.useState([]);
	const [topYAxisValue, setTopYAxisValue] = React.useState(null);
	const [contentType, setContentType] = React.useState("post");
	const [nDays, setNDays] = React.useState(7);

	const fetchViewsArray = async () => {
		setIsViewsArrayLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/user/stats/views/${contentType}/${nDays}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setViewsArray(data);

			setTopYAxisValue(getTopYAxisValue(data, numberOfGraphLines));
		}

		setIsViewsArrayLoaded(true);
	};

	React.useEffect(() => {
		fetchViewsArray();
	}, [contentType, nDays]);

	React.useEffect(() => {
		if (viewsArray.length > 0 && isViewsArrayLoaded) {
			setXAxisArray(getXAxisArray(viewsArray));

			setYAxisArray(getYAxisArray(topYAxisValue, numberOfGraphLines));

			setCoordinatesArray(getCoordinatesArray(viewsArray, topYAxisValue));
		}
	}, [isViewsArrayLoaded]);

	return isViewsArrayLoaded ? (
		<StatsLineGraphSectionStyle>
			<StatsLineGraphHeader
				contentType={contentType}
				setContentType={setContentType}
				nDays={nDays}
				setNDays={setNDays}
			/>

			<StatsLineGraph
				xAxisArray={xAxisArray}
				yAxisArray={yAxisArray}
				coordinatesArray={coordinatesArray}
				topYAxisValue={topYAxisValue}
			/>
		</StatsLineGraphSectionStyle>
	) : (
		<Loader />
	);
};

export default StatsLineGraphSection;
