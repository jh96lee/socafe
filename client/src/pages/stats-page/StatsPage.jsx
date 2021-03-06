import * as React from "react";
import styled from "styled-components";

import { StatsLineGraphSection } from "../../views/stats-line-graph-section";
import { StatsAggregatesSection } from "../../views/stats-aggregates-section";
import { StatsTopPostsSection } from "../../views/stats-top-posts-section";

import { PageStyle } from "../../styles";

const StatsPageStyle = styled(PageStyle)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;
	min-height: calc(100vh - 8rem);
	padding: 3rem 0;
	margin: auto;

	& > * {
		width: 90%;
	}
`;

// REVIEW: lines include the bottom one as well
const StatsPage = () => {
	return (
		<StatsPageStyle>
			<StatsAggregatesSection />

			<StatsLineGraphSection />

			<StatsTopPostsSection />
		</StatsPageStyle>
	);
};

export default StatsPage;
