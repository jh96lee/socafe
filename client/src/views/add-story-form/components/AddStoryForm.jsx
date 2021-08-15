import * as React from "react";
import styled from "styled-components";

import AddStoryHeader from "./AddStoryHeader";
import AddStoryBackground from "./AddStoryBackground";
import AddStoryText from "./AddStoryText";

import { AddContentFormStyle, AddContentsStyle } from "../../../styles";

const AddStoryForm = () => {
	return (
		<AddContentFormStyle>
			<AddStoryHeader />

			<AddContentsStyle>
				<AddStoryText />

				<AddStoryBackground />
			</AddContentsStyle>
		</AddContentFormStyle>
	);
};

export default AddStoryForm;
