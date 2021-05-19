export const addContentOnClick =
	(contentType, content, addContentActionType, addContentMessageActionType) =>
	(dispatch, getState) => {
		const contentArrays = (type) => {
			switch (type) {
				// TODO: add these in later product-category, comment-user
				case "post-user":
					return getState().addPostReducer.taggedPostUsersArray;
				case "post-category":
					return getState().addPostReducer.selectedPostCategoriesArray;
				default:
					return null;
			}
		};

		const contentArray = contentArrays(contentType);

		console.log(contentArray);

		if (contentArray.length < 3) {
			const existingContent = contentArray.find((element) => {
				return element.id === content.id;
			});

			if (existingContent) {
				dispatch({
					type: addContentMessageActionType,
					payload: "Duplicate selections are not allowed",
				});
			} else {
				dispatch({
					type: addContentActionType,
					payload: content,
				});
			}
		} else {
			dispatch({
				type: addContentMessageActionType,
				payload: "You have exceeded the limit",
			});
		}
	};
