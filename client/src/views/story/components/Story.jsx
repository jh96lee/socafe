import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Loader } from "../../shared";
import StoryImage from "./StoryImage";
import StoryText from "./StoryText";

const StoryPreviewStyle = styled.div`
	position: relative;
	display: block;
	margin: 3.5rem auto;
	width: 48rem;
	height: 65rem;
	border: 2px solid var(--separator-2);
	border-radius: 1rem;
	overflow: hidden;
	background: ${(props) => props.storyBackground};
`;

const Story = () => {
	const [story, setStory] = React.useState({});
	const [isStoryLoaded, setIsStoryLoaded] = React.useState(false);

	const storyID = parseInt(useParams().storyID);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const fetchStory = async () => {
		setIsStoryLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/story/${storyID}/${userID}`,
		});

		const { error } = data;

		if (!error) {
			setStory(data);
		}

		setIsStoryLoaded(true);
	};

	React.useEffect(() => {
		fetchStory();
	}, []);

	return isStoryLoaded ? (
		<StoryPreviewStyle
			storyBackground={story.story_background.background_gradient}
		>
			<StoryImage storyImage={story.story_image} />

			<StoryText storyText={story.story_text} />
		</StoryPreviewStyle>
	) : (
		<Loader />
	);
};

export default Story;
