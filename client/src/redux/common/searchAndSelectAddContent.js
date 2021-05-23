import { camelCaseString } from "../../utils/camelCaseString";

// REVIEW: this action is specific to SearchAndSelect (which is a reusable component)
export const searchAndSelectAddContent =
	(searchAndSelectType, searchAndSelectedContent, searchAndSelectedArray) =>
	(dispatch) => {
		const messageObject = {};

		const camelCasedContentType = camelCaseString(searchAndSelectType);

		const actionTypeObject = {
			postUser: {
				addActionType: "ADD_USER_ON_POST",
				messageActionType: "SET_ADD_POST_MESSAGE",
			},
			postCategory: {
				addActionType: "ADD_POST_CATEGORY",
				messageActionType: "SET_ADD_POST_MESSAGE",
			},
			// add in commentUser and productCategory later
		};

		const { addActionType, messageActionType } =
			actionTypeObject[camelCasedContentType];

		if (searchAndSelectedArray.length < 3) {
			const existingContent = searchAndSelectedArray.find((element) => {
				return element.id === searchAndSelectedContent.id;
			});

			if (existingContent) {
				messageObject[camelCasedContentType] =
					"Duplicate selections are not allowed";

				dispatch({
					type: messageActionType,
					// REVIEW: payload needs to be an object with post-category being postCategory
					payload: messageObject,
				});
			} else {
				dispatch({
					type: addActionType,
					payload: searchAndSelectedContent,
				});
			}
		} else {
			messageObject[camelCasedContentType] = "You have exceeded the limit";

			dispatch({
				type: messageActionType,
				payload: messageObject,
			});
		}
	};
