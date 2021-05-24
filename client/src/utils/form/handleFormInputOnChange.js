export const handleFormInputOnChange = (e, formState, dispatch, action) => {
	const copyObject = formState;

	copyObject[e.target.name] = e.target.value;

	dispatch(action(copyObject));
};
