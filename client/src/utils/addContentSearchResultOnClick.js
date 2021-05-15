import { addPostCategories } from "../redux/add-post/addPostAction";

// REVIEW: either fire off the appropriate action and add in post category, product category or user
export const addContentSearchResultOnClick = (
	dispatch,
	selectedResult,
	searchResultType,
	selectedValuesArray
) => {
	if (selectedValuesArray.length < 3) {
		const existingValue = selectedValuesArray.find((element) => {
			return element.id === selectedResult.id;
		});

		if (existingValue) {
			console.log("NO DUPS");
		} else {
			const addSearchResultAction =
				searchResultType === "SELECT_POST_CATEGORY" ? addPostCategories : "";

			dispatch(addSearchResultAction(selectedResult));
		}
	} else {
		console.log("NO MORE THAN 3");
	}
};
