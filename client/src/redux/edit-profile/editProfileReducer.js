const initialState = {
	profileToEdit: {},
	fullName: "",
	username: "",
	email: "",
	bioNodesArray: null,
	isProfileToEditLoaded: false,
	isProfileToEditUpdaing: false,
};

const editProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_PROFILE_TO_EDIT":
			return {
				...state,
				isProfileToEditLoaded: false,
			};
		case "FETCHED_PROFILE_TO_EDIT":
			return {
				...state,
				profileToEdit: action.payload,
			};
		case "END_FETCHING_PROFILE_TO_EDIT":
			return {
				...state,
				isProfileToEditLoaded: true,
			};
		default:
			return state;
	}
};

export default editProfileReducer;
