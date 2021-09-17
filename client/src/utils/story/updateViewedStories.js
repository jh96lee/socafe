const updateViewedStories = (
	viewedStories,
	usersStoriesArray,
	selectedUserStoriesIndex,
	userStoryIDsArray
) => {
	const updatedViewedStories = { ...viewedStories };

	const { storyOwner, storyIDsArray } =
		usersStoriesArray[selectedUserStoriesIndex];

	const viewedStoryOwnerUsername = storyOwner.username;

	if (!viewedStories[viewedStoryOwnerUsername]) {
		updatedViewedStories[viewedStoryOwnerUsername] = storyIDsArray;
	} else {
		for (let i = 0; i < storyIDsArray.length; i++) {
			const recentlyViewedStoryID = userStoryIDsArray[i];

			const indexOfRecentlyViewedStoryID = viewedStories[
				viewedStoryOwnerUsername
			].indexOf(recentlyViewedStoryID);

			if (indexOfRecentlyViewedStoryID === -1) {
				updatedViewedStories[viewedStoryOwnerUsername].push(
					recentlyViewedStoryID
				);
			} else {
				continue;
			}
		}
	}

	return updatedViewedStories;
};

export default updateViewedStories;
