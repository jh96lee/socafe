import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import {
	setToNextActiveStoryIndex,
	setActiveStoryIndex,
} from "../../../redux/story/story-viewership/storyViewershipAction";

const ProgressBarStyle = styled.div`
	position: relative;
	z-index: 1;
	background-color: #72727273;
	width: 100%;
	height: 0.5rem;
	border-radius: 1rem;
	overflow: hidden;
`;

const ProgressionBarStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: ${(props) => `${props.barWidth}%`};
	background-color: #fff;
	height: 0.5rem;
	border-radius: 1rem;
`;

const ProgressBar = ({ progressBarIndex }) => {
	const [width, setWidth] = React.useState(0);

	const dispatch = useDispatch();

	const history = useHistory();

	const storyID = parseInt(useParams().storyID);

	const { activeStoryIndex, userStoryIDsArray } = useSelector(
		(state) => state.storyViewershipReducer
	);

	React.useEffect(() => {
		const activeIndex = userStoryIDsArray.indexOf(storyID);

		dispatch(setActiveStoryIndex(activeIndex));
	}, []);

	React.useEffect(() => {
		let progressBarInterval;

		if (activeStoryIndex !== null) {
			if (activeStoryIndex > progressBarIndex) {
				setWidth(100);

				return;
			}

			if (activeStoryIndex < progressBarIndex) {
				return;
			}

			if (activeStoryIndex === progressBarIndex) {
				// REVIEW: progressBarInterval is an integer (id)
				progressBarInterval = setInterval(() => {
					setWidth((prev) => {
						if (prev >= 99) {
							clearInterval(progressBarInterval);

							return 100;
						} else {
							return prev + 1;
						}
					});
				}, 60);
			}
		}

		return () => {
			clearInterval(progressBarInterval);
		};
	}, [activeStoryIndex, progressBarIndex]);

	React.useEffect(() => {
		if (activeStoryIndex !== null) {
			if (activeStoryIndex === progressBarIndex) {
				if (width >= 99) {
					if (activeStoryIndex !== userStoryIDsArray.length - 1) {
						dispatch(setToNextActiveStoryIndex());
					}
				}
			}
		}
	}, [width]);

	React.useEffect(() => {
		if (activeStoryIndex !== null) {
			history.push(`/story/${userStoryIDsArray[activeStoryIndex]}`);
		}
	}, [activeStoryIndex]);

	return (
		<ProgressBarStyle>
			<ProgressionBarStyle barWidth={width} />
		</ProgressBarStyle>
	);
};

export default ProgressBar;
