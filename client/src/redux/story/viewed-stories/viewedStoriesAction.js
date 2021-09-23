export const setViewedStories = (viewedStories) => ({
	type: "SET_VIEWED_STORIES",
	payload: viewedStories,
});

export const updateViewedStories =
	(storiesOwnerUsername, recentlyViewedStoryIDsArray) =>
	(dispatch, getState) => {
		const { viewedStories } = getState().viewedStoriesReducer;

		const updatedViewedStories = { ...viewedStories };

		if (!viewedStories[storiesOwnerUsername]) {
			updatedViewedStories[storiesOwnerUsername] = recentlyViewedStoryIDsArray;
		} else {
			const updatedStoryIDsArray = [...viewedStories[storiesOwnerUsername]];

			for (let i = 0; i < recentlyViewedStoryIDsArray.length; i++) {
				const storyID = recentlyViewedStoryIDsArray[i];

				if (updatedStoryIDsArray.includes(storyID)) {
					continue;
				} else {
					updatedStoryIDsArray.push(storyID);
				}
			}

			updatedViewedStories[storiesOwnerUsername] = updatedStoryIDsArray;
		}

		localStorage.setItem("viewedStories", JSON.stringify(updatedViewedStories));

		dispatch(setViewedStories(updatedViewedStories));
	};
