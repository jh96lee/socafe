import { camelCaseString } from "../../utils/camelCaseString";

// REVIEW: could be adding post category, product category or tagging a user on a post
export const addContent =
	(
		searchAndSelectType,
		selectedContent,
		searchAndSelectedArray,
		addContentActionCreator,
		setErrorMessageActionCreator
	) =>
	(dispatch) => {
		const errorMessageObject = {};

		// REVIEW: post-category becomes postCategory, post-user becomes postUser
		// REVIEW: use this for error message object's property key and to figure out which actions need to be dispatched via bracket notation
		const camelCasedType = camelCaseString(searchAndSelectType);

		if (searchAndSelectedArray.length < 3) {
			const existingContent = searchAndSelectedArray.find((element) => {
				return element.id === selectedContent.id;
			});

			if (existingContent) {
				errorMessageObject[camelCasedType] =
					"Duplicate selections are not allowed";

				dispatch(setErrorMessageActionCreator(errorMessageObject));
			} else {
				dispatch(addContentActionCreator(selectedContent));
			}
		} else {
			errorMessageObject[camelCasedType] = "You have exceeded the limit";

			dispatch(setErrorMessageActionCreator(errorMessageObject));
		}
	};
