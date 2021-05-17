import {
	addPostCategory,
	addUserOnPost,
} from "../redux/add-post/addPostAction";

// REVIEW: either fire off the appropriate action and add in post category, product category or user
export const addContentSearchResultOnClick = (
	dispatch,
	searchResult,
	searchResultActionType,
	selectedValuesArray
) => {
	if (selectedValuesArray.length < 3) {
		const existingValue = selectedValuesArray.find((element) => {
			return element.id === searchResult.id;
		});

		if (existingValue) {
			console.log("NO DUPS");
		} else {
			const addSearchResultAction =
				searchResultActionType === "ADD_POST_CATEGORY"
					? addPostCategory
					: searchResultActionType === "ADD_USER_ON_POST"
					? addUserOnPost
					: "";

			dispatch(addSearchResultAction(searchResult));
		}
	} else {
		console.log("NO MORE THAN 3");
	}
};
