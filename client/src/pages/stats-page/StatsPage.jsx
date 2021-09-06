import * as React from "react";
import styled from "styled-components";

import StatsTotals from "./StatsTotals";
import StatsGraph from "./StatsGraph";

import { PageStyle } from "../../styles";

const StatsPageStyle = styled(PageStyle)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(100vw - 7.8rem);
	min-height: calc(100vh - 7.8rem);
`;

// REVIEW: lines include the bottom one as well
const StatsPage = () => {
	return (
		<StatsPageStyle>
			<StatsTotals />

			<StatsGraph />
		</StatsPageStyle>
	);
};

export default StatsPage;
