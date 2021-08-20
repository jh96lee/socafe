import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Loader, UserMetadata } from "../../shared";
import StoryImage from "./StoryImage";
import StoryText from "./StoryText";
import { ProgressBars } from "../../progress-bars";

import { fetchActiveStory } from "../../../redux/story/active-story/activeStoryAction";

import { convertPixelsToViewWidth } from "../../../utils/story/convertPixelsToViewWidth";

import { StoryStyle, StoryHeaderStyle } from "../styles/StoryStyle";

const Story = () => {
	const dispatch = useDispatch();

	const { activeStory, isActiveStoryLoaded } = useSelector(
		(state) => state.activeStoryReducer
	);

	const { story_background, story_image, story_text, story_owner } =
		activeStory;

	console.log(activeStory);

	const storyID = parseInt(useParams().storyID);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const storyRef = React.useRef();

	React.useEffect(() => {
		dispatch(fetchActiveStory(storyID, userID));
	}, [storyID]);

	return (
		<StoryStyle
			ref={storyRef}
			storyBackground={
				activeStory.story_background && story_background.background_gradient
			}
			responsiveStoryWidth={convertPixelsToViewWidth("480px", 600)}
			responsiveStoryHeight={convertPixelsToViewWidth("720px", 600)}
		>
			{isActiveStoryLoaded ? (
				<React.Fragment>
					<StoryHeaderStyle>
						<ProgressBars />

						<UserMetadata
							userID={story_owner.id}
							avatarURL={story_owner.avatar_url}
							username={story_owner.username}
							avatarSize="3.6rem"
							usernameFontSize="1.4rem"
						/>
					</StoryHeaderStyle>

					<StoryImage storyImage={story_image} />

					<StoryText storyText={story_text} />
				</React.Fragment>
			) : (
				<Loader isLoaderAbsolute={true} />
			)}
		</StoryStyle>
	);
};

export default Story;
