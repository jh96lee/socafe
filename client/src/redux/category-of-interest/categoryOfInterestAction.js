import axios from "axios";

import { setRegisterStep } from "../register/registerAction";

import { fetchToken } from "../../utils/cookie/fetchToken";

const setCategoryOfInterestErrorMessage = (errorMessage) => ({
	type: "SET_CATEGORY_OF_INTEREST_ERROR_MESSAGE",
	payload: errorMessage,
});

const setCategoryOfInterestSuccessMessage = (successMessage) => ({
	type: "SET_CATEGORY_OF_INTEREST_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const postCategoryOfInterest =
	(selectedPostCategoriesArray) => async (dispatch) => {
		const token = fetchToken();

		dispatch({
			type: "START_POSTING_CATEGORY_OF_INTEREST",
		});

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/category/post/interest",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				selectedCategories: selectedPostCategoriesArray,
			},
		});

		dispatch({
			type: "END_POSTING_CATEGORY_OF_INTEREST",
		});

		const { error, success } = data;

		if (success) {
			dispatch(setCategoryOfInterestSuccessMessage(success));

			dispatch(setRegisterStep());
		} else {
			dispatch(setCategoryOfInterestErrorMessage(error));
		}
	};

export const resetCategoryOfInterest = () => ({
	type: "RESET_CATEGORY_OF_INTEREST",
});
