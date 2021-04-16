import * as React from "react";

import { RegisterForm } from "../../views/register-form";
import { CategoriesOfInterestForm } from "../../views/categories-of-interest-form";
import { CompletedForm } from "../../views/completed-form";

import { FormPageStyle } from "../../styles";

const RegisterPage = () => {
	const [currentIndexState, setCurrentIndexStage] = React.useState(2);

	const RegisterSteps = {
		0: {
			step: "Create an account",
			element: <RegisterForm setCurrentIndexStage={setCurrentIndexStage} />,
		},
		1: {
			step: "Create an account",
			element: (
				<CategoriesOfInterestForm setCurrentIndexStage={setCurrentIndexStage} />
			),
		},
		2: { step: "Finish", element: <CompletedForm /> },
	};

	return (
		<FormPageStyle>{RegisterSteps[currentIndexState].element}</FormPageStyle>
	);
};

export default RegisterPage;
