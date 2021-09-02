const initialState = {
	initialProfile: {},
	editedFullName: null,
	editedUsername: null,
	editedEmail: null,
	editedBioNodesArray: null,
	isInitialProfileLoaded: false,
	isProfileUpdating: false,
	editProfileSuccessMessage: null,
	editProfileErrorMessage: null,
};

const editProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_INITIAL_PROFILE":
			return {
				...state,
				isInitialProfileLoaded: false,
			};
		case "FETCHED_INITIAL_PROFILE":
			return {
				...state,
				initialProfile: action.payload,
			};
		case "END_FETCHING_INITIAL_PROFILE":
			return {
				...state,
				isInitialProfileLoaded: true,
			};
		case "START_UPDATING_PROFILE":
			return {
				...state,
				isProfileUpdating: true,
			};
		case "END_UPDATING_PROFILE":
			return {
				...state,
				isProfileUpdating: false,
			};
		case "SET_EDITED_FORM_DATA":
			return {
				...state,
				...action.payload,
				editProfileSuccessMessage: null,
				editProfileErrorMessage: null,
			};
		case "SET_EDITED_BIO_NODES_ARRAY":
			return {
				...state,
				editedBioNodesArray: action.payload,
				editProfileSuccessMessage: null,
			};
		case "SET_EDIT_PROFILE_SUCCESS_MESSAGE":
			return {
				...state,
				editProfileSuccessMessage: action.payload,
			};
		case "SET_EDIT_PROFILE_ERROR_MESSAGE":
			return {
				...state,
				editProfileErrorMessage: action.payload,
			};
		case "RESET_EDITED_DATA":
			return {
				...state,
				editedFullName: "",
				editedUsername: "",
				editedEmail: "",
				editedBioNodesArray: [],
			};
		case "RESET_EDIT_PROFILE":
			return initialState;
		default:
			return state;
	}
};

export default editProfileReducer;
