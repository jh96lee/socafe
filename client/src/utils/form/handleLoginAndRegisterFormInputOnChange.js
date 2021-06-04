export const handleLoginAndRegisterFormInputOnChange = (
	e,
	// REVIEW: could be state from either loginReducer or registerReducer
	formState,
	dispatch,
	action
) => {
	const updatedFormState = formState;

	updatedFormState[e.target.name] = e.target.value;

	dispatch(action(updatedFormState));
};
