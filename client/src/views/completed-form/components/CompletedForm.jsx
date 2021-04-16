import * as React from "react";
import styled from "styled-components";

import { RegisterCompletedFormStyle } from "../../../styles";

import { IoFlagSharp } from "react-icons/io5";

const CompletedFormStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70rem;
	margin: auto;
	padding: 2rem;

	h3 {
		font-size: 1.5rem;
		color: white;
	}

	svg {
		width: 10rem;
		height: 10rem;
	}
`;

const CompletedForm = () => {
	return (
		<CompletedFormStyle>
			<IoFlagSharp />

			<h3>Completed!</h3>
		</CompletedFormStyle>
	);
};

export default CompletedForm;
