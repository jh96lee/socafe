import * as React from "react";
import { useSelector } from "react-redux";

import HomeFeedStoryUser from "./HomeFeedStoryUser";
import { HorizontallyDraggableSection } from "../../shared";

const HomeFeedStoryUsers = () => {
	const { homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	return (
		<HorizontallyDraggableSection
			draggableSectionStyleObject={{
				draggableSectionGap: "2rem",
				draggableSectionPadding: "0rem",
				draggableSectionMinHeight: "8.3rem",
			}}
		>
			{homeFeedStories.map(({ storyOwner, storyIDsArray }) => {
				return (
					<HomeFeedStoryUser
						key={`home-feed-story__${storyOwner.username}`}
						storyOwner={storyOwner}
						storyIDsArray={storyIDsArray}
					/>
				);
			})}
		</HorizontallyDraggableSection>
	);
};

export default HomeFeedStoryUsers;
