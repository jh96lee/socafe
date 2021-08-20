import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ProgressBar } from "../index";

const ProgressBarsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
`;

const ProgressBars = () => {
	const { userStoryIDsArray } = useSelector(
		(state) => state.storyViewershipReducer
	);

	return (
		<ProgressBarsStyle>
			{userStoryIDsArray.map((storyID, idx) => {
				return <ProgressBar storyID={storyID} progressBarIndex={idx} />;
			})}
		</ProgressBarsStyle>
	);
};

export default ProgressBars;
