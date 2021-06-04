import { camelCaseString } from "../../utils/camelCaseString";
import {
	addUserOnPost,
	addPostCategory,
	setAddPostErrorMessage,
} from "../add-post/addPostAction";
import {
	addUserOnComment,
	setCommentErrorMessage,
} from "../comment/commentAction";

// REVIEW: could be adding post category, product category or tagging a user on a post
export const addContent =
	(searchAndSelectType, selectedContent, searchAndSelectedArray) =>
	(dispatch) => {
		const errorMessageObject = {};

		// REVIEW: post-category becomes postCategory, post-user becomes postUser
		// REVIEW: use this for error message object's property key and to figure out which actions need to be dispatched via bracket notation
		const camelCasedType = camelCaseString(searchAndSelectType);

		const actionObject = {
			postUser: {
				addAction: addUserOnPost,
				messageAction: setAddPostErrorMessage,
			},
			postCategory: {
				addAction: addPostCategory,
				messageAction: setAddPostErrorMessage,
			},
			commentUser: {
				addAction: addUserOnComment,
				messageAction: setCommentErrorMessage,
			},
		};

		const { addAction, messageAction } = actionObject[camelCasedType];

		if (searchAndSelectedArray.length < 3) {
			const existingContent = searchAndSelectedArray.find((element) => {
				return element.id === selectedContent.id;
			});

			if (existingContent) {
				errorMessageObject[camelCasedType] =
					"Duplicate selections are not allowed";

				dispatch(messageAction(errorMessageObject));
			} else {
				dispatch(addAction(selectedContent));
			}
		} else {
			errorMessageObject[camelCasedType] = "You have exceeded the limit";

			dispatch(messageAction(errorMessageObject));
		}
	};
