import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomeFeedStoryUser from "./HomeFeedStoryUser";
import { Loader, HorizontallyDraggableSection } from "../../shared";

import { fetchHomeFeedStories } from "../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

const HomeFeedStoryUsers = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const { isHomeFeedStoriesLoaded, homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	React.useEffect(() => {
		if (user) {
			dispatch(fetchHomeFeedStories(2));
		}
	}, []);

	return (
		<HorizontallyDraggableSection
			draggableSectionStyleObject={{
				draggableSectionGap: "2rem",
				draggableSectionPadding: "0rem",
			}}
		>
			{isHomeFeedStoriesLoaded ? (
				<React.Fragment>
					{homeFeedStories.map(({ storyOwner, storyIDsArray }) => {
						return (
							<HomeFeedStoryUser
								key={`home-feed-story__${storyOwner.username}`}
								storyOwner={storyOwner}
								storyIDsArray={storyIDsArray}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HorizontallyDraggableSection>
	);
};

export default HomeFeedStoryUsers;
