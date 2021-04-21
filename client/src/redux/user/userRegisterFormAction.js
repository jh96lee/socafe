export const registerFormNextStep = (formStepIndex) => {
	return {
		type: "REGISTER_FORM_NEXT_STEP",
		payload: formStepIndex,
	};
};
