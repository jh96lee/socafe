import {
	removePostCategory,
	removeUserOnPost,
} from "../add-post/addPostAction";
import { removeUserOnComment } from "../comment/commentAction";

import { camelCaseString } from "../../utils/camelCaseString";

export const removeContent =
	(searchAndSelectType, contentToRemoveID) => (dispatch) => {
		const camelCasedType = camelCaseString(searchAndSelectType);

		const actionObject = {
			postUser: removeUserOnPost,
			postCategory: removePostCategory,
			commentUser: removeUserOnComment,
			// add in productCategory later
		};

		const removeContentAction = actionObject[camelCasedType];

		dispatch(removeContentAction(contentToRemoveID));
	};
