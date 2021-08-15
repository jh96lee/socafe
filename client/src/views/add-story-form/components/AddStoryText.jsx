import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
	setIsTextAdded,
	setStoryTextsArray,
} from "../../../redux/add-story/story-texts/storyTextsAction";

import { AddContentStyle } from "../../../styles";

const AddStoryTextButtonStyle = styled.button``;

const AddStoryText = () => {
	const dispatch = useDispatch();

	return (
		<AddContentStyle>
			<h3>Add Text</h3>

			<AddStoryTextButtonStyle onClick={() => dispatch(setStoryTextsArray())}>
				<p>Aa</p> Add Text
			</AddStoryTextButtonStyle>
		</AddContentStyle>
	);
};

export default AddStoryText;
