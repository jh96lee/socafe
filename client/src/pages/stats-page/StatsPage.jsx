import * as React from "react";
import styled from "styled-components";

import StatsTotals from "./StatsTotals";
import StatsGraph from "./StatsGraph";
import StatsDailyGains from "./StatsDailyGains";
import StatsTop10Posts from "./StatsTop10Posts";
import { StatsLineGraphSection } from "../../views/stats-line-graph-section";

import { PageStyle } from "../../styles";

const StatsPageStyle = styled(PageStyle)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	width: calc(100vw - 7.8rem);
	min-height: calc(100vh - 7.8rem);
	padding: 3rem 0;

	/* FIX */
	/* & > * {
		width: 95%;
	} */
`;

// REVIEW: lines include the bottom one as well
const StatsPage = () => {
	return (
		<StatsPageStyle>
			<StatsLineGraphSection />
			{/* <StatsTotals />

			<StatsGraph />

			<StatsDailyGains />

			<StatsTop10Posts /> */}
		</StatsPageStyle>
	);
};

export default StatsPage;
